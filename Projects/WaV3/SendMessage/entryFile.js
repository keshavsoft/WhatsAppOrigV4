import { StartFunc as StartFuncFromGeneratePdf } from "./generatePdf.js";
import { StartFunc as StartFuncFromSendWA } from "./sendToWA.js";

const StartFunc = async ({ inPk }) => {
    await StartFuncFromGeneratePdf({ inPk });
    return await StartFuncFromSendWA({ inPk });
};

export { StartFunc };