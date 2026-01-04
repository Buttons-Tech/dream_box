"use client"
import Image from 'next/image';
import { 
  LayoutDashboard, User, Users, GraduationCap, 
  BookOpen, MessageSquare, Settings, HelpCircle, 
  LogOut, Bell, Mail, MoreVertical
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- Types & Interfaces ---
interface AttendanceData {
  name: string;
  present: number;
}

interface Student {
  id: number;
  name: string;
  class: string;
  fees: string;
  status: 'Paid' | 'Payment Due';
  dueDate: string;
  avatar: string;
}

interface StatCardProps {
  title: string;
  count: string | number;
  bgColor: string;
}

// --- Mock Data ---
const attendanceData: AttendanceData[] = [
  { name: 'Jan', present: 450 },
  { name: 'Feb', present: 280 },
  { name: 'Mar', present: 390 },
  { name: 'Apr', present: 480 },
  { name: 'May', present: 470 },
  { name: 'June', present: 550 },
];

const students: Student[] = [
  { id: 1, name: 'Nobi Uche', class: '12', fees: 'N150,000', status: 'Payment Due', dueDate: '24-12-2025', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Nobi Uche', class: '12', fees: 'N100,000', status: 'Paid', dueDate: '1-1-2026', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Nobi Uche', class: '12', fees: 'N150,000', status: 'Payment Due', dueDate: '24-12-2025', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Nobi Uche', class: '12', fees: 'N150,000', status: 'Payment Due', dueDate: '24-12-2025', avatar: 'https://i.pravatar.cc/150?u=4' },
];

// --- Sub-Components ---
const StatCard: React.FC<StatCardProps> = ({ title, count, bgColor }) => (
  <div className="bg-white rounded-3xl p-4 flex justify-between items-center shadow-sm border border-gray-50 flex-1">
    <div>
      <p className="text-gray-500 text-xs font-medium">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{count}</h3>
    </div>
    <div className={`${bgColor} p-3 rounded-full flex items-center justify-center`}>
       <div className="bg-white rounded-full p-1 italic text-[10px] text-gray-800 font-bold">→</div>
    </div>
  </div>
);

const DreamboxDashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#F8F7FF] font-sans text-slate-800 p-4 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-20 bg-[#6347D1] rounded-[2rem] flex flex-col items-center py-8 text-white gap-8 flex-shrink-0">
        <div className="bg-pink-500 p-2 rounded-xl mb-4">
          <div className="w-6 h-6 bg-white rounded-sm"></div>
        </div>
        <div className="flex flex-col gap-6 opacity-80">
          <LayoutDashboard className="cursor-pointer hover:opacity-100" />
          <User className="cursor-pointer hover:opacity-100" />
          <Users className="cursor-pointer hover:opacity-100" />
          <GraduationCap className="cursor-pointer hover:opacity-100" />
          <BookOpen className="cursor-pointer hover:opacity-100" />
          <MessageSquare className="cursor-pointer hover:opacity-100" />
          <Settings className="cursor-pointer hover:opacity-100" />
          <HelpCircle className="cursor-pointer hover:opacity-100" />
        </div>
        <div className="mt-auto">
          <LogOut className="cursor-pointer opacity-80" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 px-8 overflow-y-auto custom-scrollbar">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 pt-2 sticky top-0 bg-[#F8F7FF] z-20 pb-2">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Mail className="text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-600" />
              <div className="relative">
                <Bell className="text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full border-2 border-[#F8F7FF]"></span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="font-bold text-sm">Mercy John</p>
                <p className="text-xs text-gray-400 font-medium">Admin User</p>
              </div>
<Image 
    src="https://i.pravatar.cc/150?u=mercy" 
    alt="Admin Profile" 
    width={40} 
    height={40} 
    className="rounded-full border-2 border-[#6347D1]"
  />            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Layout */}
          <div className="col-span-12 xl:col-span-8 space-y-6">
            {/* Greeting Banner */}
            <div className="bg-[#6347D1] rounded-[2.5rem] p-8 text-white relative flex justify-between items-center shadow-lg shadow-purple-200">
              <div className="z-10">
                <h2 className="text-2xl font-bold mb-2 tracking-tight">Hello Ms. Mjay</h2>
                <p className="text-purple-100 opacity-90 max-w-sm text-sm leading-relaxed">
                  Navigate the future of <span className="font-bold">Education</span> with intuitive <span className="font-bold">School Management Software</span>
                </p>
                <button className="mt-6 bg-[#FE9B4B] hover:bg-orange-500 text-white px-8 py-2.5 rounded-2xl text-sm font-bold shadow-md transition-all active:scale-95">
                  Learn More
                </button>
              </div>
             <Image 
    src="https://illustrations.popsy.co/white/customer-support.svg" 
    alt="Dreambox Support" 
    fill
    className="object-contain"
    priority // Loads this image faster as it's above the fold
  />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Total Student" count="2452" bgColor="bg-[#4D7CFE]" />
              <StatCard title="Total Tutors" count="152" bgColor="bg-[#78D98C]" />
              <StatCard title="Partner Schools" count="12" bgColor="bg-[#FA6BBF]" />
              <StatCard title="Total Parent" count="15" bgColor="bg-[#FE9B4B]" />
            </div>

            {/* Student Table */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
              <div className="flex gap-8 mb-8">
                <button className="font-bold border-b-2 border-slate-900 pb-1 text-slate-900">Student Info</button>
                <button className="text-gray-400 font-bold pb-1 hover:text-gray-600 transition-colors">Student Info</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-400 text-xs font-bold uppercase tracking-wider border-b border-gray-50">
                      <th className="pb-4 font-bold">Student Name</th>
                      <th className="pb-4 font-bold">Class</th>
                      <th className="pb-4 font-bold">Fees</th>
                      <th className="pb-4 font-bold">Status</th>
                      <th className="pb-4 font-bold">Due date</th>
                      <th className="pb-4 font-bold text-right pr-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {students.map((student, index) => (
                      <tr 
                        key={student.id} 
                        className={`transition-all duration-200 ${index === 1 ? 'bg-[#6347D1] text-white rounded-2xl shadow-xl' : 'hover:bg-slate-50'}`}
                      >
                        <td className="py-4 pl-3 rounded-l-2xl">
                          <div className="flex items-center gap-3 relative w-8 h-8 flex-shrink-0">
                            <Image 
             src={student.avatar} 
             alt={student.name} 
             fill
             className="rounded-lg object-cover"
           />
                            <span className="font-bold">{student.name}</span>
                          </div>
                        </td>
                        <td className="py-4 font-medium">{student.class}</td>
                        <td className="py-4 font-medium">{student.fees}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-black tracking-wide ${
                            index === 1 ? 'bg-[#43E88E] text-white' : 'bg-red-50 text-[#FF7D7D]'
                          }`}>
                            {student.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-4 font-medium">{student.dueDate}</td>
                        <td className="py-4 text-right pr-4 rounded-r-2xl">
                          <MoreVertical className="w-4 h-4 inline cursor-pointer opacity-60 hover:opacity-100" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Layout */}
          <div className="col-span-12 xl:col-span-4 space-y-6">
            {/* Attendance Chart */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Class Attendance</h3>
                <div className="flex gap-4 text-[10px] font-bold">
                  <span className="flex items-center gap-1"><div className="w-2 h-2 bg-[#6347D1] rounded-full"></div> Present</span>
                  <span className="flex items-center gap-1 text-gray-300"><div className="w-2 h-2 bg-gray-100 rounded-full"></div> Present</span>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={attendanceData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid vertical={false} stroke="#F1F5F9" strokeDasharray="0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94A3B8'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94A3B8'}} />
                    <Tooltip cursor={{fill: '#F8F7FF'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                    <Bar dataKey="present" fill="#6347D1" radius={[6, 6, 6, 6]} barSize={16} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Add Teachers Section */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-50">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Add Teachers</h3>
                <button className="text-[10px] text-gray-400 font-bold uppercase tracking-widest hover:text-[#6347D1]">See All</button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-3">Teacher List</p>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      
                      <Image 
             src={`https://i.pravatar.cc/150?u=teacher${i}`} 
             alt="Teacher" 
             fill
             key={i} 
             className="rounded-lg object-cover"
           />
                    ))}
                    <div className="w-10 h-10 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-200 transition-colors">
                      <span className="text-xs font-bold">+</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Add Teacher Via E-Mail</p>
                  <div className="flex gap-2 p-1.5 bg-[#F4F3FF] rounded-2xl border border-indigo-50">
                    <input 
                      type="email" 
                      placeholder="Invite Via E-Mail" 
                      className="bg-transparent border-none px-4 py-2 text-xs flex-1 outline-none font-medium placeholder:text-indigo-300"
                    />
                    <button className="bg-[#6347D1] hover:bg-[#5239b5] text-white px-6 py-2 rounded-xl text-xs font-bold shadow-lg shadow-indigo-100 transition-all">
                      Invite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DreamboxDashboard;