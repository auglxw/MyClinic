function Protected({ formValid, page, target }) {
    return formValid ? target : page;
};

export default Protected;