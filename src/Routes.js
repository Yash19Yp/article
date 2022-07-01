import React from "react";
import Writeondevto from "pages/Writeondevto";
import Writeonmedium from "pages/Writeonmedium";
import MediumProfile from "pages/MediumProfile";
import BlogPage from "pages/BlogPage";
import DevtoProfile from "pages/DevtoProfile";
import Dashboard from "pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/devtoprofile" element={<DevtoProfile />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/mediumprofile" element={<MediumProfile />} />
        <Route path="/writeonmedium" element={<Writeonmedium />} />
        <Route path="/writeondevto" element={<Writeondevto />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
