import { StartFunc as StartFuncFromWA } from "../../../../WaV4/startWA.js";

let StartFunc = async () => {
    await StartFuncFromWA();
};

export { StartFunc };