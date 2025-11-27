import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { BUSINESS_SECTIONS } from '../constants';
import { TrendingUp, Calculator, Lock, Wallet } from 'lucide-react';

const Business: React.FC = () => {
  // --- Static Data for Feasibility Study (Read Only) ---
  
  const startupCosts = [
    { id: 1, name: 'شراء مقر الشركة (عقار تمليك)', cost: 2000000 },
    { id: 2, name: 'معدات مكتبية وأثاث وتجهيزات وديكور', cost: 600000 },
    { id: 3, name: 'تصميم وبرمجة الموقع والتطبيق', cost: 150000 },
    { id: 4, name: 'شراء وتجهيز كونتنر X2 Trip (نموذج أولي)', cost: 220000 },
    { id: 5, name: 'تجهيز محتوى XR/VR الأولي', cost: 200000 },
    { id: 6, name: 'أجهزة كمبيوتر وسيرفرات داخلية', cost: 120000 },
    { id: 7, name: 'تأسيس وإجراءات قانونية', cost: 60000 },
    { id: 8, name: 'حملة تسويق الافتتاح', cost: 50000 },
  ];

  const monthlyCosts = [
    { id: 1, name: 'رواتب الفريق التقني والإداري', cost: 100000 },
    { id: 2, name: 'تكاليف السيرفرات السحابية (Cloud) وسيرفرات VR', cost: 30000 },
    { id: 3, name: 'اشتراكات API (طيران، فنادق، خرائط)', cost: 20000 },
    { id: 4, name: 'إيجار مقرات فرعية / مخازن', cost: 15000 },
    { id: 5, name: 'حملات تسويقية شهرية', cost: 15000 },
    { id: 6, name: 'مصاريف المقرات (كهرباء، انترنت، صيانة)', cost: 12000 },
    { id: 7, name: 'مصاريف نثرية وصيانة دورية', cost: 7500 },
  ];

  const monthlyRevenues = [
    { id: 1, name: 'تذاكر واشتراكات X2 Trip (200 × $70)', revenue: 669000 },
    { id: 2, name: 'عمولات الشركات (Corporate)', revenue: 150000 },
    { id: 3, name: 'عمولات حجز الطيران والفنادق (400 حجز)', revenue: 120000 },
    { id: 4, name: 'ايرادات تطبيق Health Assistant (200 مشترك)', revenue: 100000 },
    { id: 5, name: 'شراكات B2B & API Integration (15 شركة)', revenue: 60000 },
    { id: 6, name: 'مبيعات المتجر الإلكتروني (1500 منتج)', revenue: 60000 },
    { id: 7, name: 'رحلات VIP Premium Services', revenue: 40000 },
    { id: 8, name: 'إعلانات شهرية', revenue: 30000 },
  ];

  // Calculations
  const totalStartup = startupCosts.reduce((acc, item) => acc + item.cost, 0);
  const totalMonthlyCost = monthlyCosts.reduce((acc, item) => acc + item.cost, 0);
  const totalMonthlyRevenue = monthlyRevenues.reduce((acc, item) => acc + item.revenue, 0);
  const netProfit = totalMonthlyRevenue - totalMonthlyCost;

  // Chart Data Preparation
  const chartData = monthlyRevenues.map(item => ({
    name: item.name.split('(')[0].trim(), // Shorten name for chart
    value: item.revenue
  }));

  const COLORS = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#64748b'];

  return (
    <div className="min-h-screen bg-nova-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-1 rounded-full mb-4 border border-green-500/20">
            <Lock size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">Approved Financial Study</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
            دراسة الجدوى الاقتصادية
          </h1>
          <p className="text-xl text-gray-400">تحليل مالي دقيق للتكاليف والأرباح المتوقعة (نسخة نهائية)</p>
        </div>

        {/* --- Feasibility Table (Read Only) --- */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <Wallet size={200} />
            </div>

            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10 relative z-10">
                <Calculator className="text-nova-accent" size={32} />
                <h2 className="text-2xl font-bold text-white">ملخص البيانات المالية</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {/* 1. Startup Costs */}
                <div className="bg-nova-800/40 p-5 rounded-xl border border-white/5 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-red-400 mb-6 flex justify-between items-center border-b border-white/5 pb-2">
                        التكاليف التأسيسية
                        <span className="text-white text-xs bg-red-500/20 px-2 py-1 rounded border border-red-500/30">L.E {totalStartup.toLocaleString()}</span>
                    </h3>
                    <div className="space-y-4 max-h-[450px] overflow-y-auto custom-scrollbar pl-2">
                        {startupCosts.map((item) => (
                            <div key={item.id} className="group">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="text-xs text-gray-300 group-hover:text-white transition-colors">{item.name}</label>
                                    <span className="text-xs font-mono text-gray-400">{item.cost.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-nova-900 h-2 rounded-full overflow-hidden">
                                    <div className="bg-red-500/50 h-full" style={{ width: `${(item.cost / 2000000) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Monthly Costs */}
                <div className="bg-nova-800/40 p-5 rounded-xl border border-white/5 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-orange-400 mb-6 flex justify-between items-center border-b border-white/5 pb-2">
                        التكاليف التشغيلية (شهرياً)
                        <span className="text-white text-xs bg-orange-500/20 px-2 py-1 rounded border border-orange-500/30">L.E {totalMonthlyCost.toLocaleString()}</span>
                    </h3>
                    <div className="space-y-4 max-h-[450px] overflow-y-auto custom-scrollbar pl-2">
                        {monthlyCosts.map((item) => (
                            <div key={item.id} className="group">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="text-xs text-gray-300 group-hover:text-white transition-colors">{item.name}</label>
                                    <span className="text-xs font-mono text-gray-400">{item.cost.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-nova-900 h-2 rounded-full overflow-hidden">
                                    <div className="bg-orange-500/50 h-full" style={{ width: `${(item.cost / 100000) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Revenue */}
                <div className="bg-nova-800/40 p-5 rounded-xl border border-white/5 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-green-400 mb-6 flex justify-between items-center border-b border-white/5 pb-2">
                        الإيرادات المتوقعة (شهرياً)
                        <span className="text-white text-xs bg-green-500/20 px-2 py-1 rounded border border-green-500/30">L.E {totalMonthlyRevenue.toLocaleString()}</span>
                    </h3>
                    <div className="space-y-4 max-h-[450px] overflow-y-auto custom-scrollbar pl-2">
                        {monthlyRevenues.map((item) => (
                            <div key={item.id} className="group">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="text-xs text-gray-300 group-hover:text-white transition-colors">{item.name}</label>
                                    <span className="text-xs font-mono text-green-400">{item.revenue.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-nova-900 h-2 rounded-full overflow-hidden">
                                    <div className="bg-green-500/50 h-full" style={{ width: `${(item.revenue / 700000) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Total Result Bar */}
            <div className="mt-8 bg-gradient-to-r from-nova-900 to-nova-800 rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                <div className="text-center md:text-right flex-1">
                    <div className="text-gray-400 text-sm mb-1">صافي الربح الشهري المتوقع</div>
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                        {netProfit.toLocaleString()} <span className="text-lg text-gray-500">ج.م</span>
                    </div>
                </div>
                
                <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
                
                <div className="text-center md:text-right flex-1">
                    <div className="text-gray-400 text-sm mb-1">هامش الربح (Profit Margin)</div>
                    <div className="text-2xl font-bold text-white">
                        {((netProfit / totalMonthlyRevenue) * 100).toFixed(1)}%
                    </div>
                </div>

                <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>

                <div className="text-center md:text-right flex-1">
                    <div className="text-gray-400 text-sm mb-1">نقطة التعادل (ROI)</div>
                    <div className="text-2xl font-bold text-blue-400">
                        {(totalStartup / netProfit).toFixed(1)} <span className="text-sm text-gray-500">شهر</span>
                        <span className="block text-[10px] text-gray-500 font-normal mt-1">لاسترداد رأس المال التأسيسي</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Charts & Static Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
             {/* Chart */}
             <div className="bg-white/5 rounded-3xl p-6 border border-white/10 h-[400px] flex flex-col">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="text-nova-500" /> توزيع مصادر الدخل
                </h3>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                        <XAxis type="number" stroke="#9ca3af" fontSize={10} tickFormatter={(val) => `${val/1000}k`} />
                        <YAxis dataKey="name" type="category" stroke="#fff" fontSize={11} width={100} />
                        <Tooltip 
                            cursor={{fill: 'rgba(255,255,255,0.05)'}}
                            contentStyle={{ backgroundColor: '#1e1b4b', borderColor: '#4f46e5', color: '#fff', borderRadius: '8px' }} 
                            formatter={(value: number) => [`${value.toLocaleString()} ج.م`, 'الإيراد']}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                    </ResponsiveContainer>
                </div>
             </div>

             {/* Sections Info */}
             <div className="space-y-4">
                 {BUSINESS_SECTIONS.map((section, idx) => (
                    <div key={idx} className="bg-nova-800/50 p-6 rounded-2xl border border-white/10 hover:bg-nova-800 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <section.icon size={20} className="text-nova-accent" />
                            </div>
                            <h3 className="font-bold text-white text-lg">{section.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {section.content.map((item, i) => (
                                <span key={i} className="text-xs bg-black/20 text-gray-300 px-3 py-1 rounded-full border border-white/5">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default Business;