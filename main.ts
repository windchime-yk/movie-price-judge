import { PRICE_UNITEDCINEMA } from "./core/constant.ts";
import { showJudge } from "./core/judge.ts";

const [count] = Deno.args;

showJudge(PRICE_UNITEDCINEMA, count);
