import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent } from '@mui/material';

const Wallet: React.FC = () => {
    const [balance, setBalance] = useState<number>(0);
    const [amount, setAmount] = useState<string>('');

    const handleAddMoney = () => {
        const parsedAmount = parseFloat(amount);
        if (!isNaN(parsedAmount) && parsedAmount > 0) {
            setBalance(balance + parsedAmount);
            setAmount('');
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Card sx={{ minWidth: 275, mb: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Wallet Balance
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        ${balance.toFixed(2)}
                    </Typography>
                </CardContent>
            </Card>
            <TextField
                label="Amount"
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleAddMoney}>
                Add Money
            </Button>
        </Box>
    );
};

export default Wallet;