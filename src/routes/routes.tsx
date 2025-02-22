import BasicLayout from "@/components/Layout/BasicLayout/BasicLayout";
import App from "@/pages/home";
import MovieDetails from "@/pages/MovieDetails";

import { Route, Routes } from "react-router";

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<BasicLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/moviedetails" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}
