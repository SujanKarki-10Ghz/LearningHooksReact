import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import {ThemeProvider} from './ThemeContext';
const ThemeChange = () => {
  return (
    <>
       <ThemeProvider>
       <FunctionContextComponent/>
       </ThemeProvider>
    </>
  )
}

export default ThemeChange