import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profiles from "./components/Profiles/Profiles";
import AddProfileForm from "./components/FormAddProfiles/AddProfileForm";
import Repo from "./components/Repo/Repo";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import AdminPanel from "./views/AdminPanel";
import PublicView from "./views/PublicView";
import Login from "./views/Login";
import Aboutus from "./components/Aboutus/Aboutus";

import { AuthProvider, AuthContext } from "./contexts/auth";

const Rotas = () => {
  
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)

    if (loading) {
      return <div>carregando...</div>
    }

    if (!authenticated) {
      return <Navigate to="/"/>
    }
    return children
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<PublicView />} />
          <Route exact path="/nos" element={<Aboutus />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<Private><AdminPanel /></Private>} />
          <Route exact path="/admin/profiles" element={<Private><Profiles /></Private>} />
          <Route exact path="/admin/create" element={<Private><AddProfileForm /></Private>} />
          <Route exact path="/admin/update" element={<Private><UpdateProfile /></Private>} />
          <Route exact path="/admin/repo" element={<Private><Repo /></Private>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Rotas;
