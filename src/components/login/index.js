import React from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
} from "@material-ui/core";
import './style.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fullName: "", email: "borrar@gmail.com" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ username: event.state.username, email: event.state.email });
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const jsonbody = JSON.stringify({fullName: this.state.fullName, email: this.state.email});

        (async () => {
            const rawResponse = await fetch('http://localhost:5001/api/trainers/', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: jsonbody
            });
            const content = await rawResponse.json();
          })();

        this.props.history.push("/results");
    }
    render() {
        return (
            <div>
                <AppBar position="static" alignitems="center" color="primary">
                    <Toolbar>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">Pokedex</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={0} justify="center" direction="row">
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="login-form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={2}
                                className="login-background"
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Sign on
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={this.handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="Login"
                                                    placeholder="Full Name"
                                                    fullWidth
                                                    name="fullName"
                                                    variant="outlined"
                                                    value={this.state.fullName}
                                                    onChange={(event) =>
                                                        this.setState({
                                                            [event.target.name]: event.target.value,
                                                        })
                                                    }
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="email"
                                                    placeholder="Email"
                                                    fullWidth
                                                    name="email"
                                                    variant="outlined"
                                                    value={this.state.email}
                                                    onChange={(event) =>
                                                        this.setState({
                                                            [event.target.name]: event.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className="button-block"
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>                                
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Login;