import { Link, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {

    return (
        <div className="bg-slate-100 min-h-screen">
            <nav className=" bg-indigo-400 text-white px-2 py-2.5 sm:px-4">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <a href="" className="felx items-center">
                        App
                    </a>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                            <li>
                                <Link
                                    to="/home"
                                    className="block rounded py-2 pr-4 pl-3 text-white"
                                    aria-current="page"
                                >Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/login"
                                    className="block rounded py-2 pr-4 pl-3 text-white"
                                    aria-current="page"
                                >Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/register"
                                    className="block rounded py-2 pr-4 pl-3 text-white"
                                    aria-current="page"
                                >Register
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/logout"
                                    className="block rounded py-2 pr-4 pl-3 text-white"
                                    aria-current="page"
                                >Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto mt-6">
                <Routes>
                    <Route path="/home" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={< Register />} />
                </Routes>
            </div>
        </div>


    )
}
export default App