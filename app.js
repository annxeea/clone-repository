const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
        <style>
            .space{
                padding-top: 20px;
                justify-content: center;
            }

            input[type="text"]{
                width: 300px;
                padding: 10px;
                border-radius: 2px;
                border: 1px solid #ccc;
            } 

            .button{
                background-color: blue;
                padding: 15px 30px;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s;
                border: none;
            }
            .blablo{
                text-align: center;
            }
        </style>
    </head>

    <body>
        <div class="blablo">
            <a href="https://png2.cleanpng.com/sh/b724ef8b7085f887cd6a511f65fe5e4d/L0KzQYm3U8MyN5x8iZH0aYP2gLBuTflxcJDzfZ9ubXHsfH7pjCgua5DyiOd9ZYKwebT2jwMudJDsh59ubXHsfH68gfJnOWg1TaNvOEK5SHA9WcA2P2M9TaMAMkK3R4OAUMkyOmo2RuJ3Zx==/kisspng-iphone-email-box-computer-icons-logo-email-5abf17051f8268.6905728515224727091291.png">
                <img src="https://png2.cleanpng.com/sh/b724ef8b7085f887cd6a511f65fe5e4d/L0KzQYm3U8MyN5x8iZH0aYP2gLBuTflxcJDzfZ9ubXHsfH7pjCgua5DyiOd9ZYKwebT2jwMudJDsh59ubXHsfH68gfJnOWg1TaNvOEK5SHA9WcA2P2M9TaMAMkK3R4OAUMkyOmo2RuJ3Zx==/kisspng-iphone-email-box-computer-icons-logo-email-5abf17051f8268.6905728515224727091291.png" alt="Email icon" width="100">
            </a>
        </div>
       </div>
        <h1 style="text-align: center">Get the invite</h1>
        <p style="text-align: center">Lorem ipsu dolor sit amet. consectetur adipiscing elit. Aliquam viverra orci ut.</p>
        <center>
            <input  type="text" id="email" placeholder="Enter email" >
            <br>
            <div class="space">
            <button style="color:white" class="button">REQUEST INVITE</button>
            </div>
        </center>
    </body>
    <section>
    
    </section>
  </body>
</html>
`
