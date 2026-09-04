import { useState } from 'react';

function LoginPage({ onLogin, error, role }) {
  const [erp, setErp] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(erp.trim().toUpperCase(), password.trim());
  };

  const isDoctor = role === 'doctor';
  const gradientFrom = isDoctor ? 'from-blue-500' : 'from-purple-500';
  const gradientTo = isDoctor ? 'to-blue-600' : 'to-purple-600';
  const textColor = isDoctor ? 'text-blue-600' : 'text-purple-600';
  const borderColor = isDoctor ? 'border-blue-200 focus:border-blue-400' : 'border-purple-200 focus:border-purple-400';
  const bgColor = isDoctor ? 'bg-blue-50' : 'bg-purple-50';
  const buttonBg = isDoctor ? 'bg-blue-500 hover:bg-blue-600' : 'bg-purple-500 hover:bg-purple-600';

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl max-w-md mx-auto">
      <div className="mb-8">
        <div className={`inline-block rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} p-3 mb-4`}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            {isDoctor ? (
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            ) : (
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            )}
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {isDoctor ? 'Doctor' : 'Patient'} Login
        </h2>
        <p className="text-gray-600">Enter your credentials to access your account</p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">ERP Number</label>
          <input
            value={erp}
            onChange={(e) => setErp(e.target.value)}
            placeholder={isDoctor ? "ERP-2001" : "ERP-1001"}
            className={`w-full rounded-lg border-2 ${borderColor} ${bgColor} px-4 py-3 text-gray-800 placeholder-gray-500 outline-none transition`}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className={`w-full rounded-lg border-2 ${borderColor} ${bgColor} px-4 py-3 text-gray-800 placeholder-gray-500 outline-none transition`}
          />
        </div>

        <div className={`rounded-lg ${bgColor} p-4 text-sm`}>
          <p className="font-semibold text-gray-700 mb-2">Demo Credentials:</p>
          <div className="text-gray-600">
            <p><span className="font-mono font-bold">{isDoctor ? 'ERP-2001' : 'ERP-1001'}</span> / <span className="font-mono font-bold">erp1234</span></p>
          </div>
        </div>

        {error ? <p className="text-sm text-red-600 font-medium">{error}</p> : null}

        <button
          type="submit"
          className={`w-full rounded-lg ${buttonBg} px-5 py-3 text-sm font-semibold text-white transition`}
        >
          Login as {isDoctor ? 'Doctor' : 'Patient'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className={`${textColor} font-semibold hover:underline`}
        >
          Back to Role Selection
        </button>
      </p>
    </div>
  );
}

export default LoginPage;
