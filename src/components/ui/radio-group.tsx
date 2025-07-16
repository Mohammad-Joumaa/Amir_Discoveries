"use client"

import React from "react"

interface RadioGroupProps {
  value: string
  onValueChange: (value: string) => void
  className?: string
  children: React.ReactNode
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ value, onValueChange, className = "", children }) => (
  <div className={className}>
    {React.Children.map(children, (child) => React.cloneElement(child as React.ReactElement, { value, onValueChange }))}
  </div>
)

interface RadioGroupItemProps {
  value: string
  id: string
  groupValue?: string
  onValueChange?: (value: string) => void
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  value: itemValue,
  id,
  value: groupValue,
  onValueChange,
}) => (
  <input
    type="radio"
    id={id}
    value={itemValue}
    checked={groupValue === itemValue}
    onChange={(e) => onValueChange?.(e.target.value)}
    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
  />
)
