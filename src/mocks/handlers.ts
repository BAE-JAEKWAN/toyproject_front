import { rest } from "msw";
import { boardList } from "@/mocks/api/boardListData";

export const handlers = [
  rest.get("/getList", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(boardList));
  }),
];
