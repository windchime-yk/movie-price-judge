/**
 * ゼロ詰めを実施する
 * @param num 変換したい数値
 * @param maxLength 最大文字数
 * @param fillStr 埋める文字
 */
export const zeroPadding = (
  num: string | number,
  maxLength: number,
  fillStr: string,
) => String(num).padStart(maxLength, fillStr);
