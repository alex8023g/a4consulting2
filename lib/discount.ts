export function getDiscount(price: number, full_price: number) {
  return Math.round((1 - price / full_price) * 100);
}
