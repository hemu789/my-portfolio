import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from'./pages/Home/index'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Admin from './pages/Admin/index';

function App() {
  const {loading, portfolioData} = useSelector(state =>state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () =>{
    try{
      dispatch(ShowLoading(true))
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data))
      dispatch(HideLoading())
    }
    catch(error){
      dispatch(HideLoading());


    }
  }
  useEffect( ()=>{
    if(!portfolioData){
     getPortfolioData()
    }
  },[portfolioData]);

  
  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
