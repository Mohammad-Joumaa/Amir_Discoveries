"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "outline"
  type?: "button" | "submit"
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "default",
  type = "button",
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-md font-medium transition-colors ${
      variant === "outline"
        ? "border border-current bg-transparent hover:bg-opacity-10 hover:bg-current"
        : "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
    } ${className}`}
  >
    {children}
  </button>
)
