import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
    CssBaseline,
    Container,
    Paper,
    Avatar,
    Typography,
    Box,
    TextField,
    Button
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const LoginComponent = () => {
    const [email, setEmail] = React.useState('')
    const navigate = useNavigate();
    const [password, setPassword] = React.useState('')
    const handleEmailChange = (event: any) => {
        const value = event.target.value;
        setEmail(value);
    }
    const handlePasswordChange = (event: any) => {
        const value = event.target.value;
        setPassword(value);
    }

    const handleSubmit = () => {
        console.log("submit", email, password)
    }


    const handleClear = () => {
        setEmail('');
        setPassword('');
    }
    const handleRegister = () => {
navigate('/register');
    }
    return (
        <Container component="main" maxWidth="xs">

            <Paper
                elevation={6}
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 4,
                    borderRadius: 2
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box
                    sx={{ mt: 1, width: '100%' }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        onChange={handleEmailChange}
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        onChange={handlePasswordChange}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        onClick={handleSubmit}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        onClick={handleClear}
                        sx={{ mt: 1 }}
                    >
                        Reset Password
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        sx={{ mt: 1 }}
                        onClick={handleRegister}
                    >
                        User Registration
                    </Button>
                </Box>

            </Paper>
        </Container>
    )
};
export default LoginComponent