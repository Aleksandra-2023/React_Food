import { Layout } from "./components/Layout";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <>
   <BrowserRouter>
   
      <Routes basename='/React-food'>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/contacts' element={<Contact />}/>
        <Route path='/category/:name' element={<Category />}/>
        <Route path='/meal/:id' element={<Recipe />}/>
        <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
