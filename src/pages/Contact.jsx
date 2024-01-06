import { Icon } from '@iconify/react';
import { Input } from '@nextui-org/react';
import React, { useEffect } from 'react';
import DefaultButton from '../shared/DefaultButton';
import FetchContact from '../libs/contact';

const Contact = () => {
	// for fetch initial data
	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await FetchContact.GetContact();
				console.log('data', data)
			} catch (error) {
				console.error('Error:', error);
			}
		}
		fetchData();
	}, []);



	const handleContact = async (e) => {
		e.preventDefault()
		const name = e.target.name.value
		const email = e.target.email.value
		const message = e.target.message.value
		const submitData = { name, email, message }
		try {
			const submit = await FetchContact.AddContact(submitData)
			alert(submit.message)
			if (submit.success) {
				e.target.reset();
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return (
		<main className='my-28'>
			<form action="" onSubmit={handleContact} className=' w-1/2 flex flex-col gap-3 mx-auto p-10 shadow border border-dark/20 backdrop-blur-xl rounded'>
				<Input
					autoFocus
					endContent={
						<Icon className="text-2xl text-dark/90 pointer-events-none flex-shrink-0" icon="wpf:name" />
					}
					type='text'
					label="Name"
					name='name'
					placeholder="Enter your name"
					variant="bordered"
				/>
				<Input
					endContent={
						<Icon className="text-2xl text-dark/90 pointer-events-none flex-shrink-0" icon="fluent:mail-20-filled" />
					}
					type='email'
					name='email'
					label="Email"
					placeholder="Enter your email"
					variant="bordered"
				/>
				<Input
					endContent={
						<Icon className="text-2xl text-dark/90 pointer-events-none flex-shrink-0" icon="mdi:address-marker" />
					}
					type='text'
					name='message'
					label="Message"
					placeholder="Enter your Message"
					variant="bordered"
				/>
				<DefaultButton name={'Submit'} styles={`w-full font-bold`} />
			</form>
		</main>
	);
};

export default Contact;
