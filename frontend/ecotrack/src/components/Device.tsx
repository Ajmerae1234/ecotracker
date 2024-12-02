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

const Device = () => {
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
                                label="Device Name"
                                value={""}
                                variant="outlined"
                            />
                            <TextField
                                name="type"
                                label="Device Type"
                                value={""}
                                variant="outlined"
                            />
                            <TextField
                                name="energyConsumption"
                                label="Energy Consumption"
                                type="number"
                                value=""
                                variant="outlined"
                            />
                            <TextField
                                name="powerRating"
                                label="Power Rating"
                                type="number"
                                value=""
                                variant="outlined"
                            />
                            <TextField
                                name="dailyConsumption"
                                label="Daily Consumption"
                                type="number"
                                value=""
                                variant="outlined"
                            />
                            <TextField
                                name="monthlyConsumption"
                                label="Monthly Consumption"
                                type="number"
                                value=""
                                variant="outlined"
                            />
                            <Button
                                variant="contained"

                                sx={{ alignSelf: 'center' }}
                            >
                                Add Device
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>


        </Container>)

}

export default Device