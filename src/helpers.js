// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// split to year from YY-MM-DD
export const splitYear = yymmdd => {
  const year = yymmdd.split('-')[0];
  return year;
}
