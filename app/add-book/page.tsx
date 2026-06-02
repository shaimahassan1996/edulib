"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBookPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "📚",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // هنضيف الكتاب للقائمة (مؤقتاً)
    const savedBooks = localStorage.getItem("books");
    const books = savedBooks ? JSON.parse(savedBooks) : [];
    
    books.push(formData);
    localStorage.setItem("books", JSON.stringify(books));
    
    alert("✅ تم إضافة الكتاب بنجاح!");
    router.push("/books");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
            📝 إضافة كتاب جديد
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">عنوان الكتاب</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">اسم المؤلف</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">رمز الكتاب (📚 🎨 💻)</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-bold"
            >
              ✨ إضافة الكتاب
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}