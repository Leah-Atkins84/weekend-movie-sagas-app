import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom'
//-----------------MUI imports-------------------------
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []); // displays all movies on page load

    const handleClick = (movie) => {
        console.log('clicked a movie', movie)
        history.push('/DetailsPage'); // sends user to detailsPage 
        dispatch({type: 'SET_DETAILS', payload: movie})
        dispatch({type: 'FETCH_GENRES', payload: movie})
    }

    return (
        <main>
            <header>
            <h1>MovieList</h1>
            </header>
            <body>
            <section className="movies">
                {/* // Displays all the movies from the database// */}
                {movies.map(movie => {
                    return (
                  // when movie clicked, brings user to the details page
                        <div key={movie.id} onClick={() => handleClick(movie)} >
                         <Card >
                            <CardContent >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                            </CardContent>
                        </Card>
                        </div>
                    );
                })}
            </section>
            </body>
        </main>

    );
}

export default MovieList;