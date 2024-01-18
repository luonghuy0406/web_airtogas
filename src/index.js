// index.js

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import App from './App';
import LoadingPage from './pages/LoadingPage';

const theme = createTheme();
const container = document.getElementById('root');
const root = createRoot(container);

const fetchData = async (url) => {
  const response = await fetch(url);
  const result = await response.text();
  return JSON.parse(result).result;
};

const getData = async (endpoint) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_HOST}${endpoint}`);
    const result = await response.json();
    return result.result; // Assuming the actual data is in the 'result' property
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be caught in the Promise.all catch block
  }
};

const Main = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </ThemeProvider>
  );
};

root.render(<Main />);
