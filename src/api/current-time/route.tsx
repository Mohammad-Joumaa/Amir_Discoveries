import React, { useEffect, useState } from "react";

interface TimeData {
  time: string;
  timezone: string;
  timeZoneName: string;
  timestamp: string;
}

interface Props {
  timezone?: string;
}

const TimeInTimezone: React.FC<Props> = ({ timezone = "UTC" }) => {
  const [timeData, setTimeData] = useState<TimeData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();

        const timeString = now.toLocaleTimeString("en-US", {
          timeZone: timezone,
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        const formatter = new Intl.DateTimeFormat("en", {
          timeZone: timezone,
          timeZoneName: "short",
        });

        const parts = formatter.formatToParts(now);
        const timeZoneName =
          parts.find((part) => part.type === "timeZoneName")?.value || "";

        setTimeData({
          time: timeString,
          timezone,
          timeZoneName,
          timestamp: now.toISOString(),
        });
        setError("");
      } catch {
        setError("Invalid timezone");
        setTimeData(null);
      }
    };

    updateTime(); // initial call

    const intervalId = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(intervalId);
  }, [timezone]);

  if (error) return <div>Error: {error}</div>;

  if (!timeData) return <div>Loading...</div>;

  return (
    <div>
      <div>Time: {timeData.time}</div>;<div>Timezone: {timeData.timezone}</div>;
      <div>Timezone Name: {timeData.timeZoneName}</div>;
      <div>Timestamp (ISO): {timeData.timestamp}</div>;
    </div>
  );
}; // <--- this closing brace was missing

export default TimeInTimezone;
