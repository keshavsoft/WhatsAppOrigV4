import { StartFunc as StartFuncFromWA } from "../../../../WaV2/entryFile.js";

let StartFunc = async () => {
    await StartFuncFromWA();
};

export { StartFunc };