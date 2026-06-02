"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    console.log("المستخدم المسجل:", user);
    setIsLoggedIn(!!user);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !isLoggedIn && pathname !== "/login") {
      router.push("/login");
    }
  }, [isLoggedIn, loading, pathname, router]);

  if (loading) {
    return (
      <html lang="ar" dir="rtl">
        <body className="font-tajawal flex items-center justify-center min-h-screen">
          <div>جاري التحميل...</div>
        </body>
      </html>
    );
  }

  if (!isLoggedIn && pathname !== "/login") return null;

  return (
    <html lang="ar" dir="rtl">
      <body className="font-tajawal flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}