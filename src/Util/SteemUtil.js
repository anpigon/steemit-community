export const getReputation = (reputation, toFixed) => {
  let result = (Math.max(Math.log10(Math.abs(reputation)) - 9, 0) * ((reputation >= 0) ? 1 : -1) * 9 + 25);
  if (typeof (toFixed) === 'number') {
    result = result.toFixed(toFixed);
  }
  return result;
}

export const transferTime = (time) => {
  if(typeof time !== 'string') time = String(time);
  if(time.length < 14) return time;

  var now = new Date();
  var sYear = time.substring(0, 4);
  var sMonth = time.substring(4, 6) - 1;
  var sDate = time.substring(6, 8);
  var sHour = time.substring(8, 10);
  var sMin = time.substring(10, 12);
  var sSecond = time.substring(12, 14);
  var sc = 1000;

  var today = new Date(sYear, sMonth, sDate, sHour, sMin, sSecond);
  //지나간 초
  var pastSecond = parseInt((now - today) / sc, 10);

  var date;
  var hour;
  var min;
  var str = "";

  if (pastSecond > 86400) {
    date = parseInt(pastSecond / 86400, 10);
    str = date + "일 전";
  } else if (pastSecond > 3600) {
    hour = parseInt(pastSecond / 3600, 10);
    str = str + hour + "시간 전";
  } else if (pastSecond > 60) {
    min = parseInt(pastSecond / 60, 10);
    str = str + min + "분 전";
  } else {
    str = pastSecond + "초 전";
  }

  return str;
}