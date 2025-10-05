import { StartFunc as StartFuncFromWA } from "../../../../WaV3/signOut.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA();
    inws.send("StopWADone");
};

export { StartFunc };