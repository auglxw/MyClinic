import { Navigate } from "react-router-dom";


function Protected({ formValid, page, target }) {
    return formValid ? target : page;
};

export default Protected;