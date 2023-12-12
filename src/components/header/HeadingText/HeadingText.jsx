import React from 'react';

const HeadingText = ({ heading, subheading, styles }) => {
    return (
        <article className={`text-center ${styles ?? ''}`}>
            <h1 className='my-5 md:text-5xl text-2xl font-bold text-dark/90'>{heading}</h1>
            <h1 className='text-base mt-3 text-dark/90'>{subheading}</h1>
        </article>
    );
};

export default HeadingText;