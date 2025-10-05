import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const CommonEnvPath = process.env.DataPath;

// Launch the browser and open a new blank page.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CommonFilesPath = path.join(__dirname, "..", "..", "..", CommonEnvPath);

const StartFunc = ({ inPk, inAckId }) => {
    const LocalDataPath = path.join(CommonFilesPath, "waAck.json");

    const LocalBillsData = fs.readFileSync(LocalDataPath);
    const LocalBillsDataAsJson = JSON.parse(LocalBillsData);

    if (inPk in LocalBillsDataAsJson) {
        return false;
    };

    LocalBillsDataAsJson[inPk] = {};
    LocalBillsDataAsJson[inPk].WAAckId = inAckId;

    fs.writeFileSync(LocalDataPath, JSON.stringify(LocalBillsDataAsJson));
    return true;
};

export { StartFunc };