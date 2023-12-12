import React from 'react';

const UnderLine = ({ style }) => {
    return (
        <div>
            <div className={`${style ?? 'w-24 h-[7px] my-5'} bg-gradient-to-r from-[#B43E79] to-[#F7463A] rounded-lg bg-dark`}></div>
        </div>
    );
};

export default UnderLine;