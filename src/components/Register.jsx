import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', { name, email, password, password_confirmation })
                .then(response => {
                    sessionStorage.setItem("token", response.data.token);
                    setEmail("")
                    setPassword("")
                    navigate("/home")
                })
        } catch (error) {
            if (error.response.status === 422) {
                setErrors(error.response.data.errors || {})
            }
        }
    }


    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px] ">
                            <div className="mb-10 text-center md:mb-16">
                                Registro
                            </div>
                            <form onSubmit={handleRegister}>
                                <div className="mb-4">
                                    <input type="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nombre"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    {errors.name && (
                                        <div className="flex">
                                            <span className="text-red-400 text-sm m-2 p-2">{errors.name[0]}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <input type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Correo Electrónico"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    {errors.email && (
                                        <div className="flex">
                                            <span className="text-red-400 text-sm m-2 p-2">{errors.email[0]}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <input type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Contraseña"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    {errors.password && (
                                        <div className="flex">
                                            <span className="text-red-400 text-sm m-2 p-2">{errors.password[0]}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <input type="password"
                                        value={password_confirmation}
                                        onChange={(e) => setPassword_confirmation(e.target.value)}
                                        placeholder="Confirmación de Contraseña"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    {errors.password && (
                                        <div className="flex">
                                            <span className="text-red-400 text-sm m-2 p-2">{errors.password[0]}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-10">
                                    <button type="submit" className="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white">
                                        Registrarse
                                    </button>
                                </div>
                            </form>
                            {/* <Link
                                to="/forgot-password"
                                className="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link> */}
                            <p className="text-base text-[#adadad]">
                                Ya posee cuenta?.
                                <Link
                                    to="/Login"
                                    className="text-primary hover:underline ml-2"
                                >
                                    Inicie sesión
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;