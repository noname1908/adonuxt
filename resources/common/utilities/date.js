export function formatDate(timeStr) {
  var day = new Date(timeStr);
  var dd = day.getDate();
  var mm = day.getMonth() + 1; //January is 0!
  var yyyy = day.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  var day = dd + '/' + mm + '/' + yyyy;

  return day
}
