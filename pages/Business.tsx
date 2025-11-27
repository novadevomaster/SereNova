import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { REVENUE_DATA, BUSINESS_SECTIONS } from '../constants';
import { TrendingUp, DollarSign, Calculator, RefreshCw } from 'lucide-react';

const Business: React.FC = () => {
  // --- Editable State for Feasibility Study ---
  const [startupCosts, setStartupCosts] = useState([
    { id: 1, name: 'شراء مقر الشركة (عقار تمليك)', cost: 2500000 },
    { id: 2, name: 'تصميم وبرمجة الموقع والتطبيق', cost: 150000 },
    { id: 3, name: 'شراء وتجهيز كونتنر X2 Trip (نموذج أولي)', cost: 350000 },
    { id: 4, name: 'أجهزة كمبيوتر وسيرفرات داخلية', cost: 120000 },
    { id: 5, name: 'معدات مكتبية وأثاث وتجهيزات', cost: 80000 },
    { id: 6, name: 'تجهيز محتوى XR/VR الأولي', cost: 200000 },
    { id: 7, name: 'حملة تسويق الافتتاح', cost: 100000 },
  ]);

  const [monthlyCosts, setMonthlyCosts] = useState([
    { id: 1, name: 'رواتب الفريق التقني والإداري', cost: 120000 },
    { id: 2, name: 'إيجار مقرات فرعية / مخازن', cost: 15000 },
    { id: 3, name: 'اشتراكات API (طيران، فنادق، خرائط)', cost: 25000 },
    { id: 4, name: 'تكاليف السيرفرات السحابية (Cloud)', cost: 8000 },
    { id: 5, name: 'حملات تسويقية شهرية', cost: 30000 },
    { id: 6, name: 'مصاريف نثرية وصيانة دورية', cost: 10000 },
  ]);

  const [monthlyRevenues, setMonthlyRevenues] = useState([
    { id: 1, name: 'عمولات حجز الطيران والفنادق', revenue: 180000 },
    { id: 2, name: 'تذاكر واشتراكات X2 Trip', revenue: 90000 },
    { id: 3, name: 'مبيعات المتجر الإلكتروني', revenue: 30000 },
    { id: 4, name: 'اشتراكات التأمين الذكي (Smart Life)', revenue: 45000 },
  ]);

  // Calculations
  const totalStartup = startupCosts.reduce((acc, item) => acc + Number(item.cost), 0);
  const totalMonthlyCost = monthlyCosts.reduce((acc, item) => acc + Number(item.cost), 0);
  const totalMonthlyRevenue = monthlyRevenues.reduce((acc, item) => acc + Number(item.revenue), 0);
  const netProfit = totalMonthlyRevenue - totalMonthlyCost;

  // Handlers
  const handleStartupChange = (id: number, val: string) => {
    setStartupCosts(startupCosts.map(item => item.id === id ? { ...item, cost: Number(val) } : item));
  };
  const handleMonthlyCostChange = (id: number, val: string) => {
    setMonthlyCosts(monthlyCosts.map(item => item.id === id ? { ...item, cost: Number(val) } : item));
  };
  const handleRevenueChange = (id: number, val: string) => {
    setMonthlyRevenues(monthlyRevenues.map(item => item.id === id ? { ...item, revenue: Number(val) } : item));
  };

  return (
    <div className="min-h-screen bg-nova-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
            دراسة الجدوى الاقتصادية
          </h1>
          <p className="text-xl text-gray-400">جدول تفاعلي لحساب تكاليف وأرباح مشروع Nova</p>
        </div>

        {/* --- Interactive Feasibility Table --- */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-16 shadow-2xl">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                <Calculator className="text-nova-accent" size={32} />
                <h2 className="text-2xl font-bold text-white">حاسبة المشروع (ادخل الأرقام المتوقعة)</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 1. Startup Costs */}
                <div className="bg-nova-800/30 p-4 rounded-xl border border-white/5">
                    <h3 className="text-lg font-bold text-red-400 mb-4 flex justify-between">
                        التكاليف التأسيسية
                        <span className="text-white text-sm bg-red-500/20 px-2 py-1 rounded">{totalStartup.toLocaleString()} ج.م</span>
                    </h3>
                    <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pl-2">
                        {startupCosts.map((item) => (
                            <div key={item.id}>
                                <label className="text-xs text-gray-400 block mb-1">{item.name}</label>
                                <input 
                                    type="number" 
                                    value={item.cost}
                                    onChange={(e) => handleStartupChange(item.id, e.target.value)}
                                    className="w-full bg-nova-900 border border-white/10 rounded px-3 py-2 text-white text-sm focus:border-nova-500 outline-none transition-colors"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Monthly Costs */}
                <div className="bg-nova-800/30 p-4 rounded-xl border border-white/5">
                    <h3 className="text-lg font-bold text-orange-400 mb-4 flex justify-between">
                        التكاليف التشغيلية (شهرياً)
                        <span className="text-white text-sm bg-orange-500/20 px-2 py-1 rounded">{totalMonthlyCost.toLocaleString()} ج.م</span>
                    </h3>
                    <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pl-2">
                        {monthlyCosts.map((item) => (
                            <div key={item.id}>
                                <label className="text-xs text-gray-400 block mb-1">{item.name}</label>
                                <input 
                                    type="number" 
                                    value={item.cost}
                                    onChange={(e) => handleMonthlyCostChange(item.id, e.target.value)}
                                    className="w-full bg-nova-900 border border-white/10 rounded px-3 py-2 text-white text-sm focus:border-nova-500 outline-none transition-colors"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Revenue */}
                <div className="bg-nova-800/30 p-4 rounded-xl border border-white/5">
                    <h3 className="text-lg font-bold text-green-400 mb-4 flex justify-between">
                        الإيرادات المتوقعة (شهرياً)
                        <span className="text-white text-sm bg-green-500/20 px-2 py-1 rounded">{totalMonthlyRevenue.toLocaleString()} ج.م</span>
                    </h3>
                    <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pl-2">
                        {monthlyRevenues.map((item) => (
                            <div key={item.id}>
                                <label className="text-xs text-gray-400 block mb-1">{item.name}</label>
                                <input 
                                    type="number" 
                                    value={item.revenue}
                                    onChange={(e) => handleRevenueChange(item.id, e.target.value)}
                                    className="w-full bg-nova-900 border border-white/10 rounded px-3 py-2 text-white text-sm focus:border-green-500 outline-none transition-colors"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Total Result Bar */}
            <div className="mt-8 bg-nova-900 rounded-xl p-6 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-right">
                    <div className="text-gray-400 text-sm">صافي الربح الشهري المتوقع</div>
                    <div className={`text-3xl font-bold ${netProfit >= 0 ? 'text-green-400' : 'text-red-500'}`}>
                        {netProfit.toLocaleString()} ج.م
                    </div>
                </div>
                <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
                <div className="text-center md:text-right">
                    <div className="text-gray-400 text-sm">التكلفة التأسيسية الكلية</div>
                    <div className="text-xl font-bold text-white">
                        {totalStartup.toLocaleString()} ج.م
                    </div>
                </div>
                <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
                <div className="text-center md:text-right">
                    <div className="text-gray-400 text-sm">فترة استرداد رأس المال (ROI)</div>
                    <div className="text-xl font-bold text-blue-400">
                        {netProfit > 0 ? (totalStartup / netProfit).toFixed(1) + ' شهر' : '---'}
                    </div>
                </div>
            </div>
        </div>

        {/* Charts & Static Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
             <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="text-nova-500" /> الرسم البياني للإيرادات
                </h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={REVENUE_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tick={{fill: '#9ca3af'}} />
                        <YAxis stroke="#9ca3af" fontSize={12} tick={{fill: '#9ca3af'}} />
                        <Tooltip contentStyle={{ backgroundColor: '#1e1b4b', borderColor: '#4f46e5', color: '#fff' }} />
                        <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} name="النسبة %" />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
             </div>

             <div className="space-y-4">
                 {BUSINESS_SECTIONS.map((section, idx) => (
                    <div key={idx} className="bg-nova-800/50 p-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                        <section.icon size={20} className="text-nova-400" />
                        <h3 className="font-bold text-white">{section.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{section.content.join(' • ')}</p>
                    </div>
                ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default Business;