// 날짜 구하기
exports.today = () => {
  let tday = new Date();

  let year = tday.getFullYear();
  let month = ('0' + (tday.getMonth() + 1)).slice(-2);
  let day = ('0' + tday.getDate()).slice(-2);
  
  let hours = ('0' + tday.getHours()).slice(-2); 
  let minutes = ('0' + tday.getMinutes()).slice(-2);
  let seconds = ('0' + tday.getSeconds()).slice(-2); 

  let dateString = year + '-' + month  + '-' + day;
  let timeString = hours + ':' + minutes  + ':' + seconds;

  return dateString + ' ' + timeString;
}