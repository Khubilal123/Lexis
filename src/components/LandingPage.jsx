export default function LandingPage({ onSelectRole }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Logo at the top */}
      <header className="flex justify-center pt-12 pb-8">
        <div className="text-center">
          <div className="inline-block rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-4 mb-4 shadow-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Lexis ERP Health</h1>
          <p className="text-gray-600 text-lg">Healthcare Management System</p>
        </div>
      </header>

      {/* Main content */}
      <div className="flex items-center justify-center flex-1 px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome</h2>
            <p className="text-gray-600 text-lg">Please select your role to continue</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Doctor Login Option */}
            <button
              onClick={() => onSelectRole('doctor')}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="inline-block rounded-full bg-gradient-to-br from-blue-100 to-blue-200 p-4 mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Doctor</h3>
                <p className="text-gray-600 mb-6">Access your patient records and medical information</p>
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Login as Doctor
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Patient Login Option */}
            <button
              onClick={() => onSelectRole('patient')}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 group-hover:from-purple-500/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="inline-block rounded-full bg-gradient-to-br from-purple-100 to-purple-200 p-4 mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Patient</h3>
                <p className="text-gray-600 mb-6">View your health records and appointments</p>
                <div className="inline-flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Login as Patient
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-12">
            Demo Credentials: ERP-1001 (Patient) or ERP-2001 (Doctor), Password: erp1234
          </p>
        </div>
      </div>
    </div>
  );
}
