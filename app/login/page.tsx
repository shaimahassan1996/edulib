"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const users = [
    { username: "نجاه خلف يونان غطاس", password: "123" },
    { username: "كرستين اسامة عادل رسمي", password: "123" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("loggedInUser", username);
      router.push("/");
    } else {
      setError("❌ اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-800">🔐 تسجيل الدخول</h1>
          <p className="text-gray-600">منصة EduLib التعليمية</p>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="اسم المستخدم"
            className="w-full p-3 border rounded-lg mb-4 text-right"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            className="w-full p-3 border rounded-lg mb-4 text-right"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700">
            دخول 📚
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>✏️ للطالبتين:</p>
          <p>نجاه خلف يونان غطاس</p>
          <p>كرستين اسامة عادل رسمي</p>
          <p>🔑 كلمة المرور: 123</p>
        </div>
      </div>
    </main>
  );
}