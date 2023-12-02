const formatDate = (dateTime) => {
  const date = new Date(dateTime);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const roundToOneDecimal = (value) => {
  return Math.round(value * 10.0) / 10.0;
};

export { formatDate, roundToOneDecimal };
