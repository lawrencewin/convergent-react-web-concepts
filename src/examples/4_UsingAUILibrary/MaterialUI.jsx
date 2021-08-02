import Avatar from "@material-ui/core/Avatar" //https://material-ui.com/components/avatars/
import Button from "@material-ui/core/Button" //https://material-ui.com/components/buttons/
import TextField from "@material-ui/core/TextField" //https://material-ui.com/components/text-fields/
import FormControlLabel from "@material-ui/core/FormControlLabel" //https://material-ui.com/api/form-control-label/
import Checkbox from "@material-ui/core/Checkbox" //https://material-ui.com/components/checkboxes/
import Link from "@material-ui/core/Link" //https://material-ui.com/components/links/
import Grid from "@material-ui/core/Grid" //https://material-ui.com/components/grid/
import Box from "@material-ui/core/Box" //https://material-ui.com/components/box/
import LockOutlinedIcon from "@material-ui/icons/LockOutlined" //https://material-ui.com/components/material-icons/
import Typography from "@material-ui/core/Typography" //https://material-ui.com/components/typography/
import { makeStyles } from "@material-ui/core/styles" //https://material-ui.com/styles/basics/
import Container from "@material-ui/core/Container" //https://material-ui.com/components/container/

/**
 * The following example is a template taken from https://material-ui.com/getting-started/templates/ that showcases how to create a login screen using
 * react material-ui, which is a CSS library that contains built-in styled components such as Tables, Grids, Styled Text, Containers, etc. In other words, it
 * provides base html elements with CSS already added and allows you to customize them by passing in props, thus combining CSS and HTML into one.
 * You can learn more about material-ui here: https://material-ui.com/getting-started/learn/. Additionally, you can learn more about each individual component,
 * how to use it, and view its API at https://material-ui.com/ under the Components and Components API section.
 *
 * Feel free to use any of the material-ui templates, including this login page, as a baseline for your own project, but make sure to customize it
 * and add your own touches to make it unique
 */

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

//For more info on the components used in this example, reference the links at the top of the file for detailed documentation on each component
//as well as additional components that you can add on to your own project
export default function Example() {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}
