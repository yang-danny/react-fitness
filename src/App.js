
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ThemeSwitch from './components/ThemeSwitch';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
    //customize dark theme
    const darkTheme = createTheme({
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundImage: `linear-gradient(180deg, rgba(32,20,37,1) 20%, rgba(172,178,186,1) 100%)`,
            },
          },
        },
      },
        palette: {
          mode:'dark',
          background: {
           paper:'#797986', 
          }
        },
    });
    //customize light theme
    const lightTheme = createTheme({
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundImage: `linear-gradient(180deg, rgba(236,220,242,1) 0%, rgba(198,234,245,1) 100%)`,
            },
          },
        },
      },
      palette: {
        background: {
        paper:'#ffffff',
      }
      },
    });
    return (
  <ThemeProvider theme={darkMode? darkTheme:lightTheme}>
         <CssBaseline />
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
  <ThemeSwitch  checked={darkMode}  onChange={()=> setDarkMode(!darkMode)} sx={{ m: 1 }} />
    <Navbar />
    <Routes>
      <Route path="/react-fitness" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
  </ThemeProvider>
);
    }

export default App;