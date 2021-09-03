import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selctors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {

    const heroes= useMemo(() => getHeroesByPublisher(publisher), [publisher])

    // const heroes = getHeroesByPublisher(publisher)
    

    return (
        <div className="card-col-auto animate__animated animate__fadeIn">
            <div className='row m-sm-2 justify-content-around'>
            {
            heroes.map(hero => (
                <HeroCard
                 key={hero.id}
                 {...hero} />
              
            ))
            }
            </div>
        </div>
    )
}
