export interface TimeZone {
  name: string
  offset: string
  value: string
}

export interface FormData {
  name: string
  email: string
  companyName: string
  companyWebsite: string
  phoneNumber: string
  headcount: string
  hearAbout: string
  otherSource: string
  automationDetails: string
  smsNumber: string
}

export interface TimeResponse {
  time: string
  timezone: string
  timeZoneName: string
  timestamp: string
}
