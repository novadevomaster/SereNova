import React from 'react';
import { BMC_DATA } from '../constants';
import { Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessModel: React.FC = () => {
  return (
    <div className="min-h-screen bg-nova-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-nova-500/10 text-nova-500 px-4 py-1 rounded-full mb-4 border border-nova-500/20">
            <Layers size={16} />
            <span className="text-sm font-bold uppercase tracking-wider">Business Model Canvas</span>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
            نموذج العمل التجاري
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            مخطط استراتيجي يوضح كيفية إنشاء القيمة، تقديمها، والتقاطها في مشروع Nova Travel Ecosystem.
          </p>
          <div className="mt-6">
              <Link to="/business" className="text-sm text-nova-accent hover:text-white underline decoration-dashed underline-offset-4">
                  اذهب إلى الدراسة المالية للأرقام التفصيلية &larr;
              </Link>
          </div>
        </div>

        {/* The Grid Canvas */}
        <div className="bmc-grid-container gap-4">
            {BMC_DATA.map((section) => (
                <div 
                    key={section.id} 
                    className={`bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 flex flex-col ${section.gridArea}`}
                    style={{ gridArea: section.gridArea }}
                >
                    <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                        <section.icon className={`${section.color}`} size={24} />
                        <h2 className="text-lg font-bold text-white">{section.title}</h2>
                    </div>
                    
                    <ul className="space-y-3 flex-grow">
                        {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${section.color.replace('text', 'bg')}`}></span>
                                <span className="leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* CSS Grid Layout for BMC */}
        <style>{`
            .bmc-grid-container {
                display: flex;
                flex-direction: column;
            }

            @media (min-width: 1024px) {
                .bmc-grid-container {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    grid-template-rows: repeat(3, minmax(250px, auto));
                    grid-template-areas: 
                        "kp ka vp cr cs"
                        "kp kr vp ch cs"
                        "c  c  c  r  r";
                }
                
                /* Specific Overrides for BMC Structure */
                .vp { grid-area: vp; background: rgba(99, 102, 241, 0.05); border-color: rgba(99, 102, 241, 0.2); } /* Center Value Prop gets highlight */
            }
        `}</style>

      </div>
    </div>
  );
};

export default BusinessModel;