import React from 'react';
import {
    Container,
    Typography,
    TableContainer,
    Paper,
    Table, TableHead, TableRow, TableCell
} from '@mui/material';

const DevicesList = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h5" gutterBottom sx={{ mt: 3, mb: 2, textAlign: 'center' }}>
                Devices List
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="devices table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Device Name</TableCell>
                            <TableCell>Device Type</TableCell>
                            <TableCell align="right">Energy Consumption</TableCell>
                            <TableCell align="right">Power Rating</TableCell>
                            <TableCell align="right">Daily Consumption</TableCell>
                            <TableCell align="right">Monthly Consumption</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    )
};

export default DevicesList;