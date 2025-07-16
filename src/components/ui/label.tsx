import type React from "react"

interface LabelProps {
  htmlFor?: string
  children: React.ReactNode
  className?: string
}

export const Label: React.FC<LabelProps> = ({ htmlFor, children, className = "" }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`}>
    {children}
  </label>
)
