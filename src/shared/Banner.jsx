import React, { Suspense, lazy } from 'react';
import { images } from './images';
const Loading = lazy(() => import('./Loading'))
const Title = lazy(() => import('./Title'))


const Banner = ({ title }) => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='mt-11'>
                <div
                    style={{ backgroundImage: `url(${images.banner})`, backgroundRepeat: 'no-repeat' }} className={`max-w-full text-white`}>
                    <Title title={`${title}`} styles={'3xl:h-[35rem] 2xl:h-[30rem] xl:h-[28rem] lg:h-[25rem] md:h-[20rem] h-[15rem] flex justify-center items-center text-white font-bold'} />
                </div>
            </div>
        </Suspense>
    );
};

export default Banner;