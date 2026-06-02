export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
            📖 عن مكتبة EduLib
          </h1>
          
          <div className="space-y-4 text-gray-700 text-right">
            <p>
              EduLib هي منصة تعليمية مبتكرة تهدف إلى تسهيل الوصول إلى المعرفة 
              للجميع في الوطن العربي.
            </p>
            
            <p>
              نقدم مجموعة متنوعة من الكتب والمصادر التعليمية في مجالات:
            </p>
            
            <ul className="list-disc list-inside pr-4 space-y-2">
              <li>💻 البرمجة وتطوير الويب</li>
              <li>⚛️ تطوير التطبيقات الحديثة</li>
              <li>🗄️ قواعد البيانات والذكاء الاصطناعي</li>
              <li>🔒 الأمن السيبراني</li>
              <li>🎨 تصميم واجهات المستخدم</li>
            </ul>
            
            <p className="pt-4">
              نسعى دائماً لتقديم محتوى عالي الجودة يساعد الطلاب والمطورين 
              على تطوير مهاراتهم وتحقيق أهدافهم التعليمية.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}