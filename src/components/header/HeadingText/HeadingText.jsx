import React from 'react';

const HeadingText = ({heading, subheading}) => {
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold uppercase'>{heading}</h1>
            <h1 className='text-sm '>{subheading}</h1>
        </div>
    );
};

export default HeadingText;