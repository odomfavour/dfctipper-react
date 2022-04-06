import React from "react";
import { Route, Routes } from "react-router";
import Home from "./screens/Index"
import LogIn from "./screens/LogIn/LogIn";
import Facebook from "./screens/Facebook/Facebook";
import Reddit from "./screens/Reddit/Reddit";
import Youtube from "./screens/Youtube/Youtube";
import Telegram from "./screens/Telegram/Telegram";
import Transactions from "./screens/Transactions/Transactions";
import Upgrade from "./screens/Upgrade/Upgrade";
import Promotions from "./screens/Promotions/Promotions";
import PromotionSetup from "./screens/PromotionSetup/PromotionSetup";
import Review from "./screens/Review/Review";
import PromotionPage from "./screens/PromotionPage/PromotionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/facebook" element={<Facebook/>}/>
      <Route path="/reddit" element={<Reddit/>}/>
      <Route path="/youtube" element={<Youtube/>}/>
      <Route path="/telegram" element={<Telegram/>}/>
      <Route path="/transactions" element={<Transactions/>}/>
      <Route path="/upgrade" element={<Upgrade/>}/>
      <Route path="/promotions" element={<Promotions/>}/>
      <Route path="/promotions/setup" element={<PromotionSetup/>}/>
      <Route path="/promotion-page" element={<PromotionPage/>}/>
      <Route path="/review" element={<Review/>}/>
    </Routes>
  );
}

export default App;
