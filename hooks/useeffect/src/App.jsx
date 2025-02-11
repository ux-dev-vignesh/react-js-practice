import React, { useState, useEffect } from "react";
import { Box, Container, TextField, IconButton } from "@mui/material";
import "./app.css"

const App = () => {
  // use state
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <>
      <Container id="mainContainer" sx={{ border: 'none' }}>
        <Box sx={{ border: 'none' }}>
          <TextField value={`${hours}:${minutes}:${seconds}`} sx={{ border:'none' }} disabled  />
        </Box>
      </Container>
    </>
  );
};

export default App;
