import { useSelector } from 'react-redux';

function DetailsPage() {
// // const handleClick = () => {

// // }
const movie = useSelector(store => store.details);

    return (
        <main>
        <h1>Movie Details</h1>
        <section>
           
               
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title}/>
                        <p>{movie.description}</p>
                    </div>
            
        
        </section>
        </main>
    
    )
 }

export default DetailsPage;
