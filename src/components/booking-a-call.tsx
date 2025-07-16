import React from 'react';
import { ArrowLeft, Calendar, Clock, Users } from 'lucide-react';

const BookingACall: React.FC = () => {
  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={handleBackToHome}
            className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized consultation with our team. Choose a time that works best for you.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Flexible Scheduling</h3>
            </div>
            <p className="text-gray-600">Choose from available time slots that fit your schedule perfectly.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Expert Consultation</h3>
            </div>
            <p className="text-gray-600">Get personalized advice from our experienced professionals.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Easy Booking</h3>
            </div>
            <p className="text-gray-600">Simple and intuitive booking process with instant confirmation.</p>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Select Your Preferred Time
            </h2>
            <p className="text-blue-100 mt-1">Click on an available slot to book your appointment</p>
          </div>
          
          <div className="p-6">
            <div className="bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-200">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ09-4HyVkO-NMA_YQY-5IhGm28AvI_KXLQiUTnGBk0y2HCPsITWhY-cC7-8cw8EP-zGoVn2os0i?gv=true"
                className="w-full h-96 md:h-[600px] rounded-lg shadow-inner"
                frameBorder="0"
                title="Google Calendar Scheduling"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Need Help?</h3>
          <p className="text-blue-700 mb-4">
            If you're having trouble booking an appointment or need to reschedule, please don't hesitate to contact us.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:support@example.com"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Email Support
            </a>
            <a
              href="tel:+1234567890"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 font-medium"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingACall;
