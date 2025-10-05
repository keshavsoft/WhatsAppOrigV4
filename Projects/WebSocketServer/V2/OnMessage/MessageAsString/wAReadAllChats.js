import { StartFunc as StartFuncFromWA } from "../../../../WaV3/readAllChats.js";

let StartFunc = ({ inws }) => {
    StartFuncFromWA().then();
    inws.send("WAReadAllChats");
};

export { StartFunc };