import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/db';
import { Project } from '../types';
import { Trash2, Plus, Upload, Image as ImageIcon, Video, LogOut, Layout } from 'lucide-react';

const CATEGORIES = [
  'صفحة هبوط',
  'إعلان فيديو',
  'سوشيال ميديا',
  'صفحة منتج'
];

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');
  
  // Dashboard State
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: CATEGORIES[0],
    description: '',
    imageUrl: '',
    fullPageUrl: '',
    videoUrl: '',
    size: 'small' as 'small' | 'large' | 'wide'
  });

  useEffect(() => {
    if (isAuthenticated) {
      loadProjects();
    }
  }, [isAuthenticated]);

  const loadProjects = async () => {
    setIsLoading(true);
    const data = await db.getProjects();
    setProjects(data);
    setIsLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(passwordInput)) {
      setError('كلمة المرور غير صحيحة');
    } else {
      setError('');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      await db.deleteProject(id);
      loadProjects();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'imageUrl' | 'fullPageUrl' | 'videoUrl') => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a fake local URL for the demo. In prod, upload to Supabase Storage.
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await db.addProject({
      ...formData,
    });
    setFormData({
      title: '',
      category: CATEGORIES[0],
      description: '',
      imageUrl: '',
      fullPageUrl: '',
      videoUrl: '',
      size: 'small'
    });
    setActiveTab('list');
    loadProjects();
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
              ر
            </div>
            <h1 className="text-2xl font-bold text-brand-dark">لوحة التحكم</h1>
            <p className="text-gray-500">تسجيل دخول المسؤول</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">كلمة المرور</label>
              <input 
                type="password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                placeholder="أدخل كلمة المرور (admin123)"
              />
            </div>
            {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
            <button 
              type="submit" 
              className="w-full py-3 bg-brand-dark text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
            >
              دخول
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD UI ---
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-l border-gray-200 min-h-screen fixed right-0 top-0 z-10 hidden md:block">
        <div className="p-8">
           <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
              ر
            </div>
            <span className="text-lg font-bold text-brand-dark">لوحة الإدارة</span>
          </div>

          <nav className="flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('list')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'list' ? 'bg-brand-orange/10 text-brand-orange' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Layout size={20} />
              كل المشاريع
            </button>
            <button 
               onClick={() => setActiveTab('add')}
               className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'add' ? 'bg-brand-orange/10 text-brand-orange' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Plus size={20} />
              إضافة مشروع
            </button>
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
           <button 
            onClick={logout}
            className="flex items-center gap-2 text-red-500 font-bold px-4 py-2 hover:bg-red-50 rounded-lg w-full transition-colors"
           >
             <LogOut size={18} />
             تسجيل خروج
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:mr-64 p-6 md:p-12">
        <div className="max-w-5xl mx-auto">
          
          <div className="md:hidden flex justify-between items-center mb-8">
             <h1 className="text-2xl font-bold">لوحة التحكم</h1>
             <button onClick={logout} className="text-red-500"><LogOut /></button>
          </div>

          {activeTab === 'list' ? (
            <div className="animate-fade-in">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-black text-brand-dark">المشاريع الحالية</h1>
                <button 
                  onClick={() => setActiveTab('add')}
                  className="bg-brand-orange text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
                >
                  <Plus size={20} />
                  مشروع جديد
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-right p-6 text-gray-500 font-bold text-sm">المشروع</th>
                      <th className="text-right p-6 text-gray-500 font-bold text-sm">التصنيف</th>
                      <th className="text-right p-6 text-gray-500 font-bold text-sm">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {isLoading ? (
                      <tr><td colSpan={3} className="p-8 text-center text-gray-400">جاري التحميل...</td></tr>
                    ) : projects.length === 0 ? (
                      <tr><td colSpan={3} className="p-8 text-center text-gray-400">لا توجد مشاريع حتى الآن.</td></tr>
                    ) : (
                      projects.map(project => (
                        <tr key={project.id} className="hover:bg-gray-50 transition-colors group">
                          <td className="p-6">
                            <div className="flex items-center gap-4">
                              <img src={project.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                              <span className="font-bold text-brand-dark">{project.title}</span>
                            </div>
                          </td>
                          <td className="p-6">
                             <span className="bg-blue-50 text-brand-blue px-3 py-1 rounded-full text-xs font-bold">
                               {project.category}
                             </span>
                          </td>
                          <td className="p-6">
                            <button 
                              onClick={() => handleDelete(project.id)}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="حذف"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in-up max-w-3xl">
              <h1 className="text-3xl font-black text-brand-dark mb-8">إضافة مشروع جديد</h1>
              
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                
                {/* Title */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">عنوان المشروع</label>
                  <input 
                    required
                    type="text" 
                    value={formData.title}
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-brand-blue focus:ring-0 transition-all border-2"
                    placeholder="مثال: حملة نون الرمضانية"
                  />
                </div>

                {/* Category & Size */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">التصنيف</label>
                    <select 
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-brand-blue transition-all border-2 appearance-none"
                    >
                      {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">حجم العرض</label>
                    <select 
                      value={formData.size}
                      onChange={e => setFormData({...formData, size: e.target.value as any})}
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-brand-blue transition-all border-2 appearance-none"
                    >
                      <option value="small">صغير (مربع)</option>
                      <option value="large">كبير (مربع مزدوج)</option>
                      <option value="wide">عريض (مستطيل)</option>
                    </select>
                  </div>
                </div>

                {/* Media Uploads */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Main Image */}
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-brand-blue transition-colors relative bg-gray-50">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={e => handleFileChange(e, 'imageUrl')}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex flex-col items-center gap-3 pointer-events-none">
                            <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center">
                                <ImageIcon size={24} />
                            </div>
                            <span className="font-bold text-gray-500">
                                {formData.imageUrl ? 'تم اختيار الصورة الرئيسية' : 'اسحب الصورة الرئيسية هنا'}
                            </span>
                            {formData.imageUrl && <img src={formData.imageUrl} className="h-20 object-cover rounded-lg mt-2" />}
                        </div>
                    </div>

                    {/* Conditional Uploads based on category */}
                    {formData.category.includes('فيديو') ? (
                         <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-brand-blue transition-colors relative bg-gray-50">
                            <input 
                                type="file" 
                                accept="video/*"
                                onChange={e => handleFileChange(e, 'videoUrl')}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex flex-col items-center gap-2 pointer-events-none">
                                <Video size={20} className="text-gray-400" />
                                <span className="text-sm font-bold text-gray-500">
                                    {formData.videoUrl ? 'تم اختيار الفيديو' : 'رفع ملف الفيديو'}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-brand-blue transition-colors relative bg-gray-50">
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={e => handleFileChange(e, 'fullPageUrl')}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                             <div className="flex flex-col items-center gap-2 pointer-events-none">
                                <Layout size={20} className="text-gray-400" />
                                <span className="text-sm font-bold text-gray-500">
                                    {formData.fullPageUrl ? 'تم اختيار صورة الصفحة الكاملة' : 'رفع صورة الصفحة كاملة (Full Scroll)'}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">وصف المشروع</label>
                  <textarea 
                    rows={4}
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-brand-blue focus:ring-0 transition-all border-2"
                    placeholder="اكتب نبذة مختصرة عن التحدي والنتيجة..."
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="flex gap-4 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setActiveTab('list')}
                    className="flex-1 py-3 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    إلغاء
                  </button>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="flex-[2] py-3 bg-brand-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2"
                  >
                    {isLoading ? 'جاري الحفظ...' : 'نشر المشروع'}
                    <Upload size={20} />
                  </button>
                </div>

              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;