import React from 'react';

function NotFound() {
    return (
        <div className='w-screen z-[9999] flex-col bg-slate-200 fixed top-0 h-screen left-0 flex items-center justify-center'>
            <h4 className='text-[40px]'>404</h4>
            <p className='text-center my-2 text-[20px]'>Page not found</p>
        </div>
    );
}

export default NotFound;