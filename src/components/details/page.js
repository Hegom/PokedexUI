import React, { Fragment, useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '../appBar';
import Button from '@material-ui/core/Button';
import './style.css';

function Page(props) {
    const {
        goTo,
        currentItem,
        itemId,
    } = props;

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />
            <div className="details-page">
                <Paper
                    elevation={1}
                    className="paper-container"
                >
                    
                    {currentItem.sprites ?
                        <Fragment>
                            <CardMedia
                                className="card-media"
                                image={currentItem.sprites.front_default}
                                title={currentItem.name}
                            />
                            <Typography gutterBottom component="h4" >
                                Id: {currentItem.id}
                            </Typography>
                            <Typography gutterBottom component="h5" >
                                Name: {currentItem.name}
                            </Typography>
                            <Typography gutterBottom component="h5" >
                                Type: {currentItem.types.map(element =>
                                element.type.name + ' '
                                )}
                            </Typography>
                            <Typography gutterBottom component="h5" >
                                Heigh: {currentItem.height} Cm
                            </Typography>
                            <Typography gutterBottom component="h5" >
                                Weight: {currentItem.weight} Kg
                            </Typography>
                            <Typography gutterBottom component="h5" >
                                Movements: 
                                <ul>{currentItem.moves.map(element =>
                                    <li>
                                        {element.move.name}  
                                    </li>
                                    )}
                                </ul>
                            </Typography>                           
                        </Fragment>
                        :
                        <Fragment>
                            <Typography gutterBottom variant="h6" component="content">
                                Pokemon {itemId} not found,
                            </Typography>
                            <Typography gutterBottom variant="h6" component="content">
                                please try with the exact name or id
                            </Typography>
                        </Fragment>
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
