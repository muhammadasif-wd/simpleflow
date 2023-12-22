import React from 'react'
import Title from '../../shared/Title'
import Subtitle from '../../shared/Subtitle'

export default function AboutTrusted() {
    return (
        <main className="bg-dark/5 text-dark">
            <div className="container mx-auto p-10">
                <Title title={`About Us`} styles={`font-bold`} />
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <Subtitle subtitle={`Welcome to Simpleflow,`} styles={`font-semibold mt-5`} />
                    <p>your partner in comprehensive software solutions. Our mission is to empower businesses through cutting-edge technology and compelling design. We are dedicated to providing innovative solutions that address the unique challenges of the digital landscape.</p>
                    <p>Whether its developing robust software solutions or creating dynamic websites, Simple Flow is committed to excellence. We leverage our expertise in software and website development to bring your ideas to life, ensuring they not only meet but exceed your expectations.</p>
                </div>
            </div>
        </main>
    )
}
