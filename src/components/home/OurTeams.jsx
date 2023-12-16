import React from 'react'
import HeadingText from '../../shared/HeadingText'
import UnderLine from '../../shared/UnderLine'
import { team_info } from '../../data/home/team_info'
import { Image } from '@nextui-org/react'
import Subtitle from '../../shared/Subtitle'

const OurTeams = () => {
    return (
        <main>
            <HeadingText
                heading={`Our Team`}
                subheading={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor`}
            />
            <UnderLine style={`w-40 h-1.5 my-10 mx-auto`} />
            <section className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-11/12 mx-auto my-10'>
                {team_info.map(({ name, position, img, description }, index) => (
                    <div key={index} className='group'>
                        <div className='border p-3 border-dark/10 drop-shadow shadow w-fit h-96 rounded-xl group-hover:-translate-y-3 duration-300'>
                            <Image isZoomed className='w-[100vw] h-40' src={`${img}`} alt={name + position} />
                            <article>
                                <Subtitle subtitle={name} styles={`text-center font-semibold mt-3`} />
                                <h1 className='text-center text-base font-medium'>{position}</h1>
                                <p className='text-start xl:text-sm lg:text-xs sm:text-sm text-xs leading-normal mt-3'>{description.length > 180 ? `${description?.slice(0, 180)} ...` : description}</p>
                            </article>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default OurTeams