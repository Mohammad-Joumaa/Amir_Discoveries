"use client"

import { useState, useEffect } from "react"
import type { TimeResponse } from "../types/booking"

export const useCurrentTime = (timezone: string) => {
  const [currentTime, setCurrentTime] = useState("")
  const [timeZoneName, setTimeZoneName] = useState("")
  const [isLoadingTime, setIsLoadingTime] = useState(false)

  const fetchCurrentTime = async (tz: string) => {
    setIsLoadingTime(true)
    try {
      const response = await fetch(`/api/current-time?timezone=${encodeURIComponent(tz)}`)
      if (response.ok) {
        const data: TimeResponse = await response.json()
        setCurrentTime(data.time)
        setTimeZoneName(data.timeZoneName)
      } else {
        console.error("Failed to fetch time")
        // Fallback to local time calculation
        const now = new Date()
        const timeString = now.toLocaleTimeString("en-US", {
          timeZone: tz,
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
        setCurrentTime(timeString)
      }
    } catch (error) {
      console.error("Error fetching time:", error)
      // Fallback to local time calculation
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: tz,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
      setCurrentTime(timeString)
    } finally {
      setIsLoadingTime(false)
    }
  }

  useEffect(() => {
    fetchCurrentTime(timezone)
  }, [timezone])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCurrentTime(timezone)
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [timezone])

  return { currentTime, timeZoneName, isLoadingTime }
}
