"use client";

import { useState, useEffect } from "react";
import BookCard from "./components/BookCard";

const defaultBooks = [
  { title: "أساسيات البرمجة", author: "أحمد محمد", image: "💻" },
  { title: "تعلم React", author: "سارة أحمد", image: "⚛️" },
  { title: "Next.js للمبتدئين", author: "محمد علي", image: "🚀" },
  { title: "تصميم واجهات المستخدم", author: "نورا خالد", image: "🎨" },
];

export default function Home() {
  const [books, setBooks] = useState(defaultBooks);

  useEffect(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
      const allBooks = [...defaultBooks, ...JSON.parse(savedBooks)];
      setBooks(allBooks.slice(0, 4));
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        
        {/* شعار الكلية وأسماء الطالبات والمشرفة */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-xl shadow-lg p-6">
            <img 
              src="/logonew.jpg" 
              alt="شعار الكلية التقنية"
              className="w-32 h-32 mx-auto object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold text-indigo-800 mt-3">
              الكلية التقنية - جامعة المنيا
            </h2>
            <p className="text-lg text-gray-600">
              كلية التربية النوعية - جامعة المنيا
            </p>
            
            <div className="border-t border-gray-200 my-4"></div>
            
            <p className="text-gray-700 font-bold text-xl mt-2">إعداد وتنفيذ:</p>
            <p className="text-gray-800 text-2xl font-bold">نجاه خلف يونان غطاس</p>
            <p className="text-gray-800 text-2xl font-bold">كرستين اسامة عادل رسمي</p>
            
            <div className="border-t border-gray-200 my-3"></div>
            
            <p className="text-gray-700 font-bold text-xl">تحت إشراف:</p>
            <p className="text-indigo-700 font-bold text-2xl">د. زينب محمد أمين</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-800 mb-4">
            📚 مرحباً بك في EduLib
          </h1>
          <p className="text-2xl text-gray-600">
            منصتك التعليمية لإدارة المكتبات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/books" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition text-lg">
            📚 مشاهدة جميع الكتب
          </a>
        </div>
      </div>
    </main>
  );
}