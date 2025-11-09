import React, { use, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import ThemeContext from "../../contexts/Theme/themeContext";

/* ---------- Shared styles ---------- */
const linkClasses = ({ isActive }) =>
  [
    "relative px-3 py-2 rounded-lg text-sm font-medium transition",
    "hover:bg-base-200/70 hover:text-base-content",
    // active pill + underline indicator
    isActive
      ? "bg-base-200 text-base-content after:absolute after:left-3 after:right-3 after:-bottom-[3px] after:h-[2px] after:bg-primary after:rounded-full"
      : "text-base-content/70",
  ].join(" ");

/* ---------- Theme Toggle Button ---------- */
const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === "studymate-dark";
  return (
    <button
      aria-label="Toggle theme"
      className="btn btn-ghost btn-sm gap-2"
      onClick={onToggle}
      title={isDark ? "Switch to Light" : "Switch to Dark"}
    >
      {/* Sun / Moon icons */}
      <span className="swap swap-rotate">
        <input type="checkbox" readOnly checked={isDark} />
        {/* Sun */}
        <svg
          className="swap-off"
          xmlns="http://www.w3.org/2000/svg"
          width="18" height="18" viewBox="0 0 24 24" fill="none"
        >
          <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5 5L3.6 3.6M20.4 20.4L19 19M5 19l-1.4 1.4M20.4 3.6L19 5"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
        {/* Moon */}
        <svg
          className="swap-on"
          xmlns="http://www.w3.org/2000/svg"
          width="18" height="18" viewBox="0 0 24 24" fill="none"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="hidden sm:inline text-xs">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
};

const NavBar = () => {
    const { darkMode } = use(ThemeContext);
    console.log(darkMode);
  /* ---------------- Fake auth toggle (UI preview only) ---------------- */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* ---------------- Theme state & persistence ---------------- */
  const getInitialTheme = () => {
    // localStorage > system preference > fallback
    const saved = localStorage.getItem("studymate-theme");
    if (saved === "studymate" || saved === "studymate-dark") return saved;
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "studymate-dark" : "studymate";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("studymate-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "studymate-dark" ? "studymate" : "studymate-dark"));

  /* ---------------- Nav items ---------------- */
  const navItems = useMemo(
    () =>
      isLoggedIn
        ? [
            { to: "/", label: "Home" },
            { to: "/partners", label: "Find Partners" },
            { to: "/create-partner", label: "Create Partner Profile" },
            { to: "/connections", label: "My Connections" },
          ]
        : [
            { to: "/", label: "Home" },
            { to: "/partners", label: "Find Partners" },
            { to: "/login", label: "Login" },
            { to: "/register", label: "Register" },
          ],
    [isLoggedIn]
  );

  /* ---------------- CTA decision ---------------- */
  const cta = isLoggedIn
    ? { to: "/create-partner", label: "Create Profile", className: "btn btn-primary" }
    : { to: "/register", label: "Get Started", className: "btn btn-primary" };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-base-100/80 border-b border-base-300">
      <nav className="navbar max-w-7xl mx-auto px-3 md:px-4">
        {/* Left: Brand */}
        <div className="flex-1">
          <NavLink to="/" className="flex items-center gap-2 group">
            {/* Gradient logo badge */}
            <div className="w-9 h-9 rounded-xl grid place-items-center font-bold text-primary-content
                            bg-gradient-to-br from-primary to-secondary shadow-sm">
              S
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-extrabold tracking-tight">
                StudyMate
              </span>
              <span className="text-[10px] md:text-[11px] text-base-content/60 -mt-0.5">
                Find partners. Learn better.
              </span>
            </div>
          </NavLink>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClasses}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Controls */}
        <div className="flex-none items-center gap-2 hidden sm:flex">
          {/* Theme toggle */}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          {/* Fake auth switcher (dev only) */}
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => setIsLoggedIn((v) => !v)}
            title="Dev Preview: toggle login UI"
          >
            {isLoggedIn ? "Preview: Logged-in" : "Preview: Logged-out"}
          </button>

          {/* Auth area */}
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost px-2">
                <div className="avatar">
                  <div className="w-9 rounded-full ring ring-primary/30 ring-offset-2 ring-offset-base-100">
                    <img src="https://i.ibb.co/jDcv7rF/profile10.jpg" alt="User" />
                  </div>
                </div>
                <span className="ml-2 hidden md:inline text-sm font-medium">
                  Tanvir Rahman
                </span>
                <svg className="ml-1 hidden md:inline-block" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <ul tabIndex={0} className="menu dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-xl w-56">
                <li>
                  <NavLink to="/profile" className={linkClasses}>Profile</NavLink>
                </li>
                <li>
                  <button onClick={() => setIsLoggedIn(false)} className="px-3 py-2 rounded-lg text-left text-error hover:bg-error/10">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-ghost btn-sm">
                Login
              </NavLink>
              <NavLink to={cta.to} className={`${cta.className} btn-sm`}>
                {cta.label}
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile: Right side (hamburger + quick actions) */}
        <div className="sm:hidden flex items-center gap-1">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-xl w-72">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className={linkClasses}>
                    {item.label}
                  </NavLink>
                </li>
              ))}

              <div className="divider my-2" />
              {!isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/login" className="btn btn-ghost justify-start">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={cta.to} className={`${cta.className} justify-start`}>
                      {cta.label}
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/profile" className={linkClasses}>
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={() => setIsLoggedIn(false)} className="px-3 py-2 rounded-lg text-left text-error hover:bg-error/10">
                      Logout
                    </button>
                  </li>
                </>
              )}

              {/* Dev toggle for mobile preview */}
              <div className="divider my-2" />
              <li>
                <button className="btn btn-ghost justify-start" onClick={() => setIsLoggedIn((v) => !v)}>
                  {isLoggedIn ? "Preview: Logged-in" : "Preview: Logged-out"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Subtle bottom border glow for a premium feel */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </header>
  );
};

export default NavBar;
