import React from 'react';
// import { Icon } from '@iconify/react';
import UnderLine from './UnderLine';

const Service = () => {
    return (
        <div className='my-10 text-[#fff] mx-auto w-full'>
            <div className='bg-primaryColor relative'>
                <img className='h-[60vh] opacity-30' src="https://i.ibb.co/8rSNXk0/feature.jpg" alt="" />
                <div className='absolute top-9 lg:flex  justify-evenly'>
                    <div className=''>
                        <img className='h-[50vh]' src="https://i.ibb.co/8rSNXk0/feature.jpg" alt="" />
                    </div>
                    <div className='w-1/2 '>
                        <h1 className='text-2xl font-semibold my-4'>We know What Bait to Use</h1>
                        <UnderLine></UnderLine>
                        <div className='grid lg:grid-cols-2 gap-5'>
                            <div className='flex'>
                                <h2 className='mx-5'>
                                    {/* <Icon icon="basil:user-solid" /> */}

                                </h2>
                                <div>
                                    <h1 className='text-lg font-semibold'>User Experience</h1>
                                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2 className='mx-5'>
                                    {/* <Icon icon="material-symbols:responsive-layout" /> */}
                                </h2>
                                <div>
                                    <h1 className='text-lg font-semibold'>Responsive Layout</h1>
                                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2 className='mx-5'>
                                    {/* <Icon icon="cib:digital-ocean" /> */}
                                </h2>
                                <div>
                                    <h1 className='text-lg font-semibold'>Digital Solutions</h1>
                                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <h2 className='mx-5'>
                                    {/* <Icon icon="mdi:bootstrap" /> */}
                                </h2>
                                <div>
                                    <h1 className='text-lg font-semibold'>Bootstrap 4x</h1>
                                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
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