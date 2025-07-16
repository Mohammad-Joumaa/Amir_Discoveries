import type React from "react"

export const CompanyLogo: React.FC = () => (
  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
  </div>
)

export const CompanyLogoLarge: React.FC = () => (
  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full"></div>
    </div>
  </div>
)
