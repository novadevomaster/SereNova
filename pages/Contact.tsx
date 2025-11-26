import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Code, ExternalLink, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-nova-900 pt-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">تواصل معنا</h1>
          <p className="text-gray-400">نحن مستعدون لبناء مستقبل السياحة معكم.</p>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {/* Contact Info Side */}
             <div className="space-y-8">
                <div>
                   <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">بيانات الاتصال</h3>
                   <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">الهاتف / واتساب</p>
                                <p className="text-white font-bold font-mono text-lg" dir="ltr">01069312224</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                <Code size={20} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">المطور المسؤول</p>
                                <p className="text-white font-bold">سيد مسعد مطاوع</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">العنوان</p>
                                <p className="text-white">القاهرة الجديدة، مصر</p>
                            </div>
                        </div>
                   </div>
                </div>

                <a 
                   href="https://wa.me/201069312224" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-900/20"
                >
                    <MessageCircle size={24} />
                    تواصل مباشرة عبر واتساب
                </a>
             </div>

             {/* Form Side */}
             <form className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">أرسل رسالة فورية</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">الاسم</label>
                    <input type="text" className="w-full bg-nova-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nova-500 outline-none" placeholder="الاسم الكامل" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">البريد الإلكتروني</label>
                    <input type="email" className="w-full bg-nova-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nova-500 outline-none" placeholder="name@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">الرسالة</label>
                    <textarea rows={3} className="w-full bg-nova-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nova-500 outline-none" placeholder="اكتب رسالتك هنا..."></textarea>
                </div>
                <button type="button" className="w-full bg-nova-500 hover:bg-nova-400 text-white font-bold py-4 rounded-lg transition-colors">
                إرسال الرسالة
                </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Nova Travel Ecosystem. تم التطوير بواسطة <span className="text-nova-500">سيد مسعد مطاوع</span></p>
          <div className="flex space-x-4 space-x-reverse">
            <Facebook className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            <Linkedin className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            <Youtube className="text-gray-400 hover:text-white cursor-pointer" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;