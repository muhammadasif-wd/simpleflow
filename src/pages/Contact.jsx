import { Icon } from '@iconify/react';
import { Input } from '@nextui-org/react';
import React from 'react';
import DefaultButton from '../shared/DefaultButton';

const Contact = () => {
	return (
		<main className='my-28 w-1/2 flex flex-col gap-3 mx-auto p-10 shadow border border-dark/20 backdrop-blur-xl rounded'>
			<Input
				autoFocus
				endContent={
					<Icon className="text-2xl text-dark/90 pointer-events-none flex-shrink-0" icon="wpf:name" />
				}
				type='text'
				label="Name"
				placeholder="Enter your name"
				variant="bordered"
			/>
			<Input
				endContent={
					<Icon className="text-2xl text-dark/90 pointer-events-none flex-shrink-0" icon="fluent:mail-20-filled" />
				}
				type='email'
				label="Email"
				placeholder="Enter your email"
				variant="bordered"
			/>
			<Input
				endContent={
					<Icon className="text-2xl text-dark/90 pointer-events-none flex-shrink-0" icon="ph:phone-fill" />
				}
				type='number'
				label="Phone"
				placeholder="Enter your phone number"
				variant="bordered"
			/>
			<Input
				endContent={
					<Icon className="text-2xl text-dark/90 pointer-events-none flex-shrink-0" icon="mdi:address-marker" />
				}
				type='text'
				label="Address"
				placeholder="Enter your address"
				variant="bordered"
			/>
			<DefaultButton name={'Submit'} styles={`w-full font-bold`} />
		</main>
	);
};

export default Contact;
