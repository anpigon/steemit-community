export const getReputation = (reputation, toFixed) => {
  let result =
    Math.max(Math.log10(Math.abs(reputation)) - 9, 0) *
      (reputation >= 0 ? 1 : -1) *
      9 +
    25;
  if (typeof toFixed === 'number') {
    result = result.toFixed(toFixed);
  }
  return result;
};

export const transferTime = timestamp => {
  if (typeof timestamp !== 'string') timestamp = String(timestamp);
  if (timestamp.length < 14) return timestamp;
  const date = new Date(`${timestamp}Z`);

  const now = new Date();
  const sYear = date.getFullYear();
  const sMonth = date.getMonth();
  const sDate = date.getDate();
  const sHour = date.getHours();
  const sMin = date.getMinutes();
  const sSecond = date.getSeconds();
  const sc = 1000;

  const today = new Date(sYear, sMonth, sDate, sHour, sMin, sSecond);
  // 지나간 초
  const pastSecond = parseInt((now - today) / sc, 10);

  let day;
  let hour;
  let min;
  let str = '';

  if (pastSecond > 86400) {
    day = parseInt(pastSecond / 86400, 10);
    str = `${day}일 전`;
  } else if (pastSecond > 3600) {
    hour = parseInt(pastSecond / 3600, 10);
    str = `${str + hour}시간 전`;
  } else if (pastSecond > 60) {
    min = parseInt(pastSecond / 60, 10);
    str = `${str + min}분 전`;
  } else {
    str = `${pastSecond}초 전`;
  }

  return str;
};
