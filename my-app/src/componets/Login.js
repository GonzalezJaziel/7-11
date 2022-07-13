import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Avatar, Button, Paper, TextField, Typography, Link, FormControlLabel, Checkbox } from '@mui/material/';
import { height, margin } from '@mui/system';

const Login=() =>

{const paperStyle={
    padding: "20px",
    height: "70vh",
    width: "280",
    margin: "20px auto"
}
const avatarStyle={
    backgroundColor:"green"
}

const btnStyle = {
    margin:'8px 0'
}

const textField={

}
return(

    <Grid>
        <Paper elavation={10} style={paperStyle}>
        <Grid>
        <Avatar style={avatarStyle}>  </Avatar>
        <h4>Sign In</h4>
        </Grid>


        <TextField
        label='UserName'
        stlye={textField}
        placeholder='Enter UserName'
        fullWidth
        required>
        </TextField>

        <TextField
        label= 'Password'
        style={textField}
        placeholder='Enter Password'
        fullWidth
        required>
        </TextField>

        <FormControlLabel
        control = {
            <Checkbox
            name='Checked'
            color="primary"
        />}
        label = 'Remember me'
        />

        <Button 
        type = "submit"
        color = "primary"
        Variant = "contained"
        style={btnStyle}
        fullWidth>
            Sign In
        </Button>

        <Typography
        style = {textField}>
            <Link href = '#'>
                Forgot Password?
            </Link>

        </Typography>

        <Typography
        style={textField}>
            <Link href = '#'>
            Don't have an account? Sign Up
            </Link>
        </Typography>

     </Paper>

</Grid>
)
}
export default Login;