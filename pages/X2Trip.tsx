import React, { useState, useRef } from 'react';
import { Layers, Truck, Wind, Move, Navigation, Cpu, Eye, Info, Box, Activity, Shield } from 'lucide-react';

const X2Trip: React.FC = () => {
  // 3D Viewer State
  const [rotation, setRotation] = useState({ x: -15, y: 35 });
  const [activeModel, setActiveModel] = useState<'container' | 'treadmill' | 'foam'>('container');
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    lastMousePos.current = { x: clientX, y: clientY };
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    const deltaX = clientX - lastMousePos.current.x;
    const deltaY = clientY - lastMousePos.current.y;

    setRotation({
      x: Math.max(-90, Math.min(90, rotation.x - deltaY * 0.5)),
      y: rotation.y + deltaX * 0.5
    });

    lastMousePos.current = { x: clientX, y: clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-nova-900 pt-20 overflow-x-hidden" onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
      
      {/* Header Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-nova-accent/10 text-nova-accent px-6 py-2 rounded-full border border-nova-accent/30 mb-6 animate-pulse">
                <Layers size={20} />
                <span className="font-bold tracking-wider">تقنية X2 TRIP الحصرية</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                رحلتان في <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">وقت واحد</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                استغلال وقت الانتقال الميت. جسدك يسافر إلى الأهرامات، وعقلك في جولة افتراضية كاملة.
            </p>
        </div>
      </section>

      {/* The 3D Interactive Container Section */}
      <section className="py-8 bg-gradient-to-b from-nova-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4">
            
            {/* Control Panel */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button 
                    onClick={() => setActiveModel('container')}
                    className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${activeModel === 'container' ? 'bg-nova-500 text-white shadow-lg shadow-nova-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                >
                    <Box size={20} /> هيكل الكونتنر (خارجي)
                </button>
                <button 
                    onClick={() => setActiveModel('treadmill')}
                    className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${activeModel === 'treadmill' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                >
                    <Activity size={20} /> المشاية الذكية (داخلي)
                </button>
                <button 
                    onClick={() => setActiveModel('foam')}
                    className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${activeModel === 'foam' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                >
                    <Shield size={20} /> العزل والحماية
                </button>
            </div>

            {/* 3D Viewer Canvas */}
            <div className="w-full h-[500px] relative perspective-container cursor-grab active:cursor-grabbing bg-gray-900/50 rounded-3xl border border-white/10 overflow-hidden"
                 onMouseDown={handleMouseDown}
                 onMouseMove={handleMouseMove}
                 onTouchStart={handleMouseDown}
                 onTouchMove={handleMouseMove}
            >
                <div className="absolute top-4 right-4 z-10 bg-black/60 px-3 py-1 rounded-full text-xs text-white flex items-center gap-2 pointer-events-none">
                    <Move size={14} /> حرك الماوس لتدوير المجسم 360 درجة
                </div>
                
                {/* 3D Scene */}
                <div className="w-full h-full flex items-center justify-center perspective-1000">
                    <div className="relative preserve-3d transition-transform duration-75 ease-linear"
                         style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
                        
                        {/* ---------------- CONTAINER MODEL ---------------- */}
                        {activeModel === 'container' && (
                            <div className="relative preserve-3d">
                                {/* Long Box Dimensions: 300px width, 100px height, 100px depth */}
                                {/* Front */}
                                <div className="absolute w-[300px] h-[120px] bg-gradient-to-br from-green-800 to-green-900 border border-green-600 flex items-center justify-center backface-hidden" style={{ transform: 'translateZ(60px)' }}>
                                    <div className="text-white/20 font-black text-4xl tracking-widest">NOVA CONTAINER</div>
                                    <div className="absolute bottom-2 left-2 text-[8px] text-white border border-white px-1">20' STD</div>
                                    {/* Door Details */}
                                    <div className="absolute right-4 top-0 bottom-0 w-1 bg-black/30"></div>
                                    <div className="absolute right-8 top-0 bottom-0 w-1 bg-black/30"></div>
                                    <div className="absolute right-6 top-1/2 w-4 h-2 bg-gray-300 rounded"></div>
                                </div>
                                {/* Back */}
                                <div className="absolute w-[300px] h-[120px] bg-green-900 border border-green-700 backface-hidden" style={{ transform: 'rotateY(180deg) translateZ(60px)' }}></div>
                                {/* Right */}
                                <div className="absolute w-[120px] h-[120px] bg-green-800 border border-green-600 backface-hidden flex items-center justify-center" style={{ transform: 'rotateY(90deg) translateZ(150px)' }}>
                                    <div className="border-4 border-dashed border-yellow-500/50 w-20 h-20 rounded-full flex items-center justify-center">
                                        <Wind size={24} className="text-white/50" />
                                    </div>
                                </div>
                                {/* Left */}
                                <div className="absolute w-[120px] h-[120px] bg-green-800 border border-green-600 backface-hidden flex items-center justify-center" style={{ transform: 'rotateY(-90deg) translateZ(150px)' }}>
                                    <div className="w-16 h-24 bg-black/40 border border-gray-500"></div> {/* Door */}
                                </div>
                                {/* Top */}
                                <div className="absolute w-[300px] h-[120px] bg-green-700 border border-green-500 backface-hidden" style={{ transform: 'rotateX(90deg) translateZ(60px)' }}>
                                    <div className="w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_19px,#00000020_20px)]"></div>
                                </div>
                                {/* Bottom */}
                                <div className="absolute w-[300px] h-[120px] bg-black border border-gray-800 backface-hidden" style={{ transform: 'rotateX(-90deg) translateZ(60px)' }}></div>
                            </div>
                        )}

                        {/* ---------------- TREADMILL MODEL ---------------- */}
                        {activeModel === 'treadmill' && (
                            <div className="relative preserve-3d">
                                {/* Base */}
                                <div className="absolute w-[200px] h-[300px] bg-gray-800 border border-gray-600 backface-hidden" style={{ transform: 'rotateX(90deg) translateZ(0px)' }}>
                                    {/* Belt */}
                                    <div className="absolute inset-4 bg-black border border-gray-700 flex flex-col gap-2 overflow-hidden opacity-80">
                                        <div className="w-full h-1 bg-gray-800"></div>
                                        <div className="w-full h-1 bg-gray-800"></div>
                                        <div className="w-full h-1 bg-gray-800"></div>
                                        <div className="w-full h-1 bg-gray-800"></div>
                                        <div className="w-full h-1 bg-gray-800"></div>
                                        <div className="w-full h-1 bg-gray-800"></div>
                                        <div className="w-full h-1 bg-gray-800"></div>
                                    </div>
                                </div>
                                {/* Front Console Post Left */}
                                <div className="absolute w-[10px] h-[150px] bg-gray-700 backface-hidden" style={{ transform: 'translateZ(95px) translateX(-90px) translateY(-75px)' }}></div>
                                <div className="absolute w-[10px] h-[150px] bg-gray-700 backface-hidden" style={{ transform: 'rotateY(90deg) translateZ(90px) translateX(95px) translateY(-75px)' }}></div>
                                {/* Front Console Post Right */}
                                <div className="absolute w-[10px] h-[150px] bg-gray-700 backface-hidden" style={{ transform: 'translateZ(95px) translateX(90px) translateY(-75px)' }}></div>
                                <div className="absolute w-[10px] h-[150px] bg-gray-700 backface-hidden" style={{ transform: 'rotateY(90deg) translateZ(-90px) translateX(95px) translateY(-75px)' }}></div>
                                
                                {/* Console Screen */}
                                <div className="absolute w-[200px] h-[80px] bg-gray-900 border-2 border-blue-500 backface-hidden flex items-center justify-center" style={{ transform: 'translateZ(100px) translateY(-150px) rotateX(-20deg)' }}>
                                    <div className="bg-blue-900/50 w-[90%] h-[80%] flex items-center justify-center">
                                        <span className="text-blue-300 text-xs animate-pulse">Running Simulation...</span>
                                    </div>
                                </div>
                                <div className="absolute w-[200px] h-[80px] bg-gray-800 backface-hidden" style={{ transform: 'translateZ(95px) translateY(-150px) rotateX(-20deg) rotateY(180deg)' }}></div>
                            </div>
                        )}

                        {/* ---------------- FOAM MODEL ---------------- */}
                        {activeModel === 'foam' && (
                            <div className="relative preserve-3d">
                                {/* Wall Panel */}
                                <div className="absolute w-[200px] h-[200px] bg-gray-900 backface-hidden" style={{ transform: 'translateZ(10px)' }}>
                                    {/* Pyramids Grid using CSS Gradients to simulate depth */}
                                    <div className="w-full h-full grid grid-cols-6 grid-rows-6">
                                        {[...Array(36)].map((_, i) => (
                                            <div key={i} className="bg-gray-800 border border-black transform scale-75 shadow-inner">
                                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-black rounded-sm"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Thickness */}
                                <div className="absolute w-[200px] h-[20px] bg-gray-800 backface-hidden" style={{ transform: 'rotateX(90deg) translateZ(10px)' }}></div>
                                <div className="absolute w-[20px] h-[200px] bg-gray-800 backface-hidden" style={{ transform: 'rotateY(90deg) translateZ(190px)' }}></div>
                                {/* Backing */}
                                <div className="absolute w-[200px] h-[200px] bg-black backface-hidden" style={{ transform: 'rotateY(180deg) translateZ(10px)' }}>
                                    <div className="flex items-center justify-center h-full">
                                        <span className="text-gray-600 font-bold rotate-180">ISO LAYER</span>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">
                * نماذج ثلاثية الأبعاد تفاعلية تحاكي المكونات الحقيقية (حرك الماوس للمشاهدة)
            </p>
        </div>
      </section>

      {/* Image Gallery & Specs */}
      <section className="py-20 px-4 bg-nova-800/30">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">التفاصيل الفنية والتجهيزات</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                {/* 1. Container Specs */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group hover:border-nova-500 transition-all">
                    <div className="aspect-video bg-black rounded-xl mb-4 overflow-hidden relative">
                         {/* Placeholder for Container Image */}
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-500"></div>
                         <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">20ft Standard</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">الكونتنر القياسي</h3>
                    <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                        <li>الطول: 6.06 متر (20 قدم)</li>
                        <li>العرض: 2.44 متر</li>
                        <li>الارتفاع: 2.59 متر</li>
                        <li>المساحة الداخلية: ~14 متر مربع</li>
                    </ul>
                </div>

                {/* 2. Treadmill Specs */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group hover:border-blue-500 transition-all">
                    <div className="aspect-video bg-black rounded-xl mb-4 overflow-hidden relative">
                         {/* Placeholder for Treadmill Image */}
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-500"></div>
                         <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">Omni-Directional</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">المشاية الذكية</h3>
                    <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                        <li>حركة 360 درجة حرة</li>
                        <li>مستشعرات ضغط للقدم</li>
                        <li>حزام أمان معلق للحماية من السقوط</li>
                        <li>شاشة تحكم لوحية مدمجة</li>
                    </ul>
                </div>

                {/* 3. Foam Specs */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group hover:border-purple-500 transition-all">
                    <div className="aspect-video bg-black rounded-xl mb-4 overflow-hidden relative">
                         {/* Placeholder for Foam Image */}
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519671609187-5735c34586d3?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-500"></div>
                         <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">Acoustic Foam</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">العزل الصوتي</h3>
                    <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                        <li>ألواح فوم هرمية لامتصاص الصدى</li>
                        <li>عزل ضوضاء الطريق الخارجية</li>
                        <li>تبطين كامل للجدران والسقف</li>
                        <li>لون فحمي داكن لتقليل انعكاس الضوء</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Visual Scenario */}
      <section className="py-20 px-4">
         <div className="max-w-5xl mx-auto bg-white/5 rounded-3xl overflow-hidden border border-white/10">
            <div className="grid md:grid-cols-2">
                <div className="p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-white mb-6">السيناريو العملي</h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-nova-500 flex items-center justify-center font-bold text-white">1</div>
                                <div className="h-full w-0.5 bg-white/10 mt-2"></div>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">الساعة 9:00 ص</h4>
                                <p className="text-gray-400 text-sm">تركب سيارة Nova الخاصة المتجهة للأهرامات.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-nova-accent flex items-center justify-center font-bold text-nova-900">2</div>
                                <div className="h-full w-0.5 bg-white/10 mt-2"></div>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">الساعة 9:15 ص (الطريق)</h4>
                                <p className="text-gray-400 text-sm">أثناء الطريق، تدخل الكونتنر وتلبس المعدات. تختار "مكتبة الإسكندرية".</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">3</div>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">الساعة 10:00 ص (الوصول)</h4>
                                <p className="text-gray-400 text-sm">تصل للأهرامات جسدياً، وتكون قد انتهيت من جولة كاملة في الإسكندرية ذهنياً.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="bg-[url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center min-h-[400px] relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-nova-900 via-transparent to-transparent"></div>
                     <div className="absolute bottom-6 right-6">
                        <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">Live Demo</span>
                     </div>
                </div>
            </div>
         </div>
      </section>

      {/* Styles for 3D Cube */}
      <style>{`
        .perspective-container {
            perspective: 1200px;
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
        .backface-hidden {
            backface-visibility: hidden; /* Or visible if we want to see insides of single planes */
        }
      `}</style>

    </div>
  );
};

export default X2Trip;