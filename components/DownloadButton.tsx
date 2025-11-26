import React from 'react';
import { Download, FileText } from 'lucide-react';

const DownloadButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 no-print">
      <button
        onClick={handlePrint}
        className="group flex items-center gap-3 bg-nova-500 hover:bg-nova-400 text-white px-6 py-4 rounded-full shadow-2xl shadow-nova-500/40 transition-all hover:scale-105 border-2 border-white/20"
      >
        <div className="bg-white/20 p-2 rounded-full">
            <Download size={24} />
        </div>
        <div className="text-right hidden group-hover:block transition-all duration-300">
            <span className="block font-bold text-sm">تحميل المشروع</span>
            <span className="block text-[10px] text-white/80">PDF / Presentation</span>
        </div>
      </button>
    </div>
  );
};

export default DownloadButton;