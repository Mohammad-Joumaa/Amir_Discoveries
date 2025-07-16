"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Calendar, Globe, ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select"
import { CompanyLogo, CompanyLogoLarge } from "../components/company-logo"
import { Calendar as CalendarComponent } from "../components/calendar"
import { TimeSlots } from "../components/time-slots"
import { BookingForm } from "../components/booking-form"
import { useCurrentTime } from "../hooks/useCurrentTime"
import { timeZones, daysOfWeek } from "../constants/timezones"
import type { FormData } from "../types/booking"

export default function CallBookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(2)
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedTimeZone, setSelectedTimeZone] = useState("Asia/Beirut")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    phoneNumber: "",
    headcount: "",
    hearAbout: "",
    otherSource: "",
    automationDetails: "",
    smsNumber: "",
  })

  const { currentTime, timeZoneName, isLoadingTime } = useCurrentTime(selectedTimeZone)

  const handleDateSelect = (date: number) => {
    setSelectedDate(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleNext = () => {
    if (currentStep === 1 && selectedTime) {
      setCurrentStep(2)
    }
  }

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    } else {
      window.history.back()
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    alert("Booking submitted successfully!")
  }

  const handleTimezoneChange = (newTimezone: string) => {
    setSelectedTimeZone(newTimezone)
  }

  const getTimezoneDisplayName = () => {
    const timezone = timeZones.find((tz) => tz.value === selectedTimeZone)
    return timezone ? timezone.name : selectedTimeZone
  }

  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex">
        {/* Left Sidebar */}
        <div className="w-1/2 bg-white p-8 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-blue-600" />
            </button>
            <div className="flex items-center gap-3">
              <CompanyLogo />
              <span className="text-lg font-semibold">Amir Discoveries</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <CompanyLogoLarge />
              <div>
                <div className="text-gray-600 text-sm">Amir Discoveries</div>
                <div className="text-2xl font-bold text-gray-800">Automation Discovery Call</div>
              </div>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>30 min</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>16:00 - 16:30, Wednesday, July 2, 2025</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Globe className="w-5 h-5" />
                <span>{getTimezoneDisplayName()}</span>
              </div>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>If you are looking to:</p>
              <ul className="space-y-2 text-sm">
                <li>• Scale your company with automations and systems</li>
                <li>• Reduce your workload</li>
                <li>• Improve your margins</li>
                <li>• Build operational excellence</li>
                <li>• Have a leaner team</li>
              </ul>
              <p className="mt-6">Then book a call with us.</p>
              <p className="mt-4">
                We look forward to helping you take your business to the next level with the power of Automation and AI.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Enter Details</h2>
          <BookingForm formData={formData} onInputChange={handleInputChange} onSubmit={handleSubmit} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-blue-600" />
            </button>
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-lg font-semibold">Amir Discoveries</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book your free <span className="text-blue-600">consultation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how we help companies skyrocket productivity through custom automations and systems
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full">
            <div className="flex items-center gap-4 mb-8">
              <CompanyLogoLarge />
              <span className="text-xl font-semibold">Amir Discoveries</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - Meeting Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CompanyLogo />
                  <div>
                    <div className="text-gray-600 text-sm">Amir Discoveries</div>
                    <div className="text-xl font-bold text-gray-800">Automation Discovery Call</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600 mb-6">
                  <Clock className="w-5 h-5" />
                  <span>30 min</span>
                </div>
                <div className="text-gray-700 space-y-3 text-sm">
                  <p>If you are looking to:</p>
                  <ul className="space-y-1">
                    <li>• Scale your company with automations and systems</li>
                    <li>• Reduce your workload</li>
                    <li>• Improve your margins</li>
                    <li>• Build operational excellence</li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Calendar */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Select a Date & Time</h2>
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="font-semibold text-gray-800">July 2025</span>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                {/* Days of Week */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                {/* Calendar Grid */}
                <CalendarComponent selectedDate={selectedDate} onDateSelect={handleDateSelect} />
                {/* Selected Date Display */}
                {selectedDate && <TimeSlots selectedTime={selectedTime} onTimeSelect={handleTimeSelect} />}
                {/* Next Button */}
                {selectedTime && (
                  <Button
                    onClick={handleNext}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mb-6"
                  >
                    Next
                  </Button>
                )}
                {/* Timezone */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">Time zone</Label>
                  <div className="relative">
                    <Select value={selectedTimeZone} onValueChange={handleTimezoneChange}>
                      <SelectTrigger>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          <SelectValue />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {timeZones.map((tz) => (
                          <SelectItem key={tz.value} value={tz.value}>
                            {tz.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                {/* Current Time Display */}
                <div className="mt-4 text-sm text-gray-600 text-center">
                  {isLoadingTime ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      Loading time...
                    </span>
                  ) : (
                    <span>
                      Current time: {currentTime}
                      {timeZoneName && ` (${timeZoneName})`}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
