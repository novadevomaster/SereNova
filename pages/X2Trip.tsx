import React, { useState, useRef, useEffect } from 'react';
import { Layers, Truck, Wind, Move, Navigation, Cpu, Eye, Info } from 'lucide-react';

const X2Trip: React.FC = () => {
  // 3D Viewer State
  const [rotation, setRotation] = useState({ x: -15, y: 45 });
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
      x: rotation.x - deltaY * 0.5,
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
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-nova-accent/10 text-nova-accent px-6 py-2 rounded-full border border-nova-accent/30 mb-6 animate-pulse">
                <Layers size={20} />
                <span className="font-bold tracking-wider">تقنية X2 TRIP الحصرية</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                رحلتان في <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">وقت واحد</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                لماذا تضيع الوقت في الطريق؟ مع كونتنر Nova X2، جسدك يسافر إلى الأهرامات، وعقلك وحواسك في جولة داخل مكتبة الإسكندرية.
            </p>
        </div>
      </section>

      {/* The 3D Interactive Container Section */}
      <section className="py-12 bg-gradient-to-b from-nova-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12 items-center">
            
            {/* Left: Description */}
            <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-white border-r-4 border-nova-accent pr-4">هيكل الكونتنر الذكي</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    حاوية متنقلة معزولة تماماً عن الخارج. يتم تركيبها على شاسيه شاحنات نقل سياحي خاصة. 
                    الكونتنر مصمم ليصبح "بوابة زمنية ومكانية" مفصولة عن حركة السيارة الفعلية بفضل أنظمة التثبيت الهيدروليكي.
                </p>
                
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Truck size={18}/> الحركة الفيزيائية</h4>
                    <p className="text-xs text-gray-400">السيارة تتحرك بسرعة 100 كم/س تجاه الجيزة.</p>
                </div>
                <div className="bg-nova-500/10 p-4 rounded-xl border border-nova-500/30">
                    <h4 className="text-nova-accent font-bold mb-2 flex items-center gap-2"><Eye size={18}/> الرحلة الافتراضية</h4>
                    <p className="text-xs text-gray-300">أنت تمشي فعلياً داخل قاعات الفاتيكان أو مكتبة الإسكندرية.</p>
                </div>
            </div>

            {/* Center: The 3D Viewer */}
            <div className="lg:col-span-2 h-[500px] relative order-1 lg:order-2 perspective-container cursor-grab active:cursor-grabbing bg-gray-900/50 rounded-3xl border border-white/10 overflow-hidden"
                 onMouseDown={handleMouseDown}
                 onMouseMove={handleMouseMove}
                 onTouchStart={handleMouseDown}
                 onTouchMove={handleMouseMove}
            >
                <div className="absolute top-4 right-4 z-10 bg-black/60 px-3 py-1 rounded-full text-xs text-white flex items-center gap-2 pointer-events-none">
                    <Move size={14} /> حرك الماوس لتدوير الكونتنر 360 درجة
                </div>

                {/* The 3D Cube Scene */}
                <div className="w-full h-full flex items-center justify-center perspective-1000">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 preserve-3d transition-transform duration-75 ease-linear"
                         style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
                        
                        {/* Faces of the Container */}
                        {/* Front - Entrance */}
                        <div className="absolute inset-0 bg-gray-800 border-2 border-nova-500/50 backface-hidden opacity-90 flex items-center justify-center translate-z-40">
                             <div className="text-center">
                                <div className="text-6xl text-white/20 mb-2">NOVA</div>
                                <div className="text-xs text-nova-accent border border-nova-accent px-2 py-1 rounded">B-01 المدخل</div>
                             </div>
                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-30 mix-blend-overlay"></div>
                        </div>

                        {/* Back - Tech Unit */}
                        <div className="absolute inset-0 bg-gray-900 border-2 border-purple-500/50 backface-hidden opacity-90 flex items-center justify-center -translate-z-40 rotate-y-180">
                            <div className="absolute top-2 left-2 w-full h-full p-4">
                                <div className="w-full h-full border-2 border-dashed border-gray-600 rounded flex flex-col items-center justify-center">
                                    <Cpu size={48} className="text-purple-500 mb-2 animate-pulse"/>
                                    <span className="text-white font-bold">وحدة المعالجة المركزية</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Sensors */}
                        <div className="absolute inset-0 bg-gray-800 border-2 border-blue-500/50 backface-hidden opacity-90 flex items-center justify-center rotate-y-90 translate-x-40">
                             <div className="grid grid-cols-2 gap-2 p-4 w-full">
                                <div className="bg-black/50 p-2 rounded text-center"><Wind size={20} className="mx-auto text-blue-400"/></div>
                                <div className="bg-black/50 p-2 rounded text-center"><Navigation size={20} className="mx-auto text-green-400"/></div>
                                <div className="bg-black/50 p-2 rounded text-center text-xs text-white col-span-2">Sensors Array</div>
                             </div>
                        </div>

                        {/* Left - Haptics */}
                        <div className="absolute inset-0 bg-gray-800 border-2 border-blue-500/50 backface-hidden opacity-90 flex items-center justify-center rotate-y-minus-90 translate-x-minus-40">
                             <div className="text-center p-6">
                                <h3 className="text-white font-bold text-xl">عزل صوتي تام</h3>
                                <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2"></div>
                             </div>
                        </div>

                        {/* Top - Roof */}
                        <div className="absolute inset-0 bg-black border-2 border-gray-700 backface-hidden opacity-90 flex items-center justify-center rotate-x-90 translate-y-minus-40">
                            <span className="text-gray-500 font-mono text-sm">NOVA SATELLITE LINK</span>
                        </div>

                        {/* Bottom - Platform */}
                        <div className="absolute inset-0 bg-gray-900 border-2 border-gray-700 backface-hidden opacity-90 flex items-center justify-center rotate-x-minus-90 translate-y-40">
                             <div className="text-center">
                                <Move size={32} className="text-red-500 mx-auto"/>
                                <span className="text-red-500 text-xs">Motion Platform Base</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Equipment Detail Grid */}
      <section className="py-20 px-4 bg-nova-800/30">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">ماذا يوجد داخل الكونتنر؟</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Item 1 */}
                <div className="bg-nova-900 p-6 rounded-2xl border border-white/5 hover:border-nova-500 transition-all group">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Navigation size={32} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">مشاية Omni-Treadmill</h3>
                    <p className="text-gray-400 text-sm">أرضية متحركة 360 درجة تسمح لك بالمشي والجري الفعلي داخل اللعبة دون أن تتحرك من مكانك في الكونتنر.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-nova-900 p-6 rounded-2xl border border-white/5 hover:border-nova-500 transition-all group">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Wind size={32} className="text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">4D Climate Core</h3>
                    <p className="text-gray-400 text-sm">إذا كنت تزور القطب الشمالي افتراضياً، سيقوم الكونتنر بخفض الحرارة وإطلاق رياح باردة لتشعر بالواقعية.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-nova-900 p-6 rounded-2xl border border-white/5 hover:border-nova-500 transition-all group">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Truck size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">نظام عزل الحركة</h3>
                    <p className="text-gray-400 text-sm">قاعدة هيدروليكية تفصل اهتزازات السيارة في الطريق عن حركتك داخل الواقع الافتراضي لمنع الدوار.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-nova-900 p-6 rounded-2xl border border-white/5 hover:border-nova-500 transition-all group">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Info size={32} className="text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">بدلة اللمس Haptics</h3>
                    <p className="text-gray-400 text-sm">سترة وقفازات تنقل لك شعور اللمس، مثل ملمس جدران المعبد أو قطرات المطر الافتراضية.</p>
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
            perspective: 1000px;
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
        .backface-hidden {
            backface-visibility: hidden;
        }
        /* Custom translations to build the cube */
        .translate-z-40 { transform: translateZ(10rem); }
        .-translate-z-40 { transform: translateZ(-10rem); }
        .translate-x-40 { transform: translateX(10rem); }
        .translate-x-minus-40 { transform: translateX(-10rem); }
        .translate-y-40 { transform: translateY(10rem); }
        .translate-y-minus-40 { transform: translateY(-10rem); }
        
        .rotate-y-90 { transform: rotateY(90deg) translateZ(10rem); }
        .rotate-y-minus-90 { transform: rotateY(-90deg) translateZ(10rem); }
        .rotate-y-180 { transform: rotateY(180deg) translateZ(10rem); }
        
        .rotate-x-90 { transform: rotateX(90deg) translateZ(10rem); }
        .rotate-x-minus-90 { transform: rotateX(-90deg) translateZ(10rem); }

        @media (min-width: 768px) {
             .translate-z-40 { transform: translateZ(10rem); } /* 160px half of 320px */
            /* Adjusted for larger screens if cube size changes */
        }
      `}</style>

    </div>
  );
};

export default X2Trip;