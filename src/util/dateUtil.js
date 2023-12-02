const formatDate = (dateTime) => {
  const date = new Date(dateTime);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export { formatDate };
