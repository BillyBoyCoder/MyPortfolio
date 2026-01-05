import { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        gap: 2,
      }}
    >
      <Typography variant="h2" component="h1">
        William Cook
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Full Stack Software Engineer
      </Typography>
      <Button variant="contained" onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Button>
    </Box>
  );
}

export default App;
