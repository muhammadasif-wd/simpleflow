import React from 'react';

const ServiceCard = () => {
    return (
        <div className='flex justify-center gap-7'>
            {/* first card (always active) */}
            <div className='bg-[#07075d] w-80 h-80 border-solid border-2 border-lightSecondary text-white'>
                <div className='text-center'>
                    <div>
                            <img src="" alt="" />
                        <h1>Design</h1>
                        <p> dolor sit amet consectetur adipisicing <br /> elit. Nostrum?
                        </p>
                        <p></p>
                    </div>
                </div>
            </div>
            {/* second card (active on hover) */}
            <div className='hover:bg-primaryColor  w-80 h-80 border-solid border-2 border-lightSecondary hover:text-white'>
                <h2>hallo</h2>
            </div>
            {/* third card (active on hover) */}
            <div className='hover:bg-primaryColor  w-80 h-80 border-solid border-2 border-lightSecondary hover:text-white'>
                <h2>hallo</h2>

            </div>
        </div>
    );
};

export default ServiceCard;
