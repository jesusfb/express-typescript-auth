import { Request, Response } from "express";

import { asyncWrapper } from "../asyncWrapper";
import { sendResponse } from "../../util";

const helloController = {
  hello: asyncWrapper(async (_req: Request, res: Response) => {
    sendResponse(res, { msg: "Hello world" });
  }),
};

export default helloController;
