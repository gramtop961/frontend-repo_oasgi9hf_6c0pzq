import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-sm text-white/60">Made with passion — modern, accessible, and fast.</div>
        </div>
      </div>
    </footer>
  );
}
