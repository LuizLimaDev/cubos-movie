import App from "@/pages/home";
import MovieDetails from "@/pages/MovieDetails";
import { Route, Routes } from "react-router";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/moviedetails" element={<MovieDetails />} />
    </Routes>
  );
}
