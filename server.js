const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3001;

// Kết nối đến cơ sở dữ liệu MongoDB
mongoose.connect("mongodb://localhost:27017/inviteApp", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Định nghĩa Schema cho dữ liệu người dùng
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    isVerified: { type: Boolean, default: false }
});

const User = mongoose.model("User", userSchema);

// Định nghĩa route để xử lý yêu cầu "REQUEST INVITE"
app.post("/request-invite", async (req, res) => {
    const { email } = req.body;

    try {
        // Kiểm tra xem email đã tồn tại trong cơ sở dữ liệu chưa
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("Email đã được sử dụng.");
        }

        // Tạo một người dùng mới và lưu vào cơ sở dữ liệu
        const newUser = new User({ email });
        await newUser.save();

        // Gửi email xác nhận đến địa chỉ email người dùng
        await sendVerificationEmail(email);

        res.status(200).send("Yêu cầu đã được gửi. Vui lòng kiểm tra email của bạn để xác nhận.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Đã xảy ra lỗi khi xử lý yêu cầu.");
    }
});

// Hàm gửi email xác nhận
async function sendVerificationEmail(email) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your_email@gmail.com", // Email người gửi
            pass: "your_password" // Mật khẩu của email người gửi
        }
    });

    const mailOptions = {
        from: "your_email@gmail.com", // Địa chỉ email người gửi
        to: email, // Địa chỉ email người nhận
        subject: "Xác nhận yêu cầu lời mời",
        text: "Vui lòng xác nhận yêu cầu lời mời bằng cách nhấp vào liên kết sau: https://yourwebsite.com/verify"
    };

    await transporter.sendMail(mailOptions);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
