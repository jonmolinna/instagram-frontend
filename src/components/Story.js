import React from 'react';

const Story = ({ user }) => {

    return (
        <div>
            <img
                src={user.img}
                alt={user.name}
                className='h-16 w-16 rounded-full object-cover object-center border-2 border-red-400 p-1'
            />
            <p className='truncate w-16'>{user.name}</p>
        </div>
    )
};

export default Story;