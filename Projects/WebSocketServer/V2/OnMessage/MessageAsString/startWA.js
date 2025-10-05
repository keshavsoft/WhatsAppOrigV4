import { StartFunc as StartFuncFromWA } from "../../../../WaV3/startWA.js";

let StartFunc = async () => {
    await StartFuncFromWA();
};

export { StartFunc };