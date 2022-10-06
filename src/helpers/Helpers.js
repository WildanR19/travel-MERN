const numberFormat = number => {
  const formatNumbering = new Intl.NumberFormat("id-ID")
  return formatNumbering.format(number)
}

const dateFormat = date => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
  const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);

  return `${da} ${mo}`;
};


export {numberFormat, dateFormat}