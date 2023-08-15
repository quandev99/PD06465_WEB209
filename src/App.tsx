import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
function App() {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

export default App
