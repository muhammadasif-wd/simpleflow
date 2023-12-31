import React from 'react';
import HeadingText from '../../shared/HeadingText';
import UnderLine from '../../shared/UnderLine';
import { Image, Link } from '@nextui-org/react';
import DefaultButton from '../../shared/DefaultButton';
import Subtitle from '../../shared/Subtitle';
import events_info from '../../data/home/events_info';

const Events = () => {
    return (
        <main className='my-10 w-11/12 mx-auto'>
            <HeadingText
                styles={'md:w-1/2 mx-auto my-10'}
                heading={'Latest Events'}
            ></HeadingText>
            <div className="flex flex-wrap justify-center my-10">
                <UnderLine style={'w-48 h-2'} />
            </div>
            {/* Latest card */}
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-4 w-fit">
                {events_info.map(({ date, description, img, title }, index) => (
                    <div key={index} className="w-fit rounded-md border border-dark/10 bg-white">
                        <Link href='/'>
                            <Image radius='sm' className='3xl:h-60 2xl:h-54 h-48 object-cover object-center' src={img} alt={title} />
                        </Link>
                        <span className='p-3'>{date}</span>
                        <article className="p-3">
                            <Subtitle subtitle={title} styles={`font-bold text-dark/90`} />
                            <p className="my-3 font-normal text-dark/90">
                                {description}
                            </p>
                            <DefaultButton name={`Read more`} styles={`rounded-md`} />
                        </article>
                    </div>
                ))}
            </div>
        </main >
    );
};

export default Events;