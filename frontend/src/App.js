import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import UpdateProfile from "./screens/ProfileScreen/UpdateProfile";
import Profile from "./screens/ProfileScreen/Profile";
import SigninPage from "./screens/SigninPage/SigninPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import CreateNote from "./screens/SingleNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/profileUpdate" component={UpdateProfile} exact />
        <Route path="/register" component={SigninPage} exact />
        <Route path="/createnote" component={CreateNote} exact />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
      </main>
      <Footer />
    </Router>
  );
}
export default App;
