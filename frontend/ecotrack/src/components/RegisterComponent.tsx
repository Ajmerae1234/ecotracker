import React from 'react';
import {
    Container,
    Paper,
    Typography,
    Box,
    Grid,
    InputAdornment,
    TextField,
    Button


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
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [homeCity, setHomeCity] = React.useState('');
    const [address, setaddress] = React.useState('');
    const [appliances, setAppliances] = React.useState('');
    const [totalEnergy, setTotalEnergy] = React.useState('');
    const [energyBill, setEnergyBill] = React.useState('');

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event: any) => {
        setPassword(event.target.value)
    }

    const handleFirstName = (event: any) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event: any) => {
        setLastName(event.target.value)
    }

    const handleMobile = (event: any) => {
        setMobile(event.target.value)
    }
    const handleHomeCity = (event: any) => {
        setHomeCity(event.target.value)
    }
    const handleaddress = (event: any) => {
        setaddress(event.target.value)
    }
    const handleAppliances = (event: any) => {
        setAppliances(event.target.value)
    }
    const handleTotalEnergy = (event: any) => {
        setTotalEnergy(event.target.value)
    }
    const handleEnergyBill = (event: any) => {
        setEnergyBill(event.target.value)
    }

    const handleRegister = () => {
console.log(email, password, firstName, lastName, mobile, homeCity, address, appliances, appliances, totalEnergy)
    }
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
                                onChange={(event) => handleEmailChange(event)}
                                required
                                name="email"
                                label="Email"
                                type="email"
                                value={email}

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
                                onChange={(event) => handlePassword(event)}
                                name="password"
                                label="Password"
                                type="password"
                                value={password}

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
                                value={firstName}
                                onChange={handleFirstName}
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
                                value={lastName}
                                onChange={handleLastName}

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
                                value={mobile}
                                onChange={(event) => handleMobile(event)}
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
                                value={homeCity}
                                onChange={(event) => handleHomeCity(event)}
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
                                value={address}
                                onChange={(event) => handleaddress(event)}


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
                                value={totalEnergy}
                                onChange={(event) => handleTotalEnergy(event)}

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
                                value={energyBill}
                                onChange={(event) => handleEnergyBill(event)}


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
                                value={appliances}
                                onChange={(event) => handleAppliances(event)}


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
                    <Button
                        type="button"
                        fullWidth
onClick={handleRegister}
                        variant="contained"
                        size="large"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>

                </Box>
            </Paper>
        </Container>
    )

}
export default RegisterComponent;