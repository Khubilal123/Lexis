import { useState } from 'react';

const patients = [
  { id: 'P-1001', name: 'Amina Patel', condition: 'Hypertension', nextAppointment: 'May 2, 2026' },
  { id: 'P-1002', name: 'Meera Singh', condition: 'Diabetes', nextAppointment: 'May 4, 2026' },
  { id: 'P-1003', name: 'Rahul Verma', condition: 'Asthma', nextAppointment: 'May 6, 2026' },
];

const schedule = [
  { time: '09:00', patient: 'Amina Patel', status: 'confirmed' },
  { time: '10:30', patient: 'Meera Singh', status: 'awaiting' },
  { time: '11:45', patient: 'Rahul Verma', status: 'confirmed' },
];

function DoctorPortal({ user, onLogout }) {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-100/50">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-600">Doctor Portal</p>
            <h2 className="mt-3 text-3xl font-semibold text-gray-800">Hello, {user.name}</h2>
            <p className="mt-2 text-sm text-gray-600">Manage patient records, review your ERP appointments, and access hospital dashboards.</p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="rounded-2xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Logout
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-5 border border-blue-100">
            <p className="text-sm text-gray-600">Today&apos;s appointments</p>
            <p className="mt-3 text-3xl font-semibold text-blue-600">{schedule.length}</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-5 border border-blue-100">
            <p className="text-sm text-gray-600">Patients assigned</p>
            <p className="mt-3 text-3xl font-semibold text-blue-600">{patients.length}</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-5 border border-blue-100">
            <p className="text-sm text-gray-600">Active ERPs</p>
            <p className="mt-3 text-3xl font-semibold text-blue-600">{patients.length + 1}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-100/50">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">Today&apos;s schedule</h3>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700 font-semibold">ERP appointments</span>
          </div>
          <div className="mt-6 space-y-4">
            {schedule.map((slot) => (
              <div key={slot.time} className="flex items-center justify-between rounded-3xl border border-gray-200 bg-gray-50 p-5">
                <div>
                  <p className="text-sm text-gray-600">{slot.time}</p>
                  <p className="mt-1 text-lg font-semibold text-gray-800">{slot.patient}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-sm font-semibold ${slot.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {slot.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-100/50">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Patient records</h3>
            <p className="mt-2 text-sm text-gray-600">Select a patient to see their ERP record details and recent updates.</p>
          </div>
          <div className="space-y-4">
            {patients.map((patient) => (
              <button
                key={patient.id}
                type="button"
                onClick={() => setSelectedPatient(patient)}
                className={`w-full rounded-3xl border px-5 py-4 text-left transition ${selectedPatient.id === patient.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-gray-50 hover:border-blue-300'}`}
              >
                <p className="text-sm text-gray-600">{patient.id}</p>
                <p className="mt-1 text-lg font-semibold text-gray-800">{patient.name}</p>
                <p className="mt-1 text-sm text-gray-500">{patient.condition}</p>
              </button>
            ))}
          </div>
          <div className="rounded-3xl bg-blue-50 p-5 border border-blue-100">
            <p className="text-sm text-gray-600">Selected patient</p>
            <h4 className="mt-3 text-2xl font-semibold text-gray-800">{selectedPatient.name}</h4>
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold text-gray-800">ERP ID:</span> {selectedPatient.id}</p>
              <p><span className="font-semibold text-gray-800">Condition:</span> {selectedPatient.condition}</p>
              <p><span className="font-semibold text-gray-800">Next visit:</span> {selectedPatient.nextAppointment}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DoctorPortal;
