import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (movie) => {
        console.log('clicked a movie', movie)
        history.push('/DetailsPage');
        dispatch({type: 'SET_DETAILS', payload: movie})
        dispatch({type: 'FETCH_GENRES', payload: movie})
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
              
             
                {movies.map(movie => {
                    return (
                  
                        <div key={movie.id} onClick={() => handleClick(movie)} >
                                 <Card >
                            <CardContent >
                            {/* <CardActions > */}
                            <h3>{movie.title}</h3>
                       
                            <img src={movie.poster} alt={movie.title}/>
                            {/* </CardActions> */}
                            </CardContent>
                        </Card>
                        </div>
                  
                    );
                })}
              
                
            
            </section>
        </main>

    );
}

export default MovieList;