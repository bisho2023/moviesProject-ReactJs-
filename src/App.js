import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/header";
import UsersListFunctional from "./userListFunctional/UsersListFunctional";
import LogIn from "./login/login";
import Signup from "./signup/signup";
import Notfound from "./notfound/notfound";
import Products from "./products/products";
import Productdetails from "./productdetalis/productdetails";
import Saveproduct from "./saveproduct/saveproduct";
import Editproduct from "./editproduct/editproduct";
import Movies from "./movies/movies";
import TodoList from "./todolist/todoList";
import Moviedetails from "./moviedetails/moviedetails";
import Favmovies from "./favmovies/favmovies";
import { LanguageProvider } from "./contexts/language";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("Arabic");
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(/1.webp)",
      }}
    >
      <LanguageProvider value={{ language, setLanguage }}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/loin" element={<LogIn />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/favmovies" element={<Favmovies />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/products" element={<Products />}>
            <Route index element={<Saveproduct />}></Route>
            <Route path="save" element={<Saveproduct />}></Route>
            <Route path="edit" element={<Editproduct />}></Route>
          </Route>
          <Route path="/products/:id" element={<Productdetails />}></Route>
          <Route path="/movies/:id" element={<Moviedetails />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
