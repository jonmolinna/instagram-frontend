import React from 'react';
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleBottomCenterIcon, PaperAirplaneIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import Comment from './Comment';

const Post = () => {
    return (
        <div className='bg-white rounded-md border-2 shadow-md'>
            <div className='px-3 py-2 flex justify-between items-center'>
                <div className='flex items-center space-x-2'>
                    <img
                        src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1673448236/instagram/user-10_ycjao4.png"
                        alt=""
                        className='h-12 w-12 rounded-full object-cover object-center'
                    />
                    <p className='text-black font-medium hover:text-gray-500 cursor-pointer'>username</p>
                </div>
                <button>
                    <EllipsisHorizontalIcon className='h-6 w-6' />
                </button>
            </div>
            <div>
                <img
                    src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1673448236/instagram/user-10_ycjao4.png"
                    alt=""
                    className='w-full'
                />
            </div>
            <div className='px-3 py-2 flex items-center justify-between'>
                <div className='space-x-4 flex items-center'>
                    <button>
                        <HeartIcon className='w-7 h-7' />
                    </button>
                    <button>
                        <ChatBubbleBottomCenterIcon className='w-7 h-7' />
                    </button>
                    <button className='-rotate-45'>
                        <PaperAirplaneIcon className='w-7 h-7' />
                    </button>
                </div>
                <button>
                    <BookmarkIcon className='w-7 h-7' />
                </button>
            </div>
            <div className='px-3 py-1'>
                <p className='text-gray-700 font-medium'>9 Me gusta</p>
            </div>
            <div className='px-3 py-1 text-base'>
                <p className='inline-block text-gray-700 font-medium'>username123</p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, unde?
            </div>
            <div className='px-3 pb-2'>
                <div className='max-h-[120px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 space-y-1'>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
            <div className='px-3 py-2 '>
                <div className='text-gray-400 text-md'>hace 1 hora</div>
            </div>
            <div className='border-t-2 px-3 py-2 flex justify-between items-center space-x-2 '>
                <button>
                    <FaceSmileIcon className='w-7 h-7' />
                </button>
                <input
                    type="text"
                    placeholder='Agregar un comentario...'
                    className='w-full border-none outline-none focus:ring-0'
                />
                <button className='text-cyan-500 text-sm font-medium'>
                    Publicar
                </button>
            </div>
        </div>
    )
};

export default Post;