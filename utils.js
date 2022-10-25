const checkAllowedParam = (queryParams, whiteList) => {
  const queryKeys = Object.keys(queryParams);
  const verifiedKeys = queryKeys.map((query) =>
    whiteList.includes(query) ? true : false
  );
  return !verifiedKeys.includes(false);
};

module.exports = checkAllowedParam;
