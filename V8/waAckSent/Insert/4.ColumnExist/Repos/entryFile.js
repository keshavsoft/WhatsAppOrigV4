import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnWAAckId,LocalCoumnDeliveredDT}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnWAAckId,LocalCoumnDeliveredDT});

    return LocalFromDal;
};

export {
    postDefaultFunc
};