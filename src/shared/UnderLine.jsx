import React from 'react';

const UnderLine = ({ style }) => {
    return (
        <div>
            <div className={`${style ?? 'w-24 h-1.5 my-5'} bg-gradient-to-r from-secondaryColor to-lightSecondary rounded-lg bg-dark`}></div>
        </div>
    );
};

export default UnderLine;