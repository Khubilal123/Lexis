import React, { useState, useEffect } from 'react';
import { 
  Users, UserPlus, Activity, Calendar, FileText, 
  CreditCard, ShieldCheck, Plus, Search, LogOut, 
  Clock, CheckCircle, AlertCircle, FileDigit, Download, LayoutDashboard,
  Lock, User, Key, ChevronRight, Stethoscope, Heart, Wind, Droplets,
  MoreHorizontal, ChevronDown, ActivitySquare, Folder
} from 'lucide-react';

// --- MOCK DATA ---
const MOCK_CREDENTIALS = {
  'admin': { id: 'admin', pass: 'admin123', role: 'ADMIN', name: 'Super Admin' },
  'doc01': { id: 'doc01', pass: 'doc123', role: 'DOCTOR', name: 'Dr. Sharma' },
  'pat01': { id: 'pat01', pass: 'pat123', role: 'PATIENT', name: 'Aisha Patel' }
};

const INITIAL_PATIENTS = [
  { id: '4432124', name: 'Aisha Patel', dob: '1995-08-14', bloodGroup: 'O+', phone: '+91 9876543210', abhaId: '14-1234-5678-9012', weight: '141.2', hr: '79', status: 'Active', specialist: 'Cardiology' },
  { id: '4432125', name: 'Rohan Gupta', dob: '1988-03-22', bloodGroup: 'A-', phone: '+91 9123456789', abhaId: '14-1234-5678-9013', weight: '185.0', hr: '65', status: 'Active', specialist: 'Neurology' },
  { id: '4432126', name: 'Priya Singh', dob: '1992-05-10', bloodGroup: 'B+', phone: '+91 8765432109', abhaId: '14-1234-5678-9014', weight: '158.5', hr: '72', status: 'Pending', specialist: 'General Practice' },
  { id: '4432127', name: 'Amit Kumar', dob: '1985-11-28', bloodGroup: 'AB+', phone: '+91 7654321098', abhaId: null, weight: '172.0', hr: '68', status: 'Active', specialist: 'Orthopedics' },
];

const INITIAL_DOCTORS = [
  { id: 'doc01', name: 'Dr. Rajesh Sharma', specialty: 'Cardiology', phone: '+91 9876543210', email: 'rajesh.sharma@hospital.com', clinic: 'Heart Care Center', available: true },
  { id: 'doc02', name: 'Dr. Priya Verma', specialty: 'Neurology', phone: '+91 9876543211', email: 'priya.verma@hospital.com', clinic: 'Neuro Clinic', available: true },
  { id: 'doc03', name: 'Dr. Vikram Patel', specialty: 'Orthopedics', phone: '+91 9876543212', email: 'vikram.patel@hospital.com', clinic: 'Bone & Joint Center', available: false },
  { id: 'doc04', name: 'Dr. Ananya Gupta', specialty: 'General Practice', phone: '+91 9876543213', email: 'ananya.gupta@hospital.com', clinic: 'General Clinic', available: true },
];

const MOCK_ENCOUNTERS = [
  { id: 'e1', date: '18 June', diagnosis: 'Viral Pharyngitis', doctor: 'Dr. Sharma', notes: 'Prescribed antibiotics and rest. Monitored fever.' },
  { id: 'e2', date: '23 May', diagnosis: 'Routine Checkup', doctor: 'Dr. Sharma', notes: 'Vitals normal. Advised to continue current diet.' }
];

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentUser, setCurrentUser] = useState(null); 
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = MOCK_CREDENTIALS[loginId.toLowerCase()];
    if (user && user.pass === password) {
      setCurrentUser(user);
      setLoginError('');
    } else {
      setLoginError('Invalid ID or Password.');
    }
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#eef3ee] font-sans text-[#233229] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative hidden min-h-screen overflow-hidden bg-[#233229] px-10 py-10 text-[#F3F6F3] lg:flex lg:flex-col lg:justify-between xl:px-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[52px] border-[#4A7D64]/30"></div>
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#4A7D64]/20 blur-3xl"></div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="rounded-xl bg-[#C9D9C9] p-2.5 text-[#233229]"><ShieldCheck size={22} strokeWidth={2.5} /></div>
            <span className="text-xl font-extrabold tracking-[0.22em]">LEXIS</span>
          </div>

          <div className="relative z-10 max-w-xl py-12">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#B7CDBA]"><span className="h-2 w-2 rounded-full bg-[#9CB299]"></span> Clinical operations platform</p>
            <h1 className="max-w-lg text-5xl font-extrabold leading-[1.05] tracking-tight xl:text-6xl">Care teams, connected with clarity.</h1>
            <p className="mt-7 max-w-md text-base leading-7 text-[#C9D9C9]">A secure workspace for managing patient records, care coordination, and the daily rhythm of your hospital.</p>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-3 border-t border-white/15 pt-5">
              <div><ActivitySquare className="mb-3 text-[#9CB299]" size={20} /><p className="text-sm font-bold">Live records</p><p className="mt-1 text-xs text-[#AFC3B1]">Always current</p></div>
              <div><Heart className="mb-3 text-[#9CB299]" size={20} /><p className="text-sm font-bold">Patient-first</p><p className="mt-1 text-xs text-[#AFC3B1]">Thoughtfully designed</p></div>
              <div><Lock className="mb-3 text-[#9CB299]" size={20} /><p className="text-sm font-bold">Protected</p><p className="mt-1 text-xs text-[#AFC3B1]">Access controlled</p></div>
            </div>
          </div>

          <p className="relative z-10 text-xs text-[#AFC3B1]">Lexis ERP Health Portal <span className="mx-2 text-white/30">/</span> Secure access</p>
        </section>

        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 lg:px-14 xl:px-24">
          <div className="w-full max-w-md">
            <div className="mb-10 lg:hidden">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#233229] text-[#F3F6F3]"><ShieldCheck size={24} /></div>
              <p className="text-xl font-extrabold tracking-[0.22em]">LEXIS</p>
            </div>

            <div className="mb-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#5A7A62]">Welcome back</p>
              <h2 className="text-4xl font-extrabold tracking-tight text-[#233229]">Sign in to your workspace</h2>
              <p className="mt-3 text-sm leading-6 text-[#6A7B6D]">Use your authorized credentials to continue to the Lexis health portal.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#233229]">User ID</span>
                <span className="relative block">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6A8870]" size={19} />
                  <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} className="w-full rounded-xl border border-[#D3DED4] bg-white py-4 pl-12 pr-4 text-sm font-semibold text-[#233229] shadow-sm outline-none transition focus:border-[#5A7A62] focus:ring-4 focus:ring-[#9CB299]/25" placeholder="Enter your user ID" required />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#233229]">Password</span>
                <span className="relative block">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6A8870]" size={19} />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-[#D3DED4] bg-white py-4 pl-12 pr-4 text-sm font-semibold text-[#233229] shadow-sm outline-none transition focus:border-[#5A7A62] focus:ring-4 focus:ring-[#9CB299]/25" placeholder="Enter your password" required />
                </span>
              </label>

              {loginError && <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700"><AlertCircle size={18} className="shrink-0" /> {loginError}</div>}
              <button type="submit" className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#233229] py-4 text-sm font-bold text-white shadow-lg shadow-[#233229]/15 transition hover:bg-[#354b3c] focus:outline-none focus:ring-4 focus:ring-[#9CB299]/40">Continue to portal <ChevronRight size={18} /></button>
            </form>

            <div className="mt-10 border-t border-[#D3DED4] pt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6A7B6D]">Demo access</p>
              <div className="grid gap-2 text-xs font-semibold text-[#5A7A62] sm:grid-cols-3">
                <div className="rounded-lg bg-white px-3 py-2.5"><span className="block text-[#233229]">Admin</span><span>admin / admin123</span></div>
                <div className="rounded-lg bg-white px-3 py-2.5"><span className="block text-[#233229]">Doctor</span><span>doc01 / doc123</span></div>
                <div className="rounded-lg bg-white px-3 py-2.5"><span className="block text-[#233229]">Patient</span><span>pat01 / pat123</span></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#9CB299] text-[#233229] font-sans p-4 md:p-6 gap-6 overflow-hidden">
      {currentUser.role === 'ADMIN' && <AdminPortal user={currentUser} onLogout={() => {setCurrentUser(null); setLoginId(''); setPassword('');}} />}
      {currentUser.role === 'DOCTOR' && <DoctorPortal user={currentUser} onLogout={() => {setCurrentUser(null); setLoginId(''); setPassword('');}} />}
      {currentUser.role === 'PATIENT' && <PatientPortal user={currentUser} onLogout={() => {setCurrentUser(null); setLoginId(''); setPassword('');}} />}
    </div>
  );
}

// --- PORTAL COMPONENTS ---

// 1. ADMIN PORTAL
function AdminPortal({ user, onLogout }) {
  const [viewMode, setViewMode] = useState('overview');

  const handleNavClick = (idx) => {
    setViewMode(['overview', 'staff', 'security'][idx]);
  };

  return (
    <PortalLayout user={user} onLogout={onLogout} onNavClick={handleNavClick} navItems={[
      { icon: LayoutDashboard, label: 'Overview', active: viewMode === 'overview' },
      { icon: Users, label: 'Staff Directory', active: viewMode === 'staff' },
      { icon: ShieldCheck, label: 'Security & Audit', active: viewMode === 'security' },
    ]}>
      <div className="p-2 w-full h-full overflow-y-auto">
        {viewMode === 'overview' && <div className="flex justify-between items-center mb-8 px-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">System Overview</h1>
            <p className="text-[#5A7A62] font-medium mt-1">Manage global hospital settings and personnel.</p>
          </div>
          <button className="bg-[#233229] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1a251e] transition-colors flex items-center gap-2 shadow-lg">
            <UserPlus size={18} /> Add Provider
          </button>
        </div>}

        {viewMode === 'staff' && (
          <div className="px-2">
            <h1 className="text-3xl font-extrabold tracking-tight">Staff Directory</h1>
            <p className="text-[#5A7A62] font-medium mt-1 mb-8">Review providers registered in the Lexis system.</p>
            <WidgetCard className="p-0 overflow-hidden">
              {INITIAL_DOCTORS.map((doctor) => (
                <div key={doctor.id} className="flex items-center justify-between border-b border-[#E4EDE5] p-5 last:border-b-0">
                  <div><p className="font-extrabold">{doctor.name}</p><p className="text-sm font-medium text-[#5A7A62]">{doctor.specialty} · {doctor.email}</p></div>
                  <PillTag label={doctor.available ? 'Available' : 'Unavailable'} active={doctor.available} />
                </div>
              ))}
            </WidgetCard>
          </div>
        )}

        {viewMode === 'security' && (
          <div className="px-2">
            <h1 className="text-3xl font-extrabold tracking-tight">Security & Audit</h1>
            <p className="text-[#5A7A62] font-medium mt-1 mb-8">Monitor access and system health.</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <WidgetCard><ShieldCheck className="mb-4 text-[#4A7D64]" /><p className="font-bold">Access protection</p><p className="mt-1 text-sm text-[#5A7A62]">All systems operational</p></WidgetCard>
              <WidgetCard><Lock className="mb-4 text-[#4A7D64]" /><p className="font-bold">Encrypted records</p><p className="mt-1 text-sm text-[#5A7A62]">Active for all records</p></WidgetCard>
              <WidgetCard><Clock className="mb-4 text-[#4A7D64]" /><p className="font-bold">Last audit</p><p className="mt-1 text-sm text-[#5A7A62]">Today at 09:42 AM</p></WidgetCard>
            </div>
          </div>
        )}

        {viewMode === 'overview' && <><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <WidgetCard>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#E4EDE5] p-3 rounded-full"><Stethoscope size={24} className="text-[#4A7D64]" /></div>
              <PillTag label="Active" active />
            </div>
            <h3 className="text-[#5A7A62] font-bold mb-1">Total Providers</h3>
            <p className="text-4xl font-extrabold text-[#233229]">24</p>
          </WidgetCard>
          
          <WidgetCard>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#E4EDE5] p-3 rounded-full"><Users size={24} className="text-[#4A7D64]" /></div>
              <PillTag label="+12% this month" active={false} />
            </div>
            <h3 className="text-[#5A7A62] font-bold mb-1">Registered Patients</h3>
            <p className="text-4xl font-extrabold text-[#233229]">1,204</p>
          </WidgetCard>

          <WidgetCard>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#E4EDE5] p-3 rounded-full"><Activity size={24} className="text-[#4A7D64]" /></div>
              <PillTag label="Optimal" active />
            </div>
            <h3 className="text-[#5A7A62] font-bold mb-1">System Uptime</h3>
            <p className="text-4xl font-extrabold text-[#233229]">99.9%</p>
          </WidgetCard>
        </div>

        <WidgetCard className="p-0 overflow-hidden">
          <div className="p-6 border-b border-[#E4EDE5] flex justify-between items-center bg-white">
            <h2 className="text-xl font-bold">Recent Provider Registrations</h2>
            <button className="bg-[#F3F6F3] p-2 rounded-full hover:bg-[#E4EDE5] transition-colors"><MoreHorizontal size={20} /></button>
          </div>
          <div className="p-6 space-y-4">
            {[1,2,3].map(i => (
               <div key={i} className="flex items-center justify-between p-4 bg-[#F3F6F3] rounded-[24px]">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-[#E4EDE5] flex items-center justify-center font-bold text-[#4A7D64]">Dr</div>
                   <div>
                     <p className="font-bold text-lg">Dr. {i===1?'Sharma':i===2?'A. Gupta':'S. Mehta'}</p>
                     <p className="text-sm text-[#5A7A62] font-medium">{i===1?'Psychiatrist':i===2?'Cardiology':'Pediatrics'} • ID: d8f1-{i}</p>
                   </div>
                 </div>
                 <PillTag label="Active" active />
               </div>
            ))}
          </div>
        </WidgetCard></>}
      </div>
    </PortalLayout>
  );
}

// 2. DOCTOR PORTAL
function DoctorPortal({ user, onLogout }) {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [generatingAbha, setGeneratingAbha] = useState(false);
  const [viewMode, setViewMode] = useState('patients'); // 'patients', 'clinical', 'schedule'

  const handleGenerateABHA = () => {
    setGeneratingAbha(true);
    setTimeout(() => {
      setGeneratingAbha(false);
      setSelectedPatient({...selectedPatient, abhaId: '99-8888-7777-6666'});
    }, 1500);
  };

  const handleNavClick = (idx) => {
    if (idx === 0) {
      setViewMode('patients');
      setSelectedPatient(null);
    } else if (idx === 1) {
      setSelectedPatient(selectedPatient || INITIAL_PATIENTS[0]);
      setViewMode('clinical');
    } else if (idx === 2) {
      setViewMode('schedule');
      setSelectedPatient(null);
    }
  };

  return (
    <PortalLayout 
      user={user} 
      onLogout={onLogout} 
      onNavClick={handleNavClick}
      navItems={[
      { icon: Users, label: 'Patients', active: viewMode === 'patients' },
      { icon: FileText, label: 'Clinical Chart', active: viewMode === 'clinical' && !!selectedPatient },
      { icon: Calendar, label: 'Schedule', active: viewMode === 'schedule' },
    ]}>
      <div className="p-2 w-full h-full overflow-y-auto">
        {viewMode === 'patients' ? (
          // Doctor Patient Registry
          <>
            <div className="flex justify-between items-end mb-8 px-2">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">Patient Registry</h1>
                <p className="text-[#5A7A62] font-medium mt-1">Select a patient to view clinical records.</p>
              </div>
              <div className="relative w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A7A62]" size={18} />
                <input type="text" placeholder="Search patients..." className="w-full pl-12 pr-4 py-3 bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-[#9CB299]/30 transition-all font-bold text-sm shadow-sm" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {INITIAL_PATIENTS.map((patient, idx) => (
                <WidgetCard key={patient.id} className="cursor-pointer hover:shadow-xl transition-all" onClick={() => { setSelectedPatient(patient); setViewMode('clinical'); }}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-full bg-[#E4EDE5] overflow-hidden flex items-center justify-center text-2xl font-bold text-[#4A7D64]">
                        {patient.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#233229]">{patient.name}</h3>
                        <p className="text-sm font-bold text-[#5A7A62] mt-0.5">id: {patient.id}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#E4EDE5] flex items-center justify-center">
                       <ActivitySquare size={20} className="text-[#4A7D64]" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-xs font-bold text-[#5A7A62] mb-1">Date & Time</p>
                      <p className="font-extrabold text-sm">4:00 PM<br/>18 June</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#5A7A62] mb-1">Doctor</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#E4EDE5] overflow-hidden flex items-center justify-center text-[10px] font-bold text-[#4A7D64]">Dr</div>
                        <p className="font-extrabold text-sm">Dr. Sharma</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#5A7A62] mb-1">Medical card</p>
                      <p className="font-extrabold text-sm">{patient.abhaId ? 'Linked' : 'No card'}</p>
                    </div>
                  </div>

                  {/* Mock progress timeline */}
                  <div className="flex justify-between items-center text-xs font-bold text-[#9CB299] mb-2 px-2">
                     <span>2</span><span>3</span><span>4</span><span className="text-[#233229]">5</span><span className="text-[#233229]">6</span><span className="text-[#233229]">7</span><span>8</span><span>9</span><span>10</span><span>11</span>
                  </div>
                  <div className="h-10 bg-[#F3F6F3] rounded-full relative flex items-center px-1">
                     <div className="absolute left-[30%] w-[30%] h-8 bg-[#4A7D64] rounded-full flex items-center justify-between px-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                     </div>
                     <div className="flex justify-between w-full px-2 text-[#D5E0D6]">
                       <span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span><span>|</span>
                     </div>
                  </div>
                </WidgetCard>
              ))}
            </div>
          </>
        ) : viewMode === 'clinical' && selectedPatient ? (
          // Clinical View - Mimicking the widget design
          <div className="pb-12">
            <button onClick={() => {setViewMode('patients'); setSelectedPatient(null);}} className="mb-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#F3F6F3] transition-colors">
              <ChevronRight size={24} className="rotate-180 text-[#233229]" />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column: Vitals & Anatomy Mockup */}
              <div className="space-y-6">
                <WidgetCard className="relative overflow-hidden pt-8">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#F3F6F3] rounded-full flex items-center justify-center"><Plus size={20} /></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#F3F6F3] rounded-full flex items-center justify-center"><Search size={20} /></div>
                  
                  {/* Mock Anatomical visual */}
                  <div className="flex flex-col items-center mb-8 relative">
                     <div className="w-32 h-64 border-2 border-dashed border-[#9CB299] rounded-[40px] flex items-center justify-center opacity-50 mb-4 relative">
                        <Activity size={64} className="text-[#4A7D64]" />
                        <div className="absolute top-1/4 -right-8 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1 text-red-500"><div className="w-2 h-2 bg-red-500 rounded-full"></div> 360°</div>
                        <div className="absolute bottom-1/4 -left-8 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1 text-[#4A7D64]"><div className="w-2 h-2 bg-[#4A7D64] rounded-full"></div> 360°</div>
                     </div>
                     
                     <div className="absolute left-0 top-10 space-y-3">
                        <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-sm flex items-center gap-3">
                           <Wind className="text-red-500" size={20}/>
                           <div>
                             <p className="text-[10px] font-bold text-[#5A7A62]">Oxygen</p>
                             <p className="font-extrabold">99%</p>
                           </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-sm flex items-center gap-3">
                           <Heart className="text-[#4A7D64]" size={20}/>
                           <div>
                             <p className="text-[10px] font-bold text-[#5A7A62]">Heart rate</p>
                             <p className="font-extrabold text-xs">Heart rate</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-4 mb-6 justify-center">
                    <div className="bg-[#F3F6F3] p-3 rounded-2xl text-center flex-1">
                      <FileText size={16} className="mx-auto mb-1 text-[#4A7D64]"/>
                      <p className="text-xs font-bold">Doc 1</p>
                      <p className="text-[10px] text-[#5A7A62]">23/05/24</p>
                    </div>
                    <div className="bg-[#F3F6F3] p-3 rounded-2xl text-center flex-1">
                      <FileText size={16} className="mx-auto mb-1 text-[#4A7D64]"/>
                      <p className="text-xs font-bold">Doc 2</p>
                      <p className="text-[10px] text-[#5A7A62]">23/05/24</p>
                    </div>
                  </div>

                  {/* Dark block at bottom like image */}
                  <div className="bg-[#233229] rounded-[32px] p-6 text-white flex justify-between items-center relative overflow-hidden">
                    <div className="absolute w-32 h-32 bg-[#4A7D64]/20 rounded-full -bottom-10 -right-10 blur-xl"></div>
                    <div className="text-center z-10">
                      <p className="text-3xl font-extrabold">141.2</p>
                      <p className="text-xs text-[#9CB299] font-bold">lb</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-[#4A7D64] flex items-center justify-center text-2xl font-bold text-white z-10">
                       {selectedPatient.name.charAt(0)}
                    </div>
                    <div className="text-center z-10">
                      <p className="text-3xl font-extrabold">79"</p>
                      <p className="text-xs text-[#9CB299] font-bold">bpm</p>
                    </div>
                  </div>
                  <p className="text-center font-bold text-white mt-[-30px] z-20 relative pb-2">{selectedPatient.name}</p>
                </WidgetCard>
              </div>

              {/* Middle Column: Sleep/Chart & Vitals */}
              <div className="space-y-6">
                <WidgetCard>
                   <div className="flex justify-between items-center mb-6">
                     <h2 className="text-xl font-extrabold">Patient Sleep</h2>
                     <button className="w-10 h-10 bg-[#F3F6F3] rounded-full flex items-center justify-center"><MoreHorizontal size={20}/></button>
                   </div>
                   
                   <div className="flex justify-between items-center mb-6">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-[#4A7D64] rounded-full flex items-center justify-center text-white"><Clock size={18}/></div>
                       <span className="font-extrabold text-lg">Sleep periodic</span>
                     </div>
                     <PillTag label="Monthly ∨" active={false} className="bg-[#F3F6F3]" />
                   </div>

                   <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="bg-[#F3F6F3] p-4 rounded-[24px] text-center">
                       <p className="text-xs font-bold text-[#5A7A62] mb-1">Avg sleep</p>
                       <p className="text-3xl font-extrabold">7.3</p>
                     </div>
                     <div className="bg-[#F3F6F3] p-4 rounded-[24px] text-center">
                       <p className="text-xs font-bold text-[#5A7A62] mb-1">Deep sleep</p>
                       <p className="text-3xl font-extrabold">3.6</p>
                     </div>
                   </div>

                   {/* Mock Bar Chart */}
                   <div className="h-32 flex items-end justify-between gap-2 border-b border-dashed border-[#9CB299] pb-2 relative mb-6">
                      <div className="absolute top-4 w-full border-t border-dashed border-[#9CB299] opacity-50"></div>
                      <div className="absolute top-1/2 w-full border-t border-dashed border-[#9CB299] opacity-50"></div>
                      {[4, 5.5, 7.3, 5.5, 6.1, 9.3, 5.5].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 relative">
                           {i === 2 && <span className="absolute -top-6 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm">7.3h</span>}
                           <div className={`w-full rounded-t-xl transition-all ${i===2 ? 'bg-[#4A7D64]' : 'bg-[#E4EDE5]'}`} style={{height: `${h*10}%`}}></div>
                        </div>
                      ))}
                   </div>
                   <div className="flex justify-between text-xs font-bold text-[#9CB299] px-2">
                     <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                   </div>
                </WidgetCard>

                <WidgetCard>
                   <div className="flex justify-between items-center mb-4">
                     <h2 className="text-lg font-extrabold">Other datas</h2>
                     <button><LayoutDashboard size={20} className="text-[#5A7A62]"/></button>
                   </div>
                   <div className="space-y-3">
                     <VitalRow icon={Heart} label="Heart rate" value="76bpm" chart="line" color="text-[#4A7D64]" />
                     <VitalRow icon={Droplets} label="Blood cells" value="98%" chart="dots" color="text-[#4A7D64]" />
                     <VitalRow icon={Wind} label="Oxygen level" value="99%" chart="line" color="text-[#9CB299]" />
                   </div>
                   <button 
                      onClick={() => setShowAddRecord(true)}
                      className="w-full mt-6 bg-[#233229] text-white py-4 rounded-full font-bold hover:bg-[#1a251e] flex items-center justify-center gap-2"
                    >
                      <Plus size={18} /> Add Encounter Record
                    </button>
                </WidgetCard>
              </div>

              {/* Right Column: Tags & Patient Card */}
              <div className="space-y-6">
                <WidgetCard className="bg-[#F3F6F3] border-none shadow-none">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <PillTag label="Clinic Trials" active={false} className="bg-white" />
                    <PillTag label="Pediatric" active={true} />
                    <PillTag label="Gastro" active={false} className="bg-white" />
                    <PillTag label="Nutrition" active={false} className="bg-white" />
                    <PillTag label="Heart" active={false} className="bg-white border-2 border-dashed border-[#9CB299]" />
                    <PillTag label="Depression" active={false} className="bg-white" />
                    <PillTag label="Pediatrices" active={false} className="bg-white" />
                    <PillTag label="Women's Health" active={false} className="bg-white" />
                    <PillTag label="Aging" active={true} />
                    <PillTag label="Newborn" active={false} className="bg-white" />
                    <PillTag label="Fitness" active={false} className="bg-white" />
                    <PillTag label="Global Health" active={true} />
                  </div>
                  <button className="w-full bg-[#4A7D64] text-white py-4 rounded-full font-bold hover:bg-[#3d6953] flex items-center justify-center gap-2">
                    Next <ChevronRight size={18} />
                  </button>
                </WidgetCard>

                <WidgetCard>
                  <h2 className="text-xl font-extrabold mb-6">Patient card</h2>
                  <p className="text-sm font-bold text-[#5A7A62] mb-4">Personal information</p>
                  
                  <div className="flex items-center justify-between mb-8 bg-[#F3F6F3] p-4 rounded-[24px]">
                     <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full border-2 border-white bg-[#E4EDE5] flex items-center justify-center text-xl font-bold text-[#4A7D64]">
                          {selectedPatient.name.charAt(0)}
                        </div>
                        <div>
                           <h3 className="font-extrabold text-lg">{selectedPatient.name}</h3>
                           <p className="text-xs font-bold text-[#4A7D64] flex items-center gap-1"><User size={12}/> Patient</p>
                        </div>
                     </div>
                     <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><MoreHorizontal size={20}/></button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                     <div className="bg-[#F3F6F3] p-4 rounded-[24px]">
                       <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-3"><Activity size={16} className="text-[#4A7D64]" /></div>
                       <p className="font-extrabold text-sm mb-2">Cholesterol level</p>
                       <div className="h-12 border-b border-dashed border-[#9CB299] relative flex items-end">
                         <span className="absolute -top-2 right-0 text-[10px] font-bold text-[#5A7A62]">&lt;200 mg/dL</span>
                         {/* Mock area chart */}
                         <div className="w-full h-8 bg-[#4A7D64]/10 rounded-t-lg border-t-2 border-[#4A7D64]"></div>
                       </div>
                       <p className="text-[10px] font-bold text-[#5A7A62] mt-2">Total cholesterol</p>
                     </div>
                     
                     <div className="bg-[#F3F6F3] p-4 rounded-[24px] flex flex-col">
                       <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-3"><Wind size={16} className="text-[#4A7D64]" /></div>
                       <p className="font-extrabold text-sm mb-2">Lung x-ray</p>
                       <div className="flex-1 bg-black rounded-xl overflow-hidden relative">
                         {/* Abstract x-ray placeholder */}
                         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-12 bg-[#9CB299] rounded-full blur-md opacity-50"></div>
                            <div className="w-8 h-12 bg-[#9CB299] rounded-full blur-md opacity-50 ml-2"></div>
                         </div>
                       </div>
                     </div>
                  </div>

                  <p className="text-sm font-bold text-[#5A7A62] mb-4">Patient folders</p>
                  <div className="space-y-3">
                    <div className="bg-[#F3F6F3] rounded-[24px] p-4">
                       <div className="flex justify-between items-center mb-4">
                         <div className="flex items-center gap-3">
                           <Folder className="text-[#233229]" size={20} fill="#233229" />
                           <span className="font-extrabold text-sm">Current Medications</span>
                         </div>
                         <ChevronDown size={18} className="text-[#5A7A62]" />
                       </div>
                       <div className="flex gap-2">
                         <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-2 flex-1 shadow-sm">
                           <FileText size={14} className="text-[#4A7D64]"/> <span className="text-xs font-bold">Aspirine</span>
                         </div>
                         <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-2 flex-1 shadow-sm">
                           <Activity size={14} className="text-[#4A7D64]"/> <span className="text-xs font-bold">Diclofenac</span>
                         </div>
                       </div>
                    </div>
                    <div className="bg-[#F3F6F3] rounded-[24px] p-4 flex justify-between items-center">
                       <div className="flex items-center gap-3">
                         <Folder className="text-[#233229]" size={20} fill="#233229" />
                         <span className="font-extrabold text-sm">Lab Results</span>
                       </div>
                       <ChevronDown size={18} className="text-[#5A7A62]" />
                    </div>
                  </div>
                </WidgetCard>
              </div>

            </div>
          </div>
        ) : viewMode === 'schedule' ? (
          // Schedule View
          <div className="pb-12">
            <div className="flex justify-between items-end mb-8 px-2">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">Schedule & Appointments</h1>
                <p className="text-[#5A7A62] font-medium mt-1">Manage your clinic schedule and upcoming appointments.</p>
              </div>
              <button className="bg-[#233229] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1a251e] transition-colors flex items-center gap-2 shadow-lg">
                <Plus size={18} /> New Appointment
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar View */}
              <div className="lg:col-span-2">
                <WidgetCard>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-extrabold">June 2024</h2>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-[#F3F6F3] rounded-full text-sm font-bold hover:bg-[#E4EDE5] transition-colors">← Prev</button>
                      <button className="px-4 py-2 bg-[#F3F6F3] rounded-full text-sm font-bold hover:bg-[#E4EDE5] transition-colors">Next →</button>
                    </div>
                  </div>

                  {/* Days of week header */}
                  <div className="grid grid-cols-7 gap-3 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="text-center font-extrabold text-sm text-[#5A7A62] py-2">{day}</div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  <div className="grid grid-cols-7 gap-3">
                    {Array.from({ length: 30 }, (_, i) => {
                      const date = i + 1;
                      const isToday = date === 18;
                      const hasAppointment = [12, 15, 18, 22, 25].includes(date);
                      return (
                        <div
                          key={date}
                          className={`aspect-square flex items-center justify-center rounded-[20px] font-bold cursor-pointer transition-all ${
                            isToday
                              ? 'bg-[#233229] text-white shadow-lg'
                              : hasAppointment
                              ? 'bg-[#E4EDE5] text-[#233229] hover:shadow-md'
                              : 'bg-[#F3F6F3] text-[#5A7A62] hover:bg-[#E4EDE5]'
                          }`}
                        >
                          {date}
                        </div>
                      );
                    })}
                  </div>
                </WidgetCard>

                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-extrabold px-2">Upcoming Appointments</h3>
                  {[
                    { date: 'June 18, 2024', time: '10:00 AM', patient: 'Aisha Patel', specialist: 'Cardiology' },
                    { date: 'June 18, 2024', time: '11:30 AM', patient: 'Rohan Gupta', specialist: 'Neurology' },
                    { date: 'June 19, 2024', time: '2:00 PM', patient: 'Priya Singh', specialist: 'General Practice' },
                    { date: 'June 20, 2024', time: '3:30 PM', patient: 'Amit Kumar', specialist: 'Orthopedics' },
                  ].map((apt, idx) => (
                    <WidgetCard key={idx} className="cursor-pointer hover:shadow-xl transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#E4EDE5] flex items-center justify-center text-lg font-bold text-[#4A7D64]">
                            {apt.patient.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-extrabold text-lg">{apt.patient}</h4>
                            <p className="text-sm text-[#5A7A62] font-bold">{apt.specialist} • {apt.time}</p>
                            <p className="text-xs text-[#9CB299] font-bold">{apt.date}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-[#F3F6F3] rounded-full text-sm font-bold hover:bg-[#E4EDE5] transition-colors">Reschedule</button>
                          <button className="px-4 py-2 bg-[#233229] text-white rounded-full text-sm font-bold hover:bg-[#1a251e] transition-colors">Join</button>
                        </div>
                      </div>
                    </WidgetCard>
                  ))}
                </div>
              </div>

              {/* Right Sidebar: Doctors Directory */}
              <div className="space-y-6">
                <WidgetCard>
                  <h3 className="text-lg font-extrabold mb-4">Available Doctors</h3>
                  <div className="space-y-3">
                    {INITIAL_DOCTORS.map(doctor => (
                      <div key={doctor.id} className="bg-[#F3F6F3] rounded-[24px] p-4 hover:shadow-md transition-all cursor-pointer">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#E4EDE5] flex items-center justify-center font-bold text-[#4A7D64] text-sm">
                              {doctor.name.split(' ')[1].charAt(0)}
                            </div>
                            <div className="flex-1">
                              <p className="font-extrabold text-sm">{doctor.name}</p>
                              <p className="text-[10px] text-[#5A7A62] font-bold">{doctor.specialty}</p>
                            </div>
                          </div>
                          <div className={`w-3 h-3 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        </div>
                        <p className="text-xs text-[#5A7A62] font-bold mb-3">{doctor.clinic}</p>
                        <button className="w-full py-2 bg-[#233229] text-white rounded-full text-xs font-bold hover:bg-[#1a251e] transition-colors">Schedule</button>
                      </div>
                    ))}
                  </div>
                </WidgetCard>
              </div>
            </div>
          </div>
        ) : null}

        {/* Add Record Modal - Organic Style */}
        {showAddRecord && (
          <div className="fixed inset-0 bg-[#233229]/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-lg overflow-hidden border border-[#E4EDE5]">
              <div className="px-8 py-6 flex justify-between items-center">
                <h2 className="text-2xl font-extrabold text-[#233229]">New Encounter</h2>
                <button onClick={() => setShowAddRecord(false)} className="w-10 h-10 bg-[#F3F6F3] rounded-full flex items-center justify-center text-[#5A7A62] hover:bg-[#E4EDE5] transition-colors">✕</button>
              </div>
              <div className="px-8 py-4 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#5A7A62] mb-2">Primary Diagnosis</label>
                  <input type="text" className="w-full bg-[#F3F6F3] rounded-full px-6 py-4 focus:outline-none focus:ring-4 focus:ring-[#9CB299]/30 text-sm font-bold placeholder:text-[#9CB299]" placeholder="e.g. Hypertension" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#5A7A62] mb-2 flex justify-between">
                    <span>Clinical Notes</span>
                    <span className="text-[#9CB299] font-medium">Encrypted at rest</span>
                  </label>
                  <textarea rows="4" className="w-full bg-[#F3F6F3] rounded-[24px] px-6 py-4 focus:outline-none focus:ring-4 focus:ring-[#9CB299]/30 text-sm font-bold placeholder:text-[#9CB299] resize-none" placeholder="Enter observations..."></textarea>
                </div>
                <div className="bg-[#E4EDE5] rounded-[24px] p-6 flex flex-col items-center justify-center border-2 border-dashed border-[#9CB299] text-center cursor-pointer hover:bg-[#D5E0D6] transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3"><FileText className="text-[#4A7D64]" size={20} /></div>
                  <p className="text-sm font-extrabold text-[#233229] mb-1">Upload OCR Prescription</p>
                  <p className="text-xs text-[#5A7A62] font-bold">Tap to scan handwritten notes</p>
                </div>
              </div>
              <div className="px-8 py-6 flex gap-4 mt-2">
                <button onClick={() => setShowAddRecord(false)} className="flex-1 py-4 text-sm font-bold text-[#5A7A62] bg-[#F3F6F3] rounded-full hover:bg-[#E4EDE5] transition-colors">Cancel</button>
                <button onClick={() => setShowAddRecord(false)} className="flex-1 py-4 bg-[#233229] text-white text-sm font-bold rounded-full hover:bg-[#1a251e] transition-colors shadow-lg">Save Record</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}

// 3. PATIENT PORTAL
function PatientPortal({ user, onLogout }) {
  const [billStatus, setBillStatus] = useState('UNPAID'); 
  const [viewMode, setViewMode] = useState('dashboard');

  const handleRazorpayCheckout = () => {
    setBillStatus('PROCESSING');
    setTimeout(() => setBillStatus('PAID'), 2000);
  };

  return (
    <PortalLayout user={user} onLogout={onLogout} onNavClick={(idx) => setViewMode(['dashboard', 'billing', 'appointments'][idx])} navItems={[
      { icon: Activity, label: 'Dashboard', active: viewMode === 'dashboard' },
      { icon: CreditCard, label: 'Billing & Records', active: viewMode === 'billing' },
      { icon: Calendar, label: 'Appointments', active: viewMode === 'appointments' },
    ]}>
      <div className="p-2 w-full overflow-y-auto h-full">
        
        <div className="flex justify-between items-end mb-8 px-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Welcome, {user.name.split(' ')[0]}</h1>
            <p className="text-[#5A7A62] font-medium mt-1">Your health dashboard and schedule.</p>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white bg-[#E4EDE5] flex items-center justify-center text-lg font-bold text-[#4A7D64] shadow-sm">
             {user.name.charAt(0)}
          </div>
        </div>

        {viewMode !== 'dashboard' && (
          <WidgetCard className="mb-6">
            <h2 className="text-2xl font-extrabold">{viewMode === 'billing' ? 'Billing & Records' : 'Appointments'}</h2>
            <p className="mt-2 text-sm font-medium text-[#5A7A62]">
              {viewMode === 'billing' ? 'Review your payment status and access your clinical report.' : 'Your upcoming care schedule is shown below.'}
            </p>
            {viewMode === 'appointments' && <div className="mt-6 space-y-3"><div className="rounded-[24px] bg-[#F3F6F3] p-4"><p className="font-extrabold">Follow-up consultation</p><p className="mt-1 text-sm text-[#5A7A62]">Dr. Sharma · Friday, 15 June · 4:00 PM</p></div><div className="rounded-[24px] bg-[#F3F6F3] p-4"><p className="font-extrabold">Annual health review</p><p className="mt-1 text-sm text-[#5A7A62]">Dr. Sharma · Monday, 24 June · 10:30 AM</p></div></div>}
            {viewMode === 'billing' && <div className="mt-6 rounded-[24px] bg-[#F3F6F3] p-5"><p className="font-extrabold">Consultation Fee · ₹500</p><p className="mt-1 text-sm text-[#5A7A62]">Status: {billStatus === 'PAID' ? 'Payment verified' : 'Payment pending'}</p></div>}
          </WidgetCard>
        )}

        <div className={`${viewMode === 'dashboard' ? '' : 'hidden'} grid grid-cols-1 lg:grid-cols-3 gap-6`}>
          
          {/* Left Col: Schedule & Plan */}
          <div className="lg:col-span-1 space-y-6">
             <WidgetCard className="bg-[#E4EDE5] border-none">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#D5E0D6] flex items-center justify-center text-lg font-bold text-[#4A7D64]">Dr</div>
                    <div>
                      <p className="font-extrabold text-sm">Dr. Sharma</p>
                      <p className="text-[10px] font-bold text-[#4A7D64] flex items-center gap-1"><Stethoscope size={10}/> Psychiatrist</p>
                    </div>
                  </div>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><MoreHorizontal size={16}/></button>
                </div>

                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-2xl font-extrabold leading-tight">Your plan is<br/>almost done</h2>
                  <span className="text-4xl font-black">67%</span>
                </div>

                <div className="h-10 bg-white rounded-full relative flex items-center p-1 mb-6">
                   <div className="w-[67%] h-full bg-[#4A7D64] rounded-full flex items-center justify-center text-white text-[10px] font-bold">1-3 days</div>
                   <div className="absolute right-4 bg-white border border-[#E4EDE5] px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm"><PillTag label="" active={false} className="w-2 h-2 p-0 min-w-0" /> 3 left</div>
                </div>

                <h3 className="font-extrabold text-lg mb-4">Your schedule</h3>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex justify-between w-full text-[10px] font-bold text-[#5A7A62]">
                    <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span className="text-[#233229]">FRI</span><span>SAT</span><span>SUN</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-white h-12 rounded-full flex items-center justify-center text-sm font-extrabold text-[#D5E0D6]">13</div>
                  <div className="flex-1 bg-white h-12 rounded-full flex items-center justify-center text-sm font-extrabold text-[#D5E0D6]">14</div>
                  <div className="flex-1 bg-[#233229] text-white h-12 rounded-full flex items-center justify-center text-sm font-extrabold shadow-lg">15</div>
                  <div className="flex-1 bg-white h-12 rounded-full flex items-center justify-center text-sm font-extrabold text-[#233229]">16</div>
                  <div className="flex-1 bg-white h-12 rounded-full flex items-center justify-center text-sm font-extrabold text-[#233229]">17</div>
                </div>
             </WidgetCard>
          </div>

          {/* Middle Col: Vitals */}
          <div className="lg:col-span-1 space-y-6">
            <WidgetCard>
              <h3 className="text-lg font-extrabold mb-5">Latest Vitals Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-[#F3F6F3] rounded-[24px]">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3"><Activity size={20} className="text-[#4A7D64]" /></div>
                  <div className="text-3xl font-extrabold text-[#233229] mb-1">120<span className="text-sm font-bold text-[#5A7A62] ml-1">/80</span></div>
                  <div className="text-[10px] font-bold text-[#5A7A62] uppercase tracking-wider">Blood Pressure</div>
                </div>
                <div className="p-5 bg-[#F3F6F3] rounded-[24px]">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3"><Heart size={20} className="text-[#4A7D64]" /></div>
                  <div className="text-3xl font-extrabold text-[#233229] mb-1">72<span className="text-sm font-bold text-[#5A7A62] ml-1">bpm</span></div>
                  <div className="text-[10px] font-bold text-[#5A7A62] uppercase tracking-wider">Heart Rate</div>
                </div>
                <div className="p-5 bg-[#F3F6F3] rounded-[24px]">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3"><Wind size={20} className="text-[#4A7D64]" /></div>
                  <div className="text-3xl font-extrabold text-[#233229] mb-1">98<span className="text-sm font-bold text-[#5A7A62] ml-1">%</span></div>
                  <div className="text-[10px] font-bold text-[#5A7A62] uppercase tracking-wider">SpO2</div>
                </div>
                <div className="p-5 bg-[#F3F6F3] rounded-[24px]">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3"><Users size={20} className="text-[#4A7D64]" /></div>
                  <div className="text-3xl font-extrabold text-[#233229] mb-1">141<span className="text-sm font-bold text-[#5A7A62] ml-1">lb</span></div>
                  <div className="text-[10px] font-bold text-[#5A7A62] uppercase tracking-wider">Weight</div>
                </div>
              </div>
            </WidgetCard>
          </div>

          {/* Right Col: Invoice & Vault */}
          <div className="lg:col-span-1 space-y-6">
            <WidgetCard className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#F3F6F3] rounded-full flex items-center justify-center"><CreditCard size={20} className="text-[#233229]" /></div>
                <h3 className="text-lg font-extrabold text-[#233229]">Pending Invoice</h3>
              </div>
              
              <div className="flex justify-between items-end mb-8 bg-[#F3F6F3] p-6 rounded-[24px]">
                <span className="text-sm font-bold text-[#5A7A62] mb-1">Consultation Fee</span>
                <span className="text-4xl font-extrabold text-[#233229]">₹500</span>
              </div>
              
              <div className="mt-auto">
                {billStatus === 'UNPAID' && (
                  <button onClick={handleRazorpayCheckout} className="w-full bg-[#233229] text-white py-4 rounded-full text-base font-bold hover:bg-[#1a251e] transition-colors flex items-center justify-center gap-2 shadow-lg">
                    Pay via Gateway <span className="opacity-50 text-xs font-normal">(Mock)</span>
                  </button>
                )}
                {billStatus === 'PROCESSING' && (
                  <div className="w-full bg-[#E4EDE5] text-[#233229] py-4 rounded-full text-base font-bold flex items-center justify-center gap-2">
                    <Clock size={20} className="animate-spin" /> Verifying...
                  </div>
                )}
                {billStatus === 'PAID' && (
                  <div className="w-full bg-[#4A7D64] text-white py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 shadow-lg">
                    <CheckCircle size={20} /> Payment Verified
                  </div>
                )}
              </div>
            </WidgetCard>

            {/* Health Vault */}
            <WidgetCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#F3F6F3] rounded-full flex items-center justify-center"><FileText size={20} className="text-[#233229]" /></div>
                <h3 className="text-lg font-extrabold text-[#233229]">Diagnostic Report</h3>
              </div>
              
              <p className="text-sm text-[#5A7A62] font-bold mb-6">Your latest FHIR-compliant clinical summary is available.</p>
              
              <button 
                disabled={billStatus !== 'PAID'}
                className={`w-full py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 transition-all ${
                  billStatus === 'PAID' 
                  ? 'bg-white border-2 border-[#4A7D64] text-[#4A7D64] hover:bg-[#F3F6F3]' 
                  : 'bg-[#F3F6F3] text-[#9CB299] cursor-not-allowed'
                }`}
              >
                <Download size={20} />
                {billStatus === 'PAID' ? 'Download FHIR Bundle' : 'Locked (Pay Bill)'}
              </button>
            </WidgetCard>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}

// --- SHARED UI COMPONENTS (Sage Theme) ---

function PortalLayout({ children, user, navItems, onLogout, onNavClick }) {
  return (
    <>
      {/* Sidebar Menu */}
      <div className="hidden md:flex w-24 bg-white/40 backdrop-blur-md rounded-[40px] flex-col items-center py-8 shrink-0 z-10 shadow-sm border border-white/50">
        <div className="w-12 h-12 bg-[#233229] rounded-full flex items-center justify-center mb-8 shadow-lg">
          <Activity size={24} className="text-white" strokeWidth={2.5} />
        </div>
        
        <div className="flex-1 flex flex-col gap-4 w-full px-4">
          {navItems.map((item, idx) => (
            <button 
              key={idx} 
              title={item.label}
              onClick={() => onNavClick && onNavClick(idx)}
              className={`w-full aspect-square flex items-center justify-center rounded-3xl transition-all ${
                item.active 
                ? 'bg-[#233229] text-white shadow-md' 
                : 'bg-white text-[#5A7A62] hover:bg-[#F3F6F3] hover:text-[#233229]'
              }`}
            >
              <item.icon size={24} strokeWidth={2.5} />
            </button>
          ))}
        </div>

        <div className="w-full px-4 mt-auto">
          <button 
            onClick={onLogout}
            title="Sign Out"
            className="w-full aspect-square flex items-center justify-center bg-white rounded-3xl text-[#5A7A62] hover:bg-red-50 hover:text-red-700 transition-colors shadow-sm"
          >
            <LogOut size={24} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative z-0">
        <button
          onClick={onLogout}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#233229] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#354b3c] md:hidden"
        >
          <LogOut size={17} />
          Sign out
        </button>
        {children}
      </div>
    </>
  );
}

function WidgetCard({ children, className = "", onClick }) {
  return (
    <div onClick={onClick} className={`bg-white rounded-[40px] p-6 shadow-sm border border-[#F3F6F3]/50 ${className}`}>
      {children}
    </div>
  );
}

function PillTag({ label, active, className = "" }) {
  return (
    <span className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
      active ? 'bg-[#233229] text-white shadow-md' : 'bg-[#233229]/5 text-[#5A7A62] hover:bg-[#233229]/10'
    } ${className}`}>
      {label}
    </span>
  );
}

function VitalRow({ icon: Icon, label, value, chart, color }) {
  return (
    <div className="flex items-center gap-4 bg-[#F3F6F3] p-4 rounded-[24px]">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
        <Icon size={18} className={color} />
      </div>
      <div className="w-24">
        <p className="text-[10px] font-bold text-[#5A7A62] mb-0.5">{label}</p>
        <p className="font-extrabold text-lg">{value}</p>
      </div>
      <div className="flex-1 flex items-center justify-end px-2">
         {/* Minimal abstract chart representations */}
         {chart === 'line' && (
           <svg width="60" height="20" viewBox="0 0 60 20" className="opacity-70">
             <polyline points="0,15 15,5 30,18 45,2 60,10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={color} />
           </svg>
         )}
         {chart === 'dots' && (
           <div className="flex gap-1.5 items-end h-5">
             <div className="w-2 h-2 rounded-full bg-[#4A7D64]/30"></div>
             <div className="w-2 h-3 rounded-full bg-[#4A7D64]/50"></div>
             <div className="w-2 h-5 rounded-full bg-[#4A7D64]"></div>
             <div className="w-2 h-4 rounded-full bg-[#4A7D64]/80"></div>
             <div className="w-2 h-2 rounded-full bg-[#4A7D64]/30"></div>
           </div>
         )}
      </div>
      <button className="w-8 h-8 bg-[#233229] text-white rounded-full flex items-center justify-center shrink-0">
        <ChevronRight size={16} />
      </button>
    </div>
  );
}