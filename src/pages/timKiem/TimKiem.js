import React from 'react';
import Header from '../../Component/timKiem/Header';
import Search from '../../Component/timKiem/Search';

const TimKiem = () => {
    return (
        <div className='container m-auto p-5 bg-gray-50'>
            <div className='w-full'>
                <Search/>
                <Header/>
            </div>
        </div>
    );
};

export default TimKiem;