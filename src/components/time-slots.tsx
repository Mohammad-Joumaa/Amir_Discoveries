"use client"

import type React from "react"
import { timeSlots } from "../constants/timezones"

interface TimeSlotsProps {
  selectedTime: string
  onTimeSelect: (time: string) => void
}

export const TimeSlots: React.FC<TimeSlotsProps> = ({ selectedTime, onTimeSelect }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium text-gray-700 mb-3">Wednesday, July 2</h3>
      <div className="space-y-2">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => onTimeSelect(time)}
            className={`
              w-full p-3 rounded-lg border text-center font-medium transition-colors
              ${
                selectedTime === time
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-white text-blue-600 border-gray-200 hover:border-blue-600"
              }
            `}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  )
}
