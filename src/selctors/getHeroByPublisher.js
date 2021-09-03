import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) =>{

    const validpublishers = ['DC Comics', 'Marvel Comics'];

    if ( !validpublishers.includes( publisher ) ){
        throw new Error(`published "${publisher}" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}