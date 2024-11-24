import {
    Container,
    Paper,
    Typography,
    Box,
    Grid,
    InputAdornment,
    TextField,


} from '@mui/material'
import {
    Email,
    Person,
    Home,
    LocationOn,
    ElectricBolt,
    AttachMoney,
    Apps,
    Lock,
    Phone
} from '@mui/icons-material';

const RegisterComponent = () => {
    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography component="h1" variant="h4" align="center" gutterBottom>
                    EcoTrack User Registration
                </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="email"
                                label="Email"
                                type="email"
                                value={''}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="password"
                                label="Password"
                                type="password"
                                value={""}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                name="firstName"
                                label="First Name"
                                value={""}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                name="lastName"
                                label="Last Name"
                                value={''}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="mobileNumber"
                label="Mobile Number"
                type="tel"
                value={""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="homeCity"
                                label="Home City"
                                value={""}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Home />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="address"
                                label="Address"
                                multiline
                                rows={2}
                                value={""}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOn />
                                        </InputAdornment>),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="totalEnergy"
                                label="Total Energy (kW)"
                                value={""}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ElectricBolt />
                                        </InputAdornment>
                                    ),
                                }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="energyBill"
                                label="Energy Bill"
                                type="number"
                                value={''}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AttachMoney />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="appliances"
                                label="List of Appliances Used"
                                multiline
                                rows={3}
                                value={""}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Apps />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>

                </Box>
            </Paper>
        </Container>
    )

}
export default RegisterComponent;