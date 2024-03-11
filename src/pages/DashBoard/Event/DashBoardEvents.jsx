import React from 'react';
import DashBoardRoute from '../../../shared/DashBoardRoute';

const DashBoardEvents = () => {
    return (
        <div className=''>
            <div className='flex'>
                <div className='w-3/12'>
                    <DashBoardRoute />
                </div>
                <div className='mt-32 w-full'>
                    <h2>this is event page</h2>
                </div>
            </div>
        </div>
    );
};

export default DashBoardEvents;