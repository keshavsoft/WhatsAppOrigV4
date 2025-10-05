import express from 'express';
import { StartFunc as StartFuncFromStartWA } from "./startWA.js";
import { StartFunc as StartFuncFromSendMessage } from "./sendMessage.js";

var router = express.Router();

router.get('/Start', async (req, res) => {
    await StartFuncFromStartWA({ inReponse: res });

    await res.end();
});

router.get('/SendMessage', async (req, res) => {
    await StartFuncFromSendMessage({ inReponse: res });

    await res.end();
});

export { router };