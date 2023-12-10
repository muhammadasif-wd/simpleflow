import React from 'react';

const Service = () => {
    return (
        <div className='my-10 text-warning-500'>
            <div className='bg-[#07085d] relative'>
                <img className='h-[60vh] opacity-30' src="https://i.ibb.co/8rSNXk0/feature.jpg" alt="" />
                <div className='absolute top-10 flex justify-around'>
                    <div>
                        <img className='h-[40vh]' src="https://i.ibb.co/8rSNXk0/feature.jpg" alt="" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-xl'>We know What Bait to Use</h1>
                        <div className='grid lg:grid-cols-2 gap-5'>
                            <div className='flex'>
                                <h2>ICON</h2>
                                <div>
                                    <h1 className='text-lg'>User Experience</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2>ICON</h2>
                                <div>
                                    <h1 className='text-lg'>User Experience</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2>ICON</h2>
                                <div>
                                    <h1 className='text-lg'>User Experience</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2>ICON</h2>
                                <div>
                                    <h1 className='text-lg'>User Experience</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;