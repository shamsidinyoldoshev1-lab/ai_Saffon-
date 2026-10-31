import React, { useState, useMemo, useEffect } from 'react';
import { executiveLeadership, managersData, departmentsData } from './departmentsData';

/**
 * OrgChart - Pixel-perfect Tashkiliy Tuzilma (Dashboard Org Chart)
 * Texnologiyalar: React + Tailwind CSS
 */
export default function OrgChart() {
  const [activeManager, setActiveManager] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [zoom, setZoom] = useState(1.0);

  // Ekranga avtomatik moslash
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1320) {
      const fitZoom = Math.min((window.innerWidth - 32) / 1290, 1.0);
      setZoom(Math.max(fitZoom, 0.4));
    }
  }, []);

  const changeZoom = (delta) => {
    setZoom((prev) => Math.min(Math.max(prev + delta, 0.4), 1.6));
  };

  const fitToScreen = () => {
    if (typeof window !== 'undefined') {
      const fitZoom = Math.min((window.innerWidth - 32) / 1290, 1.0);
      setZoom(Math.max(fitZoom, 0.4));
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Filtrlangan departamentlar
  const filteredDepartments = useMemo(() => {
    return departmentsData.map(dept => {
      const matchesManager = !activeManager || dept.managerId === activeManager;

      let matchesSearch = true;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const titleMatch = dept.title.toLowerCase().includes(q);
        const subtitleMatch = dept.subtitle.toLowerCase().includes(q);
        const itemsMatch = dept.items.some(
          it =>
            it.title.toLowerCase().includes(q) ||
            (it.desc && it.desc.toLowerCase().includes(q))
        );
        matchesSearch = titleMatch || subtitleMatch || itemsMatch;
      }

      return {
        ...dept,
        isVisible: matchesManager && matchesSearch
      };
    });
  }, [activeManager, searchQuery]);

  // Boshqaruvchi bo'yicha filtrlash
  const toggleManager = (managerId) => {
    setActiveManager(prev => (prev === managerId ? null : managerId));
  };

  return (
    <div className="min-h-screen bg-[#fbfcfd] text-slate-800 font-sans flex flex-col justify-between selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* ========================================================= */}
      {/* 0. INTERAKTIV BOSHQARUV PANELI (HEADER)                   */}
      {/* ========================================================= */}
      <header className="no-print bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1300px] mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-black text-[11px] shadow-xs">
              AI
            </div>
            <span className="font-bold text-slate-800 tracking-tight">Decision Management AI</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 text-[11px]">
              Tashkiliy Tuzilma (16 ta Departament · 10 Boshqaruvchi · 2 CEO AI)
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Qidiruv inputi */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Qidiruv (xodim, bo'lim, lavozim)..."
                className="pl-7 pr-3 py-1 text-[11px] bg-slate-100 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 w-56 transition-all"
              />
              <svg
                className="w-3.5 h-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filtrni bekor qilish */}
            {activeManager && (
              <button
                onClick={() => setActiveManager(null)}
                className="px-2 py-1 text-[11px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded transition cursor-pointer"
              >
                Filtrni tozalash
              </button>
            )}

            {/* Masshtab (Zoom) Boshqaruvi */}
            <div className="flex items-center bg-slate-100 rounded p-0.5 border border-slate-200">
              <button
                onClick={() => changeZoom(-0.1)}
                className="px-2 py-0.5 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white rounded transition cursor-pointer"
                title="Kichraytirish (Zoom Out)"
              >
                −
              </button>
              <span className="px-1.5 text-[10px] font-semibold text-slate-700 min-w-[38px] text-center select-none">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => changeZoom(0.1)}
                className="px-2 py-0.5 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-white rounded transition cursor-pointer"
                title="Kattalashtirish (Zoom In)"
              >
                +
              </button>
              <button
                onClick={fitToScreen}
                className="ml-1 px-2 py-0.5 text-[10px] font-semibold bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded transition cursor-pointer"
                title="Ekranga to'liq sig'dirish (Auto Fit)"
              >
                Ekranga sig'dirish
              </button>
            </div>

            {/* To'liq ekran */}
            <button
              onClick={toggleFullScreen}
              className="flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded shadow-xs transition cursor-pointer"
              title="To'liq ekran rejimi (F11)"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              To'liq ekran
            </button>

            {/* Chop etish */}
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded shadow-xs transition cursor-pointer"
              title="PDF yoki chop etish"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Chop etish
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* ASOSIY CHART KANVASI (1280px PIXEL-PERFECT)               */}
      {/* ========================================================= */}
      <main className="flex-1 w-full overflow-x-auto py-2.5 px-2 flex justify-center">
        <div 
          style={{ 
            transform: `scale(${zoom})`, 
            transformOrigin: 'top center',
            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)' 
          }}
          className="w-[1280px] shrink-0 flex flex-col items-center"
        >
          
          {/* =================================================== */}
          {/* 1-BOSQICH: ALI - BOSH DIREKTOR (CEO AI)             */}
          {/* =================================================== */}
          <div className="flex flex-col items-center">
            <div 
              style={{ backgroundColor: executiveLeadership.ceo.bgColor }}
              className="text-white rounded px-3.5 py-1 shadow-xs text-center w-[180px] border border-[#232d4b]"
            >
              <h2 className="text-[10px] font-bold tracking-tight">{executiveLeadership.ceo.title}</h2>
              <p className="text-[7.5px] text-slate-300 font-normal leading-tight mt-0.5">
                {executiveLeadership.ceo.desc}
              </p>
            </div>

            {/* Vertikal chiziq 1 -> 2 */}
            <div className="w-[1.5px] h-2.5 bg-[#cbd5e1]"></div>
          </div>

          {/* =================================================== */}
          {/* 2-BOSQICH: SAFFON - IJROCHI SUN'IY INTELLEKT         */}
          {/* =================================================== */}
          <div className="flex flex-col items-center">
            <div 
              style={{ backgroundColor: executiveLeadership.caio.bgColor }}
              className="text-white rounded px-4 py-1 shadow-xs text-center w-[360px] border border-[#856ec0]"
            >
              <div className="flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] inline-block shadow-xs"></span>
                <h3 className="text-[9.5px] font-bold tracking-tight">{executiveLeadership.caio.title}</h3>
              </div>
              <p className="text-[7.5px] text-purple-100 font-normal leading-tight mt-0.5">
                {executiveLeadership.caio.desc}
              </p>
            </div>

            {/* Vertikal chiziq 2 -> Bus Bar */}
            <div className="w-[1.5px] h-2.5 bg-[#cbd5e1]"></div>
          </div>

          {/* =================================================== */}
          {/* 3-BOSQICH: 10 TA ASOSIY BOSHQARUVCHILAR DARAXTI      */}
          {/* =================================================== */}
          <div className="w-[918px] flex flex-col items-center mb-1">
            {/* Gorizontal taqsimlash shinasi (Bus line) */}
            <div className="w-[826px] h-[1.5px] bg-[#cbd5e1] relative">
              <div className="absolute left-1/2 -top-[2px] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-400"></div>
            </div>

            {/* 10 ta Boshqaruvchi tugmasi (918px kenglikda, 10 ustun) */}
            <div className="grid grid-cols-10 gap-x-1.5 w-full">
              {managersData.map((mgr) => {
                const isSelected = activeManager === mgr.id;
                return (
                  <div key={mgr.id} className="flex flex-col items-center">
                    <div className="w-[1.5px] h-2 bg-[#cbd5e1]"></div>
                    <button
                      onClick={() => toggleManager(mgr.id)}
                      style={{ backgroundColor: mgr.bgColor }}
                      className={`w-full hover:brightness-110 transition-all text-white rounded py-1 px-0.5 text-center shadow-xs cursor-pointer select-none ${
                        isSelected ? 'ring-2 ring-slate-900 scale-105' : ''
                      }`}
                      title={`${mgr.name} (${mgr.role})`}
                    >
                      <div className="text-[9px] font-bold leading-tight truncate">{mgr.name}</div>
                      <div className="text-[5.8px] tracking-tight text-white/90 leading-tight truncate mt-0.5 font-medium">
                        {mgr.role}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================== */}
          {/* 4-BOSQICH: 16 TA DEPARTAMENT KARTALARI TO'RI       */}
          {/* 7 TA USTUNLI QATORLAR (PIXEL-PERFECT GRID)          */}
          {/* =================================================== */}
          <div className="grid grid-cols-7 gap-x-1.5 gap-y-1.5 w-[1264px]">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                className={`bg-white rounded border border-gray-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col h-full transition-all duration-200 ${
                  dept.isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-20 scale-[0.98] pointer-events-none'
                }`}
              >
                {/* Karta sarlavhasi (Header) */}
                <div
                  style={{ backgroundColor: dept.headerBg }}
                  className="px-2 py-1 text-white select-none"
                >
                  <div className="text-[9.5px] font-bold leading-tight tracking-tight">{dept.title}</div>
                  <div className="text-[7.5px] text-white/85 font-normal leading-tight mt-0.5">{dept.subtitle}</div>
                </div>

                {/* Karta bandlari ro'yxati (Items list) */}
                <div className="flex-1 divide-y divide-gray-100 bg-white">
                  {dept.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-1.5 py-1 flex items-start space-x-1.5 hover:bg-slate-50/70 transition-colors"
                    >
                      {/* Yashil doira (check) yoki kulrang nuqta (bullet) */}
                      {item.checked ? (
                        <span className="w-3 h-3 rounded-full bg-[#10b981] flex items-center justify-center shrink-0 mt-[1px] text-white shadow-xs">
                          <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      ) : (
                        <span className="w-3 h-3 flex items-center justify-center shrink-0 mt-[0px] text-gray-400 font-bold text-[10px] select-none">
                          •
                        </span>
                      )}

                      {/* Matn qismi */}
                      <div className="flex-1 min-w-0">
                        <div className="text-[9px] font-bold text-slate-800 leading-snug break-words">
                          {item.title}
                        </div>
                        {item.desc && (
                          <div className="text-[7.5px] text-gray-500 leading-tight mt-0.5 break-words [overflow-wrap:anywhere]">
                            {item.desc}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pastki sarlavha (DECISION MANAGEMENT AI) */}
          <div className="w-full text-center py-3 mt-1">
            <span className="text-[8.5px] font-bold tracking-[0.22em] text-slate-400 uppercase select-none">
              DECISION MANAGEMENT AI
            </span>
          </div>

        </div>
      </main>
    </div>
  );
}
