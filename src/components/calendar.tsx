"use client"

import type React from "react"

interface CalendarProps {
  selectedDate: number
  onDateSelect: (date: number) => void
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const renderCalendar = () => {
    const days = []
    for (let i = 1; i <= 31; i++) {
      const isSelected = i === selectedDate
      const isAvailable = i === 2 || i === 7 || i === 8
      days.push(
        <button
          key={i}
          onClick={() => isAvailable && onDateSelect(i)}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors
            ${
              isSelected
                ? "bg-blue-600 text-white"
                : isAvailable
                  ? "text-blue-600 hover:bg-blue-50 cursor-pointer"
                  : "text-gray-400 cursor-not-allowed"
            }
          `}
          disabled={!isAvailable}
        >
          {i}
        </button>,
      )
    }
    return days
  }

  return <div className="grid grid-cols-7 gap-1 mb-6">{renderCalendar()}</div>
}
