import React, { Fragment, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';
import './style.css';
import { toUpper } from 'lodash';

function Page(props) {
    const {
        results,
        goTo,
        text
    } = props;    

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
        
        console.log(text);

        if(text != null){        
            goTo(`/details/${5}`);
        }

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />
            <div className="results-page">
                {
                    poke.map(item =>
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
                                            {item.name}
                                        </Typography>
                                        <CardMedia
                                        className="card-media"
                                        image={item.sprites.front_default}
                                        title={item.name}
                                    />
                                        <Typography component="p" align="center">
                                        {item.types.map(element => 
                                            element.type.name + ' '
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
