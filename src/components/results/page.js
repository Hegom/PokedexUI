import React, { Fragment, useEffect, useState } from 'react';
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

    if (text != null) {
        goTo(`/details/${text}`);
    }

    return (
        <Fragment>
            <CssBaseline />
            <div onClick={() => goTo(`/results/`)} >
                <AppBar />
            </div>
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
        </Fragment>
    );
}

export default Page;
