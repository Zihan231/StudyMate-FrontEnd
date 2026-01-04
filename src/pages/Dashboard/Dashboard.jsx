// src/pages/Dashboard/Dashboard.jsx
import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import { FaBookOpen, FaUser, FaPlus, FaUsers, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "../../contexts/Auth/AuthContext/AuthContext";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const handleLogout = () => {
        console.log("logout");
    };

    return (
        <main className="min-h-[calc(100vh-4rem)] bg-base-100">
            <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* LEFT SIDEBAR */}
                    <aside className="lg:col-span-4 xl:col-span-3">
                        <div className="card border border-base-300 bg-base-100 min-h-[calc(100vh-4rem-3rem)]">
                            <div className="card-body p-4 h-full flex flex-col">
                                {/* Brand */}
                                <NavLink to="/" className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-2xl grid place-items-center text-primary-content bg-gradient-to-br from-primary to-secondary ring-1 ring-base-300 shadow-sm">
                                        <FaBookOpen className="w-5 h-5" />
                                    </div>
                                    <div className="leading-tight">
                                        <div className="font-extrabold text-lg">
                                            Study<span className="text-secondary">Sync</span>
                                        </div>
                                        <div className="text-xs text-base-content/60">Dashboard</div>
                                    </div>
                                </NavLink>

                                <div className="divider my-4 opacity-60" />

                                {/* Menu */}
                                <ul className="menu bg-base-100 rounded-box p-0">
                                    {/* <li>
                                        <NavLink to="/dashboard/profile" className="font-semibold">
                                            <FaUser className="w-4 h-4" />
                                            Profile
                                        </NavLink>
                                    </li> */}

                                    <li>
                                        <NavLink to="/create-partner" className="font-semibold">
                                            <FaPlus className="w-4 h-4" />
                                            Create Profile
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/dashboard/connections" className="font-semibold">
                                            <FaUsers className="w-4 h-4" />
                                            My Connections
                                        </NavLink>
                                    </li>
                                </ul>

                                {/* Bottom user + logout */}
                                <div className="mt-auto pt-4 border-t border-base-300">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar placeholder">
                                            <div className="w-10 h-10 rounded-2xl bg-base-200 border border-base-300 grid place-items-center">
                                                <img src={user ? user.photoURL : ""} alt="User avatar"/>
                                            </div>
                                        </div>
                                        <div className="min-w-0">
                                            <div className="font-extrabold truncate">{user ? user.displayName : "Unknown User"}</div>
                                            <div className="text-xs text-base-content/60">user</div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline btn-error w-full mt-3"
                                        type="button"
                                    >
                                        <FaSignOutAlt className="w-4 h-4" />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* RIGHT CONTENT (nested routes render here) */}
                    <section className="lg:col-span-8 xl:col-span-9">
                        <div className="card border border-base-300 bg-base-100 min-h-[calc(100vh-4rem-3rem)]">
                            <div className="card-body p-6">
                                <Outlet />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
