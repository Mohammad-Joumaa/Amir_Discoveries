import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const timezone = searchParams.get("timezone") || "UTC"

  try {
    const now = new Date()

    // Format time for the specified timezone
    const timeString = now.toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    // Get timezone offset for display
    const formatter = new Intl.DateTimeFormat("en", {
      timeZone: timezone,
      timeZoneName: "short",
    })

    const parts = formatter.formatToParts(now)
    const timeZoneName = parts.find((part) => part.type === "timeZoneName")?.value || ""

    return NextResponse.json({
      time: timeString,
      timezone: timezone,
      timeZoneName: timeZoneName,
      timestamp: now.toISOString(),
    })
  } catch (error) {
    console.error("Error getting time for timezone:", timezone, error)
    return NextResponse.json({ error: "Invalid timezone" }, { status: 400 })
  }
}
