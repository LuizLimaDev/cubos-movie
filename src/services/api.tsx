import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzI5YWY0Nzk2NjhmN2U2MTAxZTQ0NzYwZmFkZmJiYSIsIm5iZiI6MTc0MDE4NzE4Ny40OTgsInN1YiI6IjY3YjkyNjMzMmVkYzljMTNmYjBhNjRlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jFsc7nrUmJSmrrbr_rOclQvAx8iY2GvYwkEonpUnA5s",
    accept: "application/json",
  },
});

export default api;
