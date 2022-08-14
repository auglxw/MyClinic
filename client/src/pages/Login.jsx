import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import Header from "../components/Header";
import Loginform from "../components/LoginForm";

function LoginPage() {
    return <div className="login">
        <Header />
        <Loginform />
    </div>
}

export default LoginPage;