import { useSelector } from 'react-redux';

function DetailsPage() {
// // const handleClick = () => {

// // }
const movie = useSelector(store => store.details);
const genre = useSelector(store => store.genres)

    return (
        <main>
        <h1>Movie Details</h1>    
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title}/>
                        <p>{movie.description}</p>
                    </div>
                    <h3>Genres: </h3>
                    {genre.map(genre => (
                         <h4 key={genre.name}>  
                         {genre.name}</h4>   
                    ))}          
        </main> 
    )
 }

export default DetailsPage;
