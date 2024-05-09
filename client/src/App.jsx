import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, PrivateRoute } from "./components";
import {
  CreatePost,
  About,
  Dashboard,
  Home,
  PostPage,
  Projects,
  Search,
  Signin,
  Signup,
  UpdatePost,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="postpage/" element={<PostPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/update-post" element={<UpdatePost />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
