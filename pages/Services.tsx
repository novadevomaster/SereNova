import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-nova-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-nova-accent font-semibold tracking-wide uppercase mb-2">الخدمات الشاملة</h2>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            كل ما تحتاجه في منصة واحدة
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            من حجز الطيران وحتى العناية بصحتك، Nova يغطي كل جوانب حياتك ورحلتك.
          </p>
          
          {/* Featured X2 Trip Banner */}
          <Link to="/x2-trip" className="mt-8 inline-block w-full max-w-3xl mx-auto bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-nova-accent/30 rounded-2xl p-6 hover:scale-[1.02] transition-transform cursor-pointer group">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-nova-accent/20 p-3 rounded-full text-nova-accent">
                        <Sparkles size={24} />
                    </div>
                    <div className="text-right">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                             جديد: تقنية X2 Trip
                             <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">HOT</span>
                        </h3>
                        <p className="text-gray-300 text-sm">سافر لوجهتين في وقت واحد.. جرب الكبسولة الذكية الآن.</p>
                    </div>
                </div>
                <ArrowLeft className="text-white group-hover:-translate-x-2 transition-transform" />
             </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="group relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer block page-break">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={100} className="text-white" />
              </div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  service.category === 'Tech' ? 'bg-purple-500/20 text-purple-400' :
                  service.category === 'Health' ? 'bg-red-500/20 text-red-400' :
                  service.category === 'Lifestyle' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  <service.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-nova-accent transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 h-10">{service.description}</p>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-nova-accent font-semibold mb-1">التميز في Nova:</p>
                  <p className="text-sm text-gray-300">{service.differentiator}</p>
                </div>

                <div className="mt-4 flex justify-end">
                    <span className="text-xs text-nova-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                        كيف تعمل الخدمة؟ <ArrowLeft size={14} />
                    </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;