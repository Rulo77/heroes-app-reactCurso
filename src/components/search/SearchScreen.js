import React, { useMemo } from 'react'
import querystring from "query-string";

import { useLocation } from 'react-router';
import { useForm } from '../../Hooks/useForm';
import { HeroCard } from '../heros/HeroCard';
import { getHeroesByName } from '../../selctors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = '' } = querystring.parse(location.search);

    const [values, handleInputChange] = useForm({
        search: q
    });

    const { search } = values;

    //const heroesFiltered = getHeroesByName(search)

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearh = (e) => {
        e.preventDefault();

        history.push(`?q=${search}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className='row'>
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form
                        onSubmit={handleSearh}
                    >

                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name='search'
                            autoComplete='off'
                            value={search}
                            onChange={handleInputChange}
                        />
                        <button type="submit"
                            className='btn m-1 btn-block btn-outline-primary'
                        >
                            search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                        {
                        (q !== '' && heroesFiltered.length ===  0)
                        &&
                        <div className="alert alert-danger">
                            heroe no encontrado o no existe
                        </div>
                    }
                    {
                        heroesFiltered.map(heroe => (
                            <HeroCard
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }




                </div>

            </div>
        </div>
    )
}
