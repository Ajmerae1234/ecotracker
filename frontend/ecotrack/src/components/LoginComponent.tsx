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
                    component="form"
                    onSubmit={() => { }}
                    sx={{ mt: 1, width: '100%' }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value=""
                        onChange={() => { }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value=""
                        onChange={() => { }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        onClick={() => { }}
                        sx={{ mt: 1 }}
                    >
                        Reset Password
                    </Button>
                </Box>

            </Paper>
        </Container>
    )
};
export default LoginComponent