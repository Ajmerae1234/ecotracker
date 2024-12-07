import React from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    TextField,
    Button
} from '@mui/material';
import DevicesList from './DevicesList'

const Device = () => {
    
    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const [energyConsumption, setEnergyConsumption] = React.useState('');
    const [powerRating, setPowerRating] = React.useState('');
    const [dailyConsumption, setDailyConsumption] = React.useState('');
    const [monthlyConsumption, setMonthlyConsumption] = React.useState('');

    
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };

    const handleEnergyConsumptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnergyConsumption(event.target.value);
    };

    const handlePowerRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPowerRating(event.target.value);
    };

    const handleDailyConsumptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDailyConsumption(event.target.value);
    };

    const handleMonthlyConsumptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMonthlyConsumption(event.target.value);
    };

    const handleAddDeviceClick = () => {
        console.log('Name:', name);
        console.log('Type:', type);
        console.log('Energy Consumption:', energyConsumption);
        console.log('Power Rating:', powerRating);
        console.log('Daily Consumption:', dailyConsumption);
        console.log('Monthly Consumption:', monthlyConsumption)
    }

    return (
        <Container maxWidth="lg">
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={12} md={10}>
                    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
                            Add New Device
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 2,
                            justifyContent: 'center'
                        }}>
                            <TextField
                                name="name"
                                onChange={handleNameChange}
                                label="Device Name"
                                value={name}
                                variant="outlined"
                            />
                            <TextField
                                name="type"
                                onChange={handleTypeChange}
                                label="Device Type"
                                value={type}
                                variant="outlined"
                            />
                            <TextField
                                name="energyConsumption"
                                onChange={handleEnergyConsumptionChange}
                                label="Energy Consumption"
                                type="number"
                                value={energyConsumption}
                                variant="outlined"
                            />
                            <TextField
                                name="powerRating"
                                onChange={handlePowerRatingChange}
                                label="Power Rating"
                                type="number"
                                value={powerRating}
                                variant="outlined"
                            />
                            <TextField
                                name="dailyConsumption"
                                onChange={handleDailyConsumptionChange}
                                label="Daily Consumption"
                                type="number"
                                variant="outlined"
                            />
                            <TextField
                                name="monthlyConsumption"
                                onChange={handleMonthlyConsumptionChange}
                                label="Monthly Consumption"
                                type="number"
                                variant="outlined"
                            />
                            <Button
                                variant="contained"
                                sx={{ alignSelf: 'center' }}
                                onClick={handleAddDeviceClick}
                            >
                                Add Device
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <DevicesList />
        </Container>
    );
}

export default Device;