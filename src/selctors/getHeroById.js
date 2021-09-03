import { heroes } from "../data/heroes";

export const getHeroesById = ( Id ) =>{

   
    return heroes.find(hero => hero.id === Id);

    
}