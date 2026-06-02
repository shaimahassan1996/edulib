"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          📚 EduLib
        </Link>

        <div className="flex gap-6 text-gray-700 items-center">
          <Link href="/" className="hover:text-indigo-600 transition">الرئيسية</Link>
          <Link href="/books" className="hover:text-indigo-600 transition">الكتب</Link>
          <Link href="/add-book" className="hover:text-indigo-600 transition text-indigo-600 font-bold">➕ إضافة كتاب</Link>
          <Link href="/about" className="hover:text-indigo-600 transition">عن المكتبة</Link>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md flex items-center gap-2 font-bold text-base"
          >
            🚪 تسجيل خروج
          </button>
        </div>
      </div>
    </nav>
  );
}