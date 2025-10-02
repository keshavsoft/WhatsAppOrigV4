import { StartFunc as StartFuncFromWA } from "../../../../WaV2/signOut.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA();
    inws.send("StopWADone");
};

export { StartFunc };