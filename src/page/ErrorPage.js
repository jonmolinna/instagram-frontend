import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div>
            <div className='bg-gray-200'>
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='text-center'>
                        <div className='text-center space-y-2'>
                            <h3 className='text-3xl font-medium text-gray-900'>Oops!</h3>
                            <p className='text-gray-500'>Lo sentimos, se ha producido un error inesperado.</p>
                        </div>
                        <div>
                            <Link
                                to="/"
                                className='text-center mt-2 inline-block bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-cyan-700'
                            >
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ErrorPage;