"use client";
import Link from "next/link";

export default function FooterPageLayout({ title, children }) {
  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col relative text-gray-800 font-sans">
      {/* Header */}
      <header className="w-full bg-[#303030] py-4 border-b border-gray-800">
        <div className="max-w-[1100px] mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 cursor-pointer no-underline">
            <span className="text-white font-bold text-xl tracking-wide uppercase">EroticMonkey</span>
          </Link>
          <Link href="/" className="text-gray-300 hover:text-white text-sm font-semibold transition-colors duration-200 no-underline">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[900px] w-full mx-auto px-4 py-10">
        <div className="bg-white border border-[#e5e5e5] rounded-md p-6 md:p-10 shadow-sm">
          <h1 className="text-3xl font-extrabold text-gray-900 border-b border-gray-200 pb-4 mb-6">{title}</h1>
          <div className="text-gray-700 leading-relaxed space-y-6 text-sm md:text-base">
            {children}
          </div>
        </div>
      </main>

      {/* Simplified Footer for policy pages */}
      <footer className="w-full max-w-[1100px] mx-auto px-4 py-8 bg-[#f5f5f5] text-gray-500 text-xs border-t border-gray-200 mt-6">
        <div className="text-center text-[10px] leading-relaxed text-gray-400 mb-4 max-w-[900px] mx-auto">
          The contents of this site are registered and fully protected under the United States Copyright Act. No portion of the site may be copied, reproduced, downloaded, transmitted or otherwise used without the prior written consent of X T Solution s.r.o. Willful infringement of copyright may result in the award of statutory damages of up to $100,000 per act of infringement, attorneys fees, seizure and destruction of infringing materials, and injunction against further acts of infringement.
        </div>
        
        <div className="text-center text-xs mb-4 space-x-2 text-gray-500">
          <Link href="/contact" className="hover:underline no-underline">Contact</Link>
          <span>|</span>
          <a href="#" className="hover:underline no-underline">Refund Policy</a>
          <span>|</span>
          <Link href="/complaints-disputes" className="hover:underline no-underline">Complaints & Disputes</Link>
          <span>|</span>
          <Link href="/terms-conditions" className="hover:underline no-underline">Terms & Conditions</Link>
          <span>|</span>
          <a href="#" className="hover:underline no-underline">Law Enforcement Guide</a>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:underline no-underline">Privacy Policy</Link>
        </div>
        
        <div className="text-center text-[11px] text-gray-400 space-y-1">
          <p>&copy; Copyright 2026 EroticMonkey.ch. All rights reserved.</p>
          <p>X T Solution s.r.o. Vlnitá 425/52, PRAHA 4 - BRANÍK, 147 00 PRAHA 47, ID 07953950</p>
        </div>
      </footer>
    </div>
  );
}
