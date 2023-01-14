import React from 'react';

const Comment = () => {
    return (
        <div className='flex flex-col'>
            <div className='text-gray-500'>
                <p className='text-black font-medium inline-block mr-1'>Username</p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, nisi! Lorem, ipsum dolor. Jojojo
            </div>
            <div className='text-xs text-gray-400'>hace 2 horas</div>
        </div>
    )
}

export default Comment;