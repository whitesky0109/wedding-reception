import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2025-12-27 12:30", "Asia/Seoul")
export const HOLIDAYS = [25];

export const LOCATION = "파티움하우스 수원";
export const LOCATION_ADDRESS = "경기 수원시 팔달구 효원로 289"

export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

export const WEDDING_HALL_POSITION = [37.261632, 127.033406]

export const NMAP_PLACE_ID = 12055125
export const KMAP_PLACE_ID = 1818839884

export const BRIDE_FULLNAME = "오미화"
export const BRIDE_FIRSTNAME = "미화"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "오재영"
export const BRIDE_MOTHER = "김주희"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    // phone: "010-6589-6554",
    account: "우리은행 1002-095-900918",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    // phone: "010-7576-8661",
    // account: "하나은행 00000000000",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    // phone: "010-6772-8992",
    // account: "하나은행 00000000000000",
  },
]

export const GROOM_FULLNAME = "조건우"
export const GROOM_FIRSTNAME = "건우"
export const GROOM_TITLE = "장남"
export const GROOM_FATHER = "조영기"
export const GROOM_MOTHER = "박인숙"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    // phone: "010-2732-0936",
    account: "우리은행 1002-151-105517",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    // phone: "010-8504-0936",
    account: "농협 356-1566-2790-53",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    // phone: "010-4133-0936",
    // account: "국민은행 000000000000",
  },
]
