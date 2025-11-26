import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find((s) => s.id === Number(id));

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="min-h-screen bg-nova-900 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowRight className="ml-2" size={20} />
          العودة للخدمات
        </Link>

        {/* Header */}
        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-nova-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`p-6 rounded-2xl ${
                  service.category === 'Tech' ? 'bg-purple-500/20 text-purple-400' :
                  service.category === 'Health' ? 'bg-red-500/20 text-red-400' :
                  service.category === 'Lifestyle' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                    <service.icon size={48} />
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{service.title}</h1>
                    <p className="text-xl text-gray-300">{service.description}</p>
                </div>
            </div>
        </div>

        {/* How to use section */}
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Zap className="text-nova-accent" />
                    كيف تستخدم هذه الخدمة معنا؟
                </h2>
                
                <div className="relative border-r-2 border-white/10 mr-4 space-y-12">
                    {service.steps?.map((step, index) => (
                        <div key={index} className="relative pr-8">
                            <div className="absolute -right-[9px] top-0 w-4 h-4 rounded-full bg-nova-500 ring-4 ring-nova-900"></div>
                            <h3 className="text-lg font-bold text-white mb-2">الخطوة {index + 1}</h3>
                            <p className="text-gray-400 leading-relaxed">{step}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Differentiator Side Card */}
            <div className="md:col-span-1">
                <div className="bg-gradient-to-br from-nova-800 to-nova-900 border border-nova-500/30 rounded-2xl p-6 sticky top-28">
                    <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-4">
                        لماذا Nova مختلفة؟
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {service.differentiator}
                    </p>
                    <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                        <CheckCircle size={16} />
                        <span>مدعوم بالذكاء الاصطناعي</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;