import moment from "moment";

export function format(date: Date): string {
  return moment(date).format('YYYY/MM/DD')
}
