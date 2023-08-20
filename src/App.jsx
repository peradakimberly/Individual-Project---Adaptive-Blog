import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import MainPage from "./pages/MainPage";
import SinglePostPage from "./pages/SinglePostPage";
import NewPostForm from "./pages/NewPostForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path="/post/:id" element={<SinglePostPage />} />
      <Route path="new-post" element={<NewPostForm />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
