import React from "react";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16 bg-base-100">
      <div className="max-w-2xl w-full text-center">
        
        {/* Illustration */}
        <div className="mx-auto mb-6 w-40 h-40 md:w-48 md:h-48 text-base-content/70">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#g1)" />
            <path
              d="M70 85h-8a8 8 0 0 0-8 8v44a8 8 0 0 0 8 8h8m68-60h8a8 8 0 0 1 8 8v44a8 8 0 0 1-8 8h-8"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity=".35"
            />
            <circle cx="77" cy="118" r="6" fill="currentColor" />
            <circle cx="123" cy="118" r="6" fill="currentColor" />
            <path d="M87 136q13 10 26 0" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Big 404 */}
        <p className="text-6xl md:text-7xl font-black tracking-tight">
          <span className="text-base-content/30">4</span>
          <span className="text-primary">0</span>
          <span className="text-base-content/30">4</span>
        </p>

        {/* Title + message */}
        <h1 className="mt-2 text-2xl md:text-3xl font-extrabold">Page not found</h1>
        <p className="mt-2 text-base-content/70">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
          <NavLink to="/" className="btn btn-primary">
            Go Home
          </NavLink>
          <NavLink to="/partners" className="btn btn-ghost">
            Find Partners
          </NavLink>
        </div>

        {/* Subtle footer note */}
        <p className="mt-6 text-xs text-base-content/60">
          If you think this is an error, please contact support.
        </p>
      </div>
    </main>
  );
};

export default NotFound;
