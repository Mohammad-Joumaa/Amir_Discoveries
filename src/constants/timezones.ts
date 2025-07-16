import type { TimeZone } from "../types/booking"

export const timeZones: TimeZone[] = [
  { name: "Jordan Time", offset: "12:13", value: "Asia/Amman" },
  { name: "Baghdad, East Africa Time", offset: "12:13", value: "Asia/Baghdad" },
  { name: "Asia/Baku", offset: "13:13", value: "Asia/Baku" },
  { name: "Lebanon Time", offset: "12:13", value: "Asia/Beirut" },
  { name: "Syria Time", offset: "12:13", value: "Asia/Damascus" },
  { name: "Asia/Dhaka", offset: "15:13", value: "Asia/Dhaka" },
  { name: "Dubai Time", offset: "13:13", value: "Asia/Dubai" },
]

export const timeSlots = ["16:00", "16:30"]
export const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
