import React from 'react';

const login = (props) =>{
    return (
        <button onClick={props.redirectToLogin}>
            Login
        </button>
    );
};

export default login;