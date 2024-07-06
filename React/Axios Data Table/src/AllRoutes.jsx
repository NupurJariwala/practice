import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostForm from "./Components/PostForm";
import Patch from "./Components/Patch";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/postform" element={<PostForm />}></Route>
        <Route path="/patchform" element={<Patch />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
