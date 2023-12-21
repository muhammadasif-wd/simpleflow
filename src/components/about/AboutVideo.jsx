import React from 'react'
import DefaultButton from '../../shared/DefaultButton'
import { images } from '../../shared/images'
import { Icon } from '@iconify/react'
import { Image, useDisclosure } from '@nextui-org/react'
import DefaultModal from '../../shared/DefaultModal'

export default function AboutVideo() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <main className='my-10 bg-primaryColor w-11/12 mx-auto'>
            <section className='relative'>
                <Image radius='none' className='brightness-50 w-[100vw] object-cover opacity-50 h-[25rem]' src={images.about_bg} alt="" />
                <div className='justify-center flex items-center'>
                    <div className='absolute z-30 top-40'>
                        <DefaultButton event={onOpen} name={<Icon className='w-10 h-10' icon="ph:play-bold" />} styles={'rounded-full !w-20 !h-20'} />
                    </div>
                </div>
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
    );
}
