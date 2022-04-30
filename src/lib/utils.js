export const insertAutoLink = (text) => {
  const regURL = new RegExp(
    '(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)',
    'gi',
  );
  const regEmail = new RegExp(
    '([xA1-xFEa-z0-9_-]+@[xA1-xFEa-z0-9-]+.[a-z0-9-]+)',
    'gi',
  );
  const newText = text
    .replace(regURL, "<a href='$1://$2' target='_blank'>$1://$2</a>")
    .replace(regEmail, "<a href='mailto:$1'>$1</a>");
  return newText;
};

export const makeExpData = (
  variable,
  fixed,
  totalExp,
  totalFixed,
  totalVariable,
) => {
  const variableData = variable
    .map((item) => ({
      지출금액: item.cost,
      index: item.categoryName,
    }))
    .reverse()
    .concat({
      변동비: totalVariable,
      index: '변동비',
    });
  const fixedData = fixed
    .map((item) => ({
      지출금액: item.cost,
      index: item.categoryName,
    }))
    .reverse()
    .concat({
      고정비: totalFixed,
      index: '고정비',
    });
  const data = variableData.concat(fixedData).concat({
    '총 지출': totalExp,
    index: '총 지출',
  });
  return data;
};
export const makeRevData = (revData, total) => {
  const data = revData
    .map((item) => ({
      수익금액: item.cost,
      index: item.categoryName,
    }))
    .reverse()
    .concat({
      '총 수익': total,
      index: '총 수익',
    });
  return data;
};
