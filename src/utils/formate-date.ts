export const formatDateTime = (value: any) => {
  if (value) {
    const date = new Date(value)
    const myTimeZone = 9 //  UTC +9
    date.setTime(date.getTime() + myTimeZone * 60 * 60 * 1000)
    const isoDate = date.toISOString()
    return `${isoDate.substr(0, 10).replaceAll('-', '.')} ${isoDate.substr(11, 8)}`
  }
}
