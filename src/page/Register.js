import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../gql/user';

const initialForm = {
    name: "",
    email: "",
    password: "",
};

const Register = () => {
    const [form, setForm] = useState(initialForm);

    const [createUser, { loading, error }] = useMutation(REGISTER_USER, {
        variables: form
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
        setForm(initialForm);
    }

    return (
        <div className='bg-gray-200'>
            <div className='flex min-h-screen justify-center py-[15vh] px-4'>
                <div className='w-full max-w-md'>
                    {
                        loading && (
                            <div className='text-center mb-5'>
                                <p className='text-2xl'>Cargando ...</p>
                            </div>
                        )
                    }
                    <div className='bg-white px-5 py-7 rounded-md border shadow-md space-y-5'>
                        <div className='w-full flex justify-center'>
                            <img
                                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1673385907/instagram/Instagram_logo.svg_dnpkui.png"
                                alt=""
                                className='w-28 object-cover object-center'
                            />
                        </div>
                        <div>
                            <form
                                className='space-y-3'
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="text"
                                    placeholder='Nombres'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    className='w-full bg-gray-100 focus:ring-gray-300 rounded-md'
                                />
                                <input
                                    type="email"
                                    placeholder='Correo'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    className='w-full bg-gray-100 focus:ring-gray-300 rounded-md'
                                />
                                <input
                                    type="password"
                                    name='password'
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder='Contraseña'
                                    className='w-full bg-gray-100 focus:ring-gray-300 rounded-md'
                                />
                                <button
                                    disabled={!(form.name && form.email && form.password) || loading}
                                    className='bg-blue-500 w-full py-2 text-white rounded-md disabled:bg-blue-300 hover:bg-blue-400'
                                >
                                    Regístrate
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='bg-white px-5 py-5 rounded-md border shadow-md mt-7'>
                        <div className='flex items-center justify-center'>
                            <p>¿Tienes una cuenta?</p>
                            <Link to='/login' className='inline-block ml-1 text-blue-500'>
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                    {
                        error && (
                            <div className='mt-7'>
                                {
                                    typeof error?.message === 'string' ? (
                                        <div className='text-red-700 text-base font-medium text-center'>
                                            <p>{error?.message}</p>
                                        </div>

                                    ) : (
                                        <div className='text-red-700 text-base font-medium text-center'>
                                            <p>Ocurrio un Error</p>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div >
        </div >
    )
};

export default Register;