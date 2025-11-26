import React from 'react';
import { ArrowLeft, Globe, Database, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-nova-900">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-20 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-nova-900 via-transparent to-nova-900"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nova-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-nova-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-nova-accent/30 bg-nova-accent/10 backdrop-blur-sm">
            <span className="text-nova-accent text-sm font-bold tracking-widest">NOVA TRAVEL ECOSYSTEM</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            نظام بيئي <span className="text-transparent bg-clip-text bg-gradient-to-r from-nova-accent to-nova-500">متكامل</span> للمستقبل
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            أول منظومة رقمية تدمج السياحة، الذكاء الاصطناعي، وتقنيات الواقع الممتد (XR) في تجربة واحدة متصلة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="px-8 py-4 bg-nova-500 hover:bg-nova-400 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-nova-500/30 flex items-center justify-center gap-2">
              استكشف الخدمات <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link to="/business" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg transition-all">
              عرض الدراسة
            </Link>
          </div>
        </div>
      </div>

      {/* Problem & Solution */}
      <section className="py-24 bg-nova-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">لماذا Nova؟</h2>
            <p className="text-gray-400 text-lg">نحن نحل أكبر المشاكل التي تواجه قطاع السياحة اليوم</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-nova-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 text-red-400">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">تشتت المعلومات</h3>
              <p className="text-gray-400">المستخدم يتنقل بين عشرات التطبيقات للطيران، الفنادق، والخرائط. نحن نجمع كل شيء في مكان واحد.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-nova-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6 text-yellow-400">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">غياب الذكاء</h3>
              <p className="text-gray-400">الأنظمة الحالية صماء. Nova يستخدم AI لفهم المستخدم، تخطيط رحلته، ومتابعة صحته.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-nova-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 text-green-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">تجربة غير آمنة</h3>
              <p className="text-gray-400">السفر بدون حماية. تطبيقنا يوفر نظام Smart Life للحماية الصحية والأمنية والـ SOS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Quick Overview */}
      <section className="py-20 bg-gradient-to-b from-nova-900 to-nova-800 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-nova-accent mb-2">+12</div>
            <div className="text-gray-400">خدمة متكاملة</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-nova-accent mb-2">XR/VR</div>
            <div className="text-gray-400">تجارب بصرية غامرة</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-nova-accent mb-2">AI</div>
            <div className="text-gray-400">مساعد شخصي ذكي</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-nova-accent mb-2">IoT</div>
            <div className="text-gray-400">ربط بالساعة الذكية</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;