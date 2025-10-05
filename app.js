import express from 'express';
import http from 'http';

import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);
// const port = 3000;

var port = normalizePort(process.env.PORT || 3000);

import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { StartFunc as StartFuncFromWebSocketServer } from "./Projects/WebSocketServer/V2/entryFile.js";
import { router as routerFromWA } from "./Projects/WaV3/entryFile.js";

import { router as routerFromSecret } from "./Secret/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromV5 } from "./V5/routes.js";
import { router as routerFromSV5 } from "./SV5/routes.js";
import { router as routerFromV6 } from "./V6/routes.js";
import { router as routerFromSV6 } from "./SV6/routes.js";
import { router as routerFromV7 } from "./V7/routes.js";
import { router as routerFromV8 } from "./V8/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

// app.get('/StartWA', async (req, res) => {
//     await StartFuncFromWaV3({ inReponse: res });
// });

app.use("/WA", routerFromWA);

app.use("/Secret", routerFromSecret);
app.use("/Users", routerFromUsers);
app.use("/V5", routerFromV5);
app.use("/SV5", StartFuncFromMiddleware, routerFromSV5);
app.use("/V6", routerFromV6);
app.use("/SV6", StartFuncFromMiddleware, routerFromSV6);
app.use("/V7", routerFromV7);
app.use("/V8", routerFromV8);

StartFuncFromWebSocketServer(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});