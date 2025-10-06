import { StartFunc as StartFuncFromWA } from "../../../../WaV4/signOut.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA();
    inws.send("StopWADone");
};

export { StartFunc };