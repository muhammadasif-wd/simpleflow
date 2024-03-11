import React from 'react';
import DashBoardRoute from '../../../shared/DashBoardRoute';

const DashBoardHome = () => {
    return (
        <div className=''>
            <div className='flex'>
                <div className='w-3/12'>
                    <DashBoardRoute />
                </div>
                <div className='mt-32 w-full'>
                    <h2>this is Home page</h2>
                </div>
            </div>
        </div>
    );
};

export default DashBoardHome;