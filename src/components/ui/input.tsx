"use client"

import type React from "react"

interface InputProps {
  id?: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  required?: boolean
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  value,
  onChange,
  className = "",
  required = false,
  placeholder = "",
}) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    required={required}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
  />
)
