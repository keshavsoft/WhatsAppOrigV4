import { StartFunc as StartFuncFromWA } from "../../../../../WaV4/readChatsFromNumber.js";

let StartFunc = ({ inws, inFromNumber }) => {
    StartFuncFromWA({ inFromNumber }).then();
    inws.send("WAReadFromSingleNumber");
};

export { StartFunc };