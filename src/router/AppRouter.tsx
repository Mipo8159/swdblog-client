import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "../common/RouterLayour";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
