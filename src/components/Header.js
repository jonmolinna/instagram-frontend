import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <div className='bg-white border-b-2 shadow-sm  sticky top-0 z-50'>
            <div className='max-w-5xl mx-auto'>
                <div className='flex justify-between items-center py-3 mx-3 md:mx-0'>
                    <div className='flex items-center'>
                        <div className='hidden md:block'>
                            <img
                                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1673385907/instagram/Instagram_logo.svg_dnpkui.png"
                                alt=""
                                className='w-24'
                            />
                        </div>
                        <div className='block md:hidden'>
                            <img
                                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1673385907/instagram/insta-logo_ni1f9b.png"
                                alt=""
                                className='w-9'
                            />
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='relative bg-gray-100 w-72'>
                            <input
                                type="text"
                                placeholder='Buscar'
                                className='block w-full rounded-md border-gray-300 pr-7 bg-inherit focus:border-gray-500 focus:ring-gray-500'
                            />
                            <div className='absolute inset-y-0 right-2 flex items-center'>
                                <MagnifyingGlassIcon className='h-4 w-4 text-gray-500' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <p className='bg-cyan-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-cyan-600'>
                                Iniciar Sesión
                            </p>
                            <p className='text-cyan-500 cursor-pointer hover:text-cyan-700'>
                                Registrarte
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header