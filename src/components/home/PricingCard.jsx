import React, { Suspense } from 'react'
import Loading from '../../shared/Loading';
import HeadingText from '../../shared/HeadingText';
import UnderLine from '../../shared/UnderLine';
import { Button, Card } from '@nextui-org/react';
import Title from '../../shared/Title';
import Subtitle from '../../shared/Subtitle';
import { pricing_info } from '../../data/home/pricing_info';

const PricingCard = () => {
    return (
        <Suspense fallback={<Loading />}>
            <HeadingText heading={'Our Smart Pricing Table'} />
            <div className="flex justify-center">
                <UnderLine />
            </div>

            <section className='flex flex-wrap w-11/12 mx-auto'>
                {pricing_info.map(({ title, subtitle, price, desc }, index) => (
                    <div key={index} className="w-fit my-10 mx-auto">
                        <Card radius="none" className="w-80 h-full bg-primaryColor z-30 p-5 rounded-xl">
                            {/* for card shape */}
                            <div className="bottom-shape -z-50" />
                            <article className="text-center">
                                <Subtitle subtitle={title} styles={`font-bold text-white`} />
                                <p className="text-white/70 py-1 font-medium">{subtitle}</p>
                                <Title title={`$ ${price}`} styles={`font-bold text-white mt-5`} />
                            </article>
                            <div className='my-10'>
                                {desc.map(({ name }, index) => (
                                    <article key={index} className="lg:text-base text-sm font-medium text-white/90 list-disc">
                                        <li>{name}</li>
                                    </article>
                                ))}
                            </div>
                            <div className="flex justify-center items-end">
                                <Button radius='full' variant="bordered" className='font-medium text-white'>Try It Now</Button>
                            </div>
                        </Card>
                    </div>
                ))}
            </section>
        </Suspense>
    );
}

export default PricingCard