import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-school-green text-white pt-12 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Col 1 — Logo + Name + Socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-white/95 overflow-hidden border border-white/20 shadow-lg">
                <img src="./assets/Mnukwa_logo.webp" alt="Mnukwa-Makhoba AHS logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="text-base font-bold leading-tight">Mnukwa-Makhoba Agricultural High School</h3>
                <p className="text-sm italic mt-0.5" style={{ color: '#C9A84C' }}>"Let There Be Production"</p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61558MNUKWA" target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5" size={16} />
                <span>Makhoba A/A, Matatiele, Eastern Cape, 4730</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>076 403 9098 (Principal)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>082 053 0772</span>
              </li>
            </ul>
          </div>

          {/* Col 3 — School Hours */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">School Hours</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex justify-between gap-4"><span>Mon – Thu</span><span className="font-medium">07:30 – 15:30</span></li>
              <li className="flex justify-between gap-4"><span>Friday</span><span className="font-medium">07:30 – 13:30</span></li>
              <li className="flex justify-between gap-4"><span>Sat – Sun</span><span className="font-medium">Closed</span></li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: '#C9A84C' }}>2026 Admissions</h4>
              <a href="/admissions" className="text-sm text-white/80 hover:text-white underline">Apply online now</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/60 text-xs">
          <p>© {new Date().getFullYear()} Mnukwa-Makhoba Agricultural High School. All Rights Reserved.</p>
          <p className="mt-1 text-white/40">Est. 1984 · Makhoba A/A, Matatiele, Eastern Cape · Quintile 1 Public School</p>
          <Link to="/admin/login" className="text-white/30 hover:text-white/60 text-xs mt-2 inline-block transition-colors">
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
};
