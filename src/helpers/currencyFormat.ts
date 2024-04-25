/**
 * 
 * base on the three possible inputs it will format a number into 
 * an expecific currency format base con any coin.
 * @param value 
 * @param currency 
 * @param locale 
 * @returns {string} returns the number formated as a currency
 */
export function currencyFormatter(
  value: number,
  currency: string = "USD",
  locale: string = "en-US"
) {
  const formattedCurrency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedCurrency;
}
