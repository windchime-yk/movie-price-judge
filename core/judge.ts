import { amountPool, pointPool, winnerPool } from "./constant.ts";
import { zeroPadding } from "./utils.ts";
import type {
  AmountPool,
  JudgeType,
  PointPool,
  Price,
  WinnerPool,
} from "../model.ts";

// Fullは参考として出しているだけなので、勝敗の中には含めない
const winner = (amountPool: AmountPool) => {
  if (amountPool.free < amountPool.reduction) {
    return zeroPadding("Free", 9, " ");
  } else if (amountPool.free === amountPool.reduction) {
    return zeroPadding("Draw", 9, " ");
  } else {
    return zeroPadding("Reduction", 9, " ");
  }
};

const showTable = {
  header: () => {
    console.log(`|-------------------------------------------------------|`);
    console.log(`|       |              genre              |             |`);
    console.log(`|-------|---------------------------------|-------------|`);
    console.log(`| count |   Full   |   Free   | Reduction |     win     |`);
    console.log(`|-------|----------|----------|-----------|-------------|`);
  },
  body: (
    price: Price,
    count: string,
    amountPool: AmountPool,
    pointPool: PointPool,
    winnerPool: WinnerPool,
  ) => {
    for (let i = 1; i <= Number(count); i++) {
      amountPool.full += price.FULL;
      if (pointPool.free === 6) {
        pointPool.free = 0;
        amountPool.free += price.FREE;
      } else {
        pointPool.free += 1;
        amountPool.free += price.FULL;
      }
      if (pointPool.reduction === 2) {
        pointPool.reduction = 0;
        amountPool.reduction += price.REDUCTION;
      } else {
        pointPool.reduction += 1;
        amountPool.reduction += price.FULL;
      }

      winnerPool[winner(amountPool).toLowerCase().trim() as JudgeType] += 1;

      console.log(
        `|  ${zeroPadding(i, 4, " ")} |   ${
          zeroPadding(
            amountPool.full,
            6,
            " ",
          )
        } |   ${zeroPadding(amountPool.free, 6, " ")} |    ${
          zeroPadding(
            amountPool.reduction,
            6,
            " ",
          )
        } |   ${winner(amountPool)} |`,
      );
    }

    console.log(`|-------|----------|----------|-----------|-------------|`);
    console.log(
      `| total |   ${zeroPadding(amountPool.full, 6, " ")} |   ${
        zeroPadding(
          amountPool.free,
          6,
          " ",
        )
      } |    ${zeroPadding(amountPool.reduction, 6, " ")} |   ${
        winner(
          amountPool,
        )
      } |`,
    );
    console.log(`|-------------------------------------------------------|`);
  },
  winnerCount: (winnerPool: WinnerPool) => {
    console.log(``);
    console.log(`Winner Count`);
    console.log(`Free plan: ${winnerPool.free}`);
    console.log(`Reduction plan: ${winnerPool.reduction}`);
    console.log(`Draw: ${winnerPool.draw}`);
  },
  planBenefit: (amountPool: AmountPool) => {
    const reductionBenefit = amountPool.full - amountPool.reduction;
    const freeBenefit = amountPool.full - amountPool.free;
    const planDiff = winner(amountPool).includes("Free")
      ? freeBenefit - reductionBenefit
      : reductionBenefit - freeBenefit;

    console.log(``);
    console.log(`Reduction plan benefit: ¥${reductionBenefit}`);
    console.log(`Free plan benefit: ¥${freeBenefit}`);
    console.log(`Plan diff: ¥${planDiff}`);
  },
};

export const showJudge = (price: Price, count: string): void => {
  showTable.header();
  showTable.body(price, count, amountPool, pointPool, winnerPool);
  showTable.winnerCount(winnerPool);
  showTable.planBenefit(amountPool);
};
