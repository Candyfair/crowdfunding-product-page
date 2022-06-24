function currencyFormat(num) {
  return `$${num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}

function numberFormat(num) {
  return `${num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
}

function daysLeft(date) {
  const enddate = new Date(date);
  const today = new Date();
  const diff = enddate.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 3600 * 24));
}

export { currencyFormat, numberFormat, daysLeft };
