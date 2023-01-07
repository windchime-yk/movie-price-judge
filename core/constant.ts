import type { AmountPool, PointPool, WinnerPool } from "../model.ts";

/** ユナイテッドシネマ料金定数 */
export const PRICE_UNITEDCINEMA = {
  /** 通常の大人料金 */
  FULL: 1800,
  /** 会員ポイント(2ポイント)を使った場合の大人料金 */
  REDUCTION: 1200,
  /** 会員ポイント(6ポイント)を使った場合の大人料金 */
  FREE: 0,
} as const;

// ポイントの数値をプールする変数
export const pointPool: PointPool = {
  free: 0,
  reduction: 0,
};

/** 合計金額の数値をプールする変数 */
export const amountPool: AmountPool = {
  full: 0,
  free: 0,
  reduction: 0,
};

/** 勝利数の数値をプールする変数 */
export const winnerPool: WinnerPool = {
  free: 0,
  reduction: 0,
  draw: 0,
};
