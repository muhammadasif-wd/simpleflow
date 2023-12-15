import React, { Suspense } from 'react';
import { team_info } from '../../data/team_info';
import Loading from '../../shared/Loading';
import UnderLine from '../../shared/UnderLine';

const TeamInfo = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='flex justify-center'>
                <UnderLine />
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 w-4/5 mx-auto text-center'>
                {team_info.map(team => {
                    <article className=''>
                        <img src={team.img} alt="" />
                        <p className='text-xl font-bold'>{team.name}</p>
                        <p>{team.occupation}</p>
                    </article>
                })
                }
            </div>
        </Suspense>
    );
};

export default TeamInfo;