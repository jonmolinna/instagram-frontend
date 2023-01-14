import React from 'react';
import Post from '../components/Post';
import Story from '../components/Story';
import historiesData from '../utils/UsersData';

const Feed = () => {
    return (
        <div className='bg-gray-200'>
            <div className='max-w-lg mx-auto mt-10'>
                <div className='space-y-7'>
                    <div className='bg-white rounded-md border-2 shadow-md px-3 py-2'>
                        <div className='flex items-center space-x-2 py-2 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400'>
                            {
                                historiesData && historiesData.map(user => (
                                    <Story key={user.id} user={user} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className=' flex flex-col space-y-4'>
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Feed;