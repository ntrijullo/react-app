import { Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    return (
        <div className="bg-slate-100 min-h-screen">
            {/* Mostrar NAVBAR incluso si no está autenticado */}
            <nav className="bg-indigo-400 text-white px-2 py-2.5 sm:px-4">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <a href="" className="flex items-center">App</a>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                            {isAuthenticated && (
                                <li>
                                    <button
                                        onClick={() => {
                                            sessionStorage.removeItem("token");
                                            setIsAuthenticated(false);
                                            // navigate("/login")
                                            window.location.href = "/login";
                                        }}
                                        className="block rounded py-2 pr-4 pl-3 text-white"
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto mt-6">
                <Routes>
                    <Route path="/home" element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } />
                    <Route path="/login" element={
                        isAuthenticated ? <Navigate to="/home" replace /> : <Login />
                    } />
                    <Route path="/register" element={
                        isAuthenticated ? <Navigate to="/home" replace /> : <Register />
                    } />
                    <Route path="/" element={
                        isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
                    } />
                    {/* Catch all route for undefined routes */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
