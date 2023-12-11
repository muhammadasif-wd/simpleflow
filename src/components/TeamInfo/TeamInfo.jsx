import React, { useEffect, useState } from 'react';
import UnderLine from '../../styles/UnderLine';

const TeamInfo = () => {
    const [teamsInfo, setTeamInfo] = useState([])

    useEffect(() => {
        fetch('teamInfo.json')
            .then(res => res.json())
            .then(data => setTeamInfo(data))
    }, [])


    return (
        <div>
            <div className='flex justify-center'>
                <UnderLine></UnderLine>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 w-4/5 mx-auto text-center'>
                {
                    teamsInfo.map(team => <>
                        <div className=''>
                            <div className=''>
                                <img src={team.img} alt="" />
                                <p className='text-xl font-bold'>{team.name}</p>
                                <p>{team.occupation}</p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default TeamInfo;