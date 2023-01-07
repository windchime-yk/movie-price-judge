export type Price = {
  FULL: number;
  REDUCTION: number;
  FREE: number;
};

export type PointPool = {
  free: number;
  reduction: number;
};

export type AmountPool = {
  full: number;
  free: number;
  reduction: number;
};

export type WinnerPool = {
  free: number;
  reduction: number;
  draw: number;
};

export type JudgeType = "free" | "reduction" | "draw";
