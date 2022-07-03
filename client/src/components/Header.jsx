import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as Icon from 'react-bootstrap-icons';

function Header() {
    return <div className="header">
        <p className="header-title">MyClinic <Icon.Clipboard2Pulse /></p>
    </div>
}

export default Header;