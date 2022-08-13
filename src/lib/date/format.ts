import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

export const formatDate = (dateString: string) =>
  dayjs.utc(dateString).tz('Asia/Tokyo').format('DD/MM/YYYY')
