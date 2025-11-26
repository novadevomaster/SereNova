import React from 'react';
import { Glasses, Smartphone, Activity, Zap, Wind, Thermometer, Gamepad2, Navigation, HeartPulse, Shield, Map, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Innovation: React.FC = () => {
  return (
    <div className="min-h-screen bg-nova-900 pt-20">
      
      {/* XR POD Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-nova-900 to-[#050510]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                <Glasses size={16} />
                <span>الجيل القادم من السفر</span>
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-4">كبسولة السفر الافتراضي (Nova XR Pod)</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                ليست مجرد نظارة، بل "كبسولة" متكاملة تنقلك جسدياً وشعورياً.
            </p>
            {/* Link to X2 Trip */}
            <div className="mt-8">
                <Link to="/x2-trip" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-500/25">
                    استكشف تقنية X2 Trip (رحلتين في وقت واحد) <ArrowLeft size={20} />
                </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* The Pod Visual Representation */}
             <div className="relative group perspective-1000">
                <div className="relative w-full aspect-square max-w-md mx-auto bg-gray-900 rounded-3xl border-4 border-gray-800 shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-900 via-transparent to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-purple-500/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border border-blue-500/30 rounded-full animate-ping opacity-20"></div>

                    <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                        <h3 className="text-white font-bold text-lg mb-1">Status: Active</h3>
                        <div className="flex gap-2">
                             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                             <span className="text-xs text-gray-300">Immersion Level: 98%</span>
                        </div>
                    </div>
                </div>
             </div>

             {/* Pod Specifications */}
             <div>
                <h3 className="text-2xl font-bold text-white mb-8 border-r-4 border-purple-500 pr-4">متطلبات ومواصفات الكبسولة</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                        <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400"><Wind size={24} /></div>
                        <div>
                            <h4 className="text-white font-bold">محاكي الطقس</h4>
                            <p className="text-xs text-gray-400 mt-1">تكييف ذكي يغير الحرارة والرطوبة.</p>
                        </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                        <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><Navigation size={24} /></div>
                        <div>
                            <h4 className="text-white font-bold">مشاية متعددة الاتجاهات</h4>
                            <p className="text-xs text-gray-400 mt-1">Omni-Treadmill للجري بحرية.</p>
                        </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                        <div className="bg-red-500/20 p-2 rounded-lg text-red-400"><Gamepad2 size={24} /></div>
                        <div>
                            <h4 className="text-white font-bold">بدلة لمسية (Haptics)</h4>
                            <p className="text-xs text-gray-400 mt-1">لشعور ملمس الأشياء والاهتزازات.</p>
                        </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4">
                        <div className="bg-yellow-500/20 p-2 rounded-lg text-yellow-400"><Thermometer size={24} /></div>
                        <div>
                            <h4 className="text-white font-bold">وحدة الروائح الذكية</h4>
                            <p className="text-xs text-gray-400 mt-1">إطلاق روائح مميزة للمكان.</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Smart Life App UX/UI Section */}
      <section className="py-24 bg-black/20 relative page-break">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                    <Smartphone size={16} />
                    <span>Smart Life App UX/UI</span>
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-4">تصميم التجربة: كيف يغير التطبيق حياتك؟</h2>
                <p className="text-xl text-gray-400">واجهة مستخدم مصممة للسرعة، الأمان، والسهولة.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* UX Step 1 */}
                <div className="bg-nova-800/50 rounded-2xl p-6 border border-white/10 flex flex-col items-center">
                    <div className="w-64 h-[450px] bg-gray-900 rounded-[2.5rem] border-4 border-gray-700 overflow-hidden relative shadow-2xl mb-6 transform hover:scale-105 transition-transform">
                        <div className="h-14 bg-nova-900 flex items-center justify-between px-4 pt-2">
                            <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                            <div className="text-white text-xs font-bold">Nova Life</div>
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-24 rounded-xl flex items-center justify-center text-white text-center p-2">
                                <div>
                                    <h5 className="font-bold">حالتك اليوم</h5>
                                    <p className="text-xs opacity-80">ممتازة - نبض مستقر</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="h-20 bg-gray-800 rounded-lg flex flex-col items-center justify-center text-gray-300">
                                    <HeartPulse size={20} className="mb-1 text-red-400"/>
                                    <span className="text-[10px]">الصحة</span>
                                </div>
                                <div className="h-20 bg-gray-800 rounded-lg flex flex-col items-center justify-center text-gray-300">
                                    <Map size={20} className="mb-1 text-blue-400"/>
                                    <span className="text-[10px]">المسار</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">لوحة التحكم المركزية</h3>
                </div>

                {/* UX Step 2 */}
                <div className="bg-nova-800/50 rounded-2xl p-6 border border-white/10 flex flex-col items-center">
                     <div className="w-64 h-[450px] bg-gray-900 rounded-[2.5rem] border-4 border-gray-700 overflow-hidden relative shadow-2xl mb-6 transform hover:scale-105 transition-transform">
                         <div className="absolute inset-0 bg-red-900/90 flex flex-col items-center justify-center text-center p-6">
                            <Shield size={64} className="text-white mb-4" />
                            <h4 className="text-2xl font-bold text-white mb-2">تنبيه خطر!</h4>
                            <button className="bg-white text-red-900 px-6 py-3 rounded-full font-bold w-full mb-3">
                                اتصال بالطوارئ SOS
                            </button>
                         </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">نظام الحماية الذكي</h3>
                </div>

                {/* UX Step 3 */}
                <div className="bg-nova-800/50 rounded-2xl p-6 border border-white/10 flex flex-col items-center">
                    <div className="w-64 h-[450px] bg-gray-900 rounded-[2.5rem] border-4 border-gray-700 overflow-hidden relative shadow-2xl mb-6 transform hover:scale-105 transition-transform">
                        <div className="h-full flex flex-col justify-end p-4">
                            <div className="space-y-3 mb-4">
                                <div className="bg-gray-800 p-3 rounded-tr-xl rounded-tl-xl rounded-bl-xl text-xs text-white max-w-[80%] mr-auto">
                                    كيف الجو في الخارج الآن؟
                                </div>
                                <div className="bg-nova-600 p-3 rounded-tr-xl rounded-tl-xl rounded-br-xl text-xs text-white max-w-[80%] ml-auto">
                                    مشمس، درجة الحرارة 25.
                                </div>
                            </div>
                            <div className="h-12 bg-gray-800 rounded-full flex items-center px-4 justify-between border border-white/10">
                                <span className="text-gray-500 text-xs">اكتب لـ Nova AI...</span>
                                <Zap size={16} className="text-nova-500" />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">المساعد الشخصي (Chat)</h3>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Innovation;