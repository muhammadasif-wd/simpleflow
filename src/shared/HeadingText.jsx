import React from 'react';
import Title from './Title';

const HeadingText = ({ heading, subheading, styles }) => {
    return (
        <article className={`text-center text-dark ${styles ?? ''}`}>
            <Title title={heading} styles={'font-bold'} />
            <p className='text-base mt-3'>{subheading}</p>
        </article>
    );
};

export default HeadingText;