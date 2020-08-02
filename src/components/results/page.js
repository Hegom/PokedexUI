 import React, { Fragment, useEffect, useState } from 'react';
// import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';
import './style.css';

function Page(props) {
    const {
        results,
        goTo,
        text,
    } = props;       
    console.log(results);
    
    const [result, setResult] = React.useState([]);
    const [poke, setPoke] = React.useState([]);
    const arr = [];     

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
            .then((response) => response.json())
            .then((data) => setResult(
              data.results.map((item) => {
                fetch(item.url)
                  .then((response) => response.json())
                  .then((allpokemon) => arr.push(allpokemon));
                  setPoke(arr);
              }),
            ));
        }, []); 

    // const [count, setCount] = useState(0);
    

    // // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    //     isEmpty = false;
    // });

    //  console.log(poke);

    if(text != null){        
        goTo(`/details/${text}`);
    }

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />

            {/* <div onClick={() => setCount(count + 1)} className="results-page"> */}
            <div  className="results-page">
                {results.map(item =>
                    <div
                        key={item.id}
                        className="card-container"
                    >
                        <Card
                            className="card"
                            onClick={() => goTo(`/details/${item.id}`)} >
                            <CardActionArea>                                    
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="center">
                                        {item.name.toUpperCase()}
                                    </Typography>
                                    <CardMedia
                                        className="card-media"
                                        image={item.sprites.front_default}
                                        title={item.name}
                                    />
                                    <Typography component="p" align="center">
                                        {item.types.map(element => 
                                            element.type.name.toUpperCase() + ' '
                                        )}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                </div>)
            }
            </div>
        </Fragment>
    );
}

export default Page;
