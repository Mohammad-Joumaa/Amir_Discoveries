"use client"

import type React from "react"

interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => (
  <select
    value={value}
    onChange={(e) => onValueChange(e.target.value)}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  >
    {children}
  </select>
)

interface SelectTriggerProps {
  children: React.ReactNode
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children }) => (
  <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white">{children}</div>
)

export const SelectValue: React.FC = () => null

interface SelectContentProps {
  children: React.ReactNode
}

export const SelectContent: React.FC<SelectContentProps> = ({ children }) => <>{children}</>

interface SelectItemProps {
  value: string
  children: React.ReactNode
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => <option value={value}>{children}</option>
