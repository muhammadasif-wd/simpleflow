import React from 'react'
import UnderLine from '../../shared/UnderLine'
import Title from '../../shared/Title'
import { Icon } from '@iconify/react'
import around from '../../data/home/around'
import { Image } from '@nextui-org/react'
import Subtitle from '../../shared/Subtitle'
import { images } from '../../shared/images'
const Around = () => {
    return (
        <div className='my-10 text-white mx-auto w-full h-full'>
            <div className='bg-primaryColor h-[33rem] relative'>
                <img className='h-[33rem] w-[50%] ml-0 opacity-30 object-cover bg-center' src={`${images.side_img}`} alt="" />
                <div className='absolute top-10 lg:flex justify-around'>
                    <div className='h-fit w-fit mx-auto my-auto'>
                        <Image className='lg:h-[24rem] hidden lg:block w-[24vw] mx-auto object-contain' src={`${images.side_img}`} alt="" />
                    </div>
                    <div className='xl:w-1/2 lg:w-2/3 w-11/12 mx-auto'>
                        <Title title={`We know What Bait to Use`} styles={`font-bold`} />
                        <UnderLine style={'sm:w-80 w-40 h-1.5 my-3 ml-3'} />
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                            {around.map(({ name, icon, desc }, index) => (
                                <article key={index}>
                                    <div className='flex mt-5'>
                                        <Icon className='w-10 h-8' icon={icon} />
                                        <Subtitle subtitle={`${name}`} styles={`font-semibold`} />
                                    </div>
                                    <p className='md:text-base text-sm my-3 ml-unit-17'>{desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Around