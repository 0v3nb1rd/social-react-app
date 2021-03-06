import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Settngs from "./components/Settngs/Settngs";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="app-content">
        <Route render={() => <Profile />} path="/profile" />
        <Route render={() => <DialogsContainer />} path="/dialogs" />
        <Route component={News} path="/news" />
        <Route component={Music} path="/music" />
        <Route render={() => <UsersContainer />} path="/users" />
        <Route component={Settngs} path="/settings" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
