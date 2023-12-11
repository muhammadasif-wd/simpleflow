import React from 'react';
import HeadingText from '../../components/header/HeadingText/HeadingText';
import TeamInfo from '../../components/TeamInfo/TeamInfo';
import Service from '../../shared/Service';

const Team = () => {
	return (
	<>
		<HeadingText heading={'Our Team'} subheading={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}></HeadingText>
		<div>Team</div>
		<TeamInfo></TeamInfo>
		<div className='w-full mx-auto'>
		<Service></Service>
		</div>
	</>
	);
};

export default Team;
