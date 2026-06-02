"use client";

import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const defaultBooks = [
  { title: "أساسيات البرمجة", author: "أحمد محمد", image: "💻" },
  { title: "تعلم React", author: "سارة أحمد", image: "⚛️" },
  { title: "Next.js للمبتدئين", author: "محمد علي", image: "🚀" },
  { title: "تصميم واجهات المستخدم", author: "نورا خالد", image: "🎨" },
  { title: "قواعد البيانات", author: "خالد عبدالله", image: "🗄️" },
  { title: "الأمن السيبراني", author: "منى إبراهيم", image: "🔒" },
];

export default function BooksPage() {
  const [books, setBooks] = useState(defaultBooks);

  useEffect(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks) {
      const allBooks = [...defaultBooks, ...JSON.parse(savedBooks)];
      setBooks(allBooks);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            📚 جميع الكتب
          </h1>
          <p className="text-xl text-gray-600">
            اكتشف مجموعة مميزة من الكتب التعليمية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </main>
  );
}