import { useMemo, useState } from 'react';

const patientProfile = {
  name: 'Amina Patel',
  erp: 'ERP-1001',
  age: 32,
  bloodGroup: 'B+',
  hospital: 'Lexis General Hospital',
};

const invoices = [
  { id: 'INV-001', service: 'Consultation', amount: 45, status: 'paid' },
  { id: 'INV-002', service: 'Diagnostics', amount: 120, status: 'due' },
  { id: 'INV-003', service: 'Pharmacy', amount: 28, status: 'paid' },
];

const medicalSummary = [
  { title: 'Next visit', value: 'May 2, 2026' },
  { title: 'Primary doctor', value: 'Dr. Sanjay Mehta' },
  { title: 'Active treatment', value: 'Blood pressure monitoring' },
];

function PatientDashboard({ user, onLogout }) {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const totalDue = useMemo(
    () => invoices.filter((item) => item.status === 'due').reduce((sum, item) => sum + item.amount, 0),
    [],
  );

  const payInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setTimeout(() => {
      setSelectedInvoice(null);
      alert(`Payment received for ${invoice.id}: $${invoice.amount}`);
    }, 700);
  };

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-100/50">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-purple-600">Patient Dashboard</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-800">Welcome back, {user.name}</h2>
              <p className="mt-3 text-sm text-gray-600">Your ERP-based profile and payment workflow are connected to the Lexis hospital system.</p>
            </div>
            <button
              type="button"
              onClick={onLogout}
              className="rounded-2xl bg-purple-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
            >
              Logout
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {Object.entries(patientProfile).map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50 p-5">
                <p className="text-sm text-gray-600">{label.replace(/([A-Z])/g, ' $1')}</p>
                <p className="mt-2 text-xl font-semibold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 rounded-3xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-100/50">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-purple-600">Billing status</p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-800">${totalDue} due</h3>
          </div>
          <div className="rounded-3xl bg-purple-50 p-5">
            <p className="text-sm text-gray-600">Use the payment widget to settle outstanding invoices and keep your Lexis ERP account active.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-100/50">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">Open invoices</h3>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 font-semibold">ERP payment</span>
          </div>

          <div className="mt-6 space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between rounded-3xl border border-gray-200 bg-gray-50 p-5">
                <div>
                  <p className="text-sm text-gray-600">{invoice.service}</p>
                  <p className="mt-1 text-lg font-semibold text-gray-800">{invoice.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800">${invoice.amount}</p>
                  <p className={`mt-1 text-sm font-semibold ${invoice.status === 'paid' ? 'text-emerald-600' : 'text-amber-600'}`}>{invoice.status}</p>
                </div>
                {invoice.status === 'due' ? (
                  <button
                    type="button"
                    onClick={() => payInvoice(invoice)}
                    className="rounded-2xl bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-600"
                  >
                    Pay now
                  </button>
                ) : null}
              </div>
            ))}
          </div>
          {selectedInvoice ? <p className="mt-4 text-sm text-purple-600 font-semibold">Processing payment for {selectedInvoice.id}...</p> : null}
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-xl shadow-gray-100/50">
          <h3 className="text-xl font-semibold text-gray-800">Medical summary</h3>
          <div className="mt-6 space-y-4">
            {medicalSummary.map((item) => (
              <div key={item.title} className="rounded-3xl bg-purple-50 p-4">
                <p className="text-sm text-gray-600">{item.title}</p>
                <p className="mt-1 text-lg font-semibold text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PatientDashboard;
