import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function App() {
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [tenure, setTenure] = useState();
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / (12 * 100);
    const totalMonths = tenure * 12;
    const calculatedEMI = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    setEmi(calculatedEMI.toFixed(2));
  };

  return (
    <div className="container">
      
    <div className="row my-5">
    <h1 style={{color:'black'}} className='text-center'>EMI CALCULATOR</h1>
      <div className="col-6 my-5">
        <img style={{width:'100%'}} src="https://cdn.pixabay.com/photo/2023/05/23/10/24/loan-8012425_1280.jpg" alt="" />
      </div>
      <div className="col-6 my-5">
    <Box sx={{ width: 500, margin: 'auto', mt: 5 }}>
      

      <TextField
        label="Loan Amount (₹)"
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(Number(e.target.value))}
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        label="Interest Rate (%)"
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        label="Tenure (Years)"
        type="number"
        value={tenure}
        onChange={(e) => setTenure(Number(e.target.value))}
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <Button className='btn btn-danger'  variant="contained"  onClick={calculateEMI} fullWidth>
        Calculate
      </Button>

      {emi && (
        <Typography variant="h6" gutterBottom mt={3}>
          Your Monthly EMI is ₹{emi}
        </Typography>
      )}
    </Box>
    </div>
    </div>
    </div>
    
  );
}

export default App;
