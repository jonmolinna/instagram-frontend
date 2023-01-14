import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-gray-200'>
            <div className='flex min-h-screen justify-center py-[15vh] px-4'>
                <div className='w-full max-w-md'>
                    <div className='bg-white px-5 py-7 rounded-md border shadow-md space-y-5'>
                        <div className='w-full flex justify-center'>
                            <img
                                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1673385907/instagram/Instagram_logo.svg_dnpkui.png"
                                alt=""
                                className='w-28 object-cover object-center'
                            />
                        </div>
                        <div>
                            <form className='space-y-3'>
                                <input
                                    type="text"
                                    placeholder='Usuario'
                                    className='w-full bg-gray-100 focus:ring-gray-300 rounded-md'
                                />
                                <input
                                    type="password"
                                    placeholder='Contraseña'
                                    className='w-full bg-gray-100 focus:ring-gray-300 rounded-md'
                                />
                                <button className='bg-blue-500 w-full py-2 text-white rounded-md hover:bg-blue-400'>
                                    Iniciar sesión
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='bg-white px-5 py-5 rounded-md border shadow-md mt-7'>
                        <div className='flex items-center justify-center'>
                            <p>¿No tienes una cuenta?</p>
                            <Link
                                to='/register'
                                className='inline-block ml-1 text-blue-500'
                            >
                                Regístrate
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
};

export default Login;