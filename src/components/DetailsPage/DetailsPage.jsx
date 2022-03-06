import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
//import '@fontsource/roboto/300.css';
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[600],
    },
    secondary: {
      main: '#1de9b6',
    },
  },
});

function DetailsPage() {
const history = useHistory();

const handleClick = () => {
    console.log('clicked back to movie list page');
    history.push('/'); // sends user back to main movie list page
}
const movie = useSelector(store => store.details);
const genre = useSelector(store => store.genres);

// movie details page lists movie description, name, image and genres
    return (
        <>
          <header color="primary">       
           <h2>Movie Details</h2>  
           <h2>{movie.title}</h2>
           </header> 
                    <div key={movie.id}>
                        <img src={movie.poster} alt={movie.title}/>
                        <p>{movie.description}</p>
                    </div>
                    <h3>Genres: </h3> 
                    {genre.map(genre => (
                         <h4 key={genre.name}>  
                         {genre.name}</h4>   
                    ))}
                       <ThemeProvider theme={theme}>
                    <Button variant="contained" size="large" color="secondary" onClick={handleClick}>Back to Movie List Page</Button> 
                    </ThemeProvider>        
        </> 
    )
 }// end DetailsPage

export default DetailsPage;
