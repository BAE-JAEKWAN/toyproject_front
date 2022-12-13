import { setupWorker } from "msw";
import { handlers } from "./handlers";

// 정의했던 handler들을 worker에 등록합니다.
export const worker = setupWorker(...handlers);
