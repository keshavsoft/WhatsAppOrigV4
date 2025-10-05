import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnWAAckId,LocalCoumnDeliveredDT}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnWAAckId,LocalCoumnDeliveredDT});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};