import express from 'express';

const router = express.Router();

import { router as routerFromwaAck } from "./waAck/routes.js";
import { router as routerFromBillItemsTable } from "./BillItemsTable/routes.js";
import { router as routerFromBillsTable } from "./BillsTable/routes.js";
import { router as routerFrommessages } from "./messages/routes.js";
import { router as routerFromStudentNames } from "./StudentNames/routes.js";
import { router as routerFrommobiles } from "./mobiles/routes.js";

router.use("/waAck", routerFromwaAck);
router.use("/BillItemsTable", routerFromBillItemsTable);
router.use("/BillsTable", routerFromBillsTable);
router.use("/messages", routerFrommessages);
router.use("/StudentNames", routerFromStudentNames);
router.use("/mobiles", routerFrommobiles);

export { router };