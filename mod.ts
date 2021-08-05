/**
 * 普段よく行く映画館が2ポイントで1200円、6ポイントで0円で観られる会員サービスを行なっている。  
 * 前から漫然と2ポイント消化で映画を観ていたが、結局のところどっちがお得かはいまいちわかっていなかったため、書いた。
 * 
 * - Free：無料パターン
 * - Reduction：減額パターン
 */

const [count] = Deno.args

const PRICE_FULL = 1800
const PRICE_REDUCTION = 1200
const PRICE_FREE = 0

let pointReduction = 0
let pointFree = 0
let amountReduction = 0
let amountFree = 0

const zeroPadding = (num: string | number, maxLength: number, fillStr: string) => String(num).padStart(maxLength, fillStr)

const winner = () => amountFree < amountReduction ? zeroPadding('Free', 9, ' ') : zeroPadding('Reduction', 9, ' ')

console.log(`|--------------------------------------------|`);
console.log(`|       |        genre         |             |`);
console.log(`|-------|----------------------|-------------|`);
console.log(`| count |   Free   | Reduction |     win     |`);
console.log(`|-------|----------|-----------|-------------|`);

for (let i = 1; i <= Number(count); i++) {
  if (pointFree === 6) {
    pointFree = 0
    amountFree += PRICE_FREE
  } else {
    pointFree += 1
    amountFree += PRICE_FULL
  }
  if (pointReduction === 2) {
    pointReduction = 0
    amountReduction += PRICE_REDUCTION
  } else {
    pointReduction += 1
    amountReduction += PRICE_FULL
  }
  console.log(`|  ${zeroPadding(i, 4, ' ')} |   ${zeroPadding(amountFree, 6, ' ')} |    ${zeroPadding(amountReduction, 6, ' ')} |   ${winner()} |`);
}

console.log(`|-------|----------------------|-------------|`);
console.log(`| total |   ${zeroPadding(amountFree, 6, ' ')} |    ${zeroPadding(amountReduction, 6, ' ')} |   ${winner()} |`);
console.log(`|--------------------------------------------|`);
