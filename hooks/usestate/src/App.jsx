import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const App = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          width: "30vw",
          height: "75vh",
          backgroundColor: "#c8d8e4",
          boxShadow: 3,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          color="initial"
          sx={{ textAlign: "center", height: "8vh" }}
        >
          Counter App
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <IconButton onClick={increment}>
            <AddIcon />
          </IconButton>
          <TextField value={number} size="small" disabled />
          <IconButton onClick={decrement}>
            <RemoveIcon />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setNumber(0);
          }}
          sx={{ mt: 1 }}
        >
          Reset
        </Button>
      </Box>
    </Container>
  );
};

export default App;
