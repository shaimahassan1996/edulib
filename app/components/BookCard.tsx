"use client";

import Link from "next/link";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
}

export default function BookCard({ title, author, image }: BookCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-indigo-100 flex items-center justify-center">
        <span className="text-6xl">{image}</span>
      </div>
      <div className="p-4 text-right">
        <h3 className="text-xl font-bold text-indigo-800 mb-2">{title}</h3>
        <p className="text-gray-600">✍️ {author}</p>
        <Link href={`/book/${encodeURIComponent(title)}`}>
          <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            📖 تفاصيل الكتاب
          </button>
        </Link>
      </div>
    </div>
  );
}