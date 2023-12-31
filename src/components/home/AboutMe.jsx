import React from 'react'
import Title from '../../shared/Title'
import DefaultButton from '../../shared/DefaultButton'
import { images } from '../../shared/images'
import { Icon } from '@iconify/react'
import { useDisclosure } from '@nextui-org/react'
import DefaultModal from '../../shared/DefaultModal'

const AboutMe = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <main style={{ backgroundImage: `url(${images?.about_bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: "right" }} className='h-[35rem]'>
            <section style={{ backgroundImage: `url(${images?.about_bg_overlay})`, backgroundRepeat: 'no-repeat', backgroundPosition: "center" }} className='h-[35rem]'>
                <section className='xl:w-10/12 w-11/12 mx-auto grid md:grid-cols-2 h-full'>
                    <div className="flex justify-center items-center">
                        <article className='p-3'>
                            <Title title={`Who We Are`} styles={'font-bold text-white'} />
                            <p className='text-white my-10 drop-shadow-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <DefaultButton name={`Read more`} styles={'font-semibold rounded-full w-40 my-3'} />
                        </article>
                    </div>
                    <div className='flex md:justify-center justify-end items-center md:ml-60 h-full'>
                        <DefaultButton event={onOpen} name={<Icon className='w-10 h-10' icon="ph:play-bold" />} styles={'rounded-full !w-20 !h-20 md:mt-60'} />
                    </div>
                </section>
            </section>
            {/* modal */}
            <DefaultModal
                isOpen={isOpen}
                size={`full`}
                title={false}
                body={
                    <iframe
                        className='w-full h-[90vh]'
                        src="https://www.youtube.com/embed/3sdpkFZUhlA?si=NR17DPqlTvaoDQ2U&amp;start=11&autoplay=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    >
                    </iframe>
                }
                onOpenChange={onOpenChange}
                footer={
                    { "close": false, "closeName": 'close', "action": false, "actionName": 'Done' }
                }
            />
        </main>
    )
}

export default AboutMe