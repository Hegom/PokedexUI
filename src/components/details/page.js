import React, { Fragment, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '../appBar';
import Button from '@material-ui/core/Button';
import './style.css';

function Page(props) {
    const {
        goTo,
        currentItem,
        match,
        itemId
    } = props;

    const [poke, setPoke] = React.useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${itemId}/`)
            .then(results => results.json())
            .then(data => {
                setPoke(data);
            });
    }, []);

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />
            <div className="details-page">
                <Paper
                    elevation={1}
                    className="paper-container"
                >
                    {poke ?
                        <Fragment>
                            <Typography gutterBottom variant="h5" component="h2">
                                {poke.name}
                            </Typography>
                            <div
                                className="item-image"
                                style={{
                                    backgroundImage: `url(${poke.sprites.front_default})`,
                                }}
                            />
                            <Typography gutterBottom component="p" className="content">
                                {poke.types[0].type.name}
                            </Typography>
                        </Fragment>
                        :
                        <CircularProgress className="item-loader" />
                    }
                    <Button
                        color="primary"
                        onClick={() => goTo('/results')}
                    >
                        Back
                    </Button>
                </Paper>
            </div>
        </Fragment>
    );
}

export default Page;
