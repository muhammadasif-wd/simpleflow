import React from 'react';
import HeadingText from '../../components/header/HeadingText/HeadingText';
import TeamInfo from '../../components/TeamInfo/TeamInfo';

const Team = () => {
	return (
	<>
		<HeadingText heading={'Our Team'} subheading={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}></HeadingText>
		<div>Team</div>
		<TeamInfo></TeamInfo>
	</>
	);
};

export default Team;
