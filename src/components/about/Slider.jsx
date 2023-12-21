import React, { Suspense, lazy } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation } from 'swiper/modules';
import { images } from '../../shared/images';
const Loading = lazy(() => import('../../shared/Loading'))
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import { Image } from '@nextui-org/react';
import slider_info from '../../data/home/slider_info';
import HeadingText from '../../shared/HeadingText';


const Slider = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div style={{ backgroundImage: `url(${images.about_banner})`, backgroundRepeat: 'no-repeat' }} className='relative'>
                <div className='bg-primaryColor'>
                    <HeadingText
                        heading={`Our Client Testimonials`}
                        subheading={`See our valuable client review`}
                        styles={`py-10 text-white`}
                    />
                    <div className='w-1/2 mx-auto pb-10'>
                        <Swiper
                            effect={'flip'}
                            grabCursor={true}
                            navigation={true}
                            modules={[EffectFlip, Navigation]}
                            className="mySwiper"
                        >
                            <div>
                                {slider_info?.map((info, index) =>
                                    <SwiperSlide key={index}>
                                        <div className='bg-white text-center p-5 '>
                                            <div className='flex justify-center'>
                                                <Image className='rounded-full' src={info.img} alt="" />
                                            </div>
                                            <h4 className="text-xl font-bold py-2">{info.name}</h4>
                                            <p className='pb-2'>{info.description}</p>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Slider;