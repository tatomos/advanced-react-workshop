import express from "express";
import React from "react";
import {renderToString} from "react";

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const unwrappedPromiseJsx = await unwrapJsx(
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" type="image/svg+xml" href="/src/favicon.svg"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>My Todo App</title>
        </head>
        <body>
        <div id="root">
            <App></App>
        </div>
        <script type="module" src="http://localhost:8080/index.jsx"></script>
        </body>
        </html>
    )

    const html = renderToString(unwrappedPromiseJsx)
    res.send(html);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

async function unwrapJsx(jsx: JSX.Element) {}