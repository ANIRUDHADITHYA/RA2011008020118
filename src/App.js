import React from 'react';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import NumbersPage from './Pages/NumberPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/numbers" element={<NumbersPage />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
