// import React, { useState } from 'react'  //rfc: React Functional Component
import React from 'react'
import PropTypes from 'prop-types'  //impt: for propTypes
import Form from 'react-bootstrap/Form';    //importing bootstrap form
import {Link} from 'react-router-dom';  //importing link


export default function Navbar(props) {
    // const [tmode, settMode] = useState('light');
    // const changemode = () => {
    //     if (props.mode === 'light') {
    //         console.log("mode changed to black");
    //         settMode('light');
    //     }
    //     else{
    //         console.log("mode changed to white");
    //         settMode('dark');
    //     }
    // }

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    <Form className={`text-${props.mode === 'dark'? 'light':'dark'} mx-2`}>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Enable light mode"
                            onChange={props.modeToggler}
                            // onClick={changemode}
                            // props.mode === 'dark'? 'light':'dark'
                        />
                    </Form>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    // title: PropTypes.string,
    title: PropTypes.string.isRequired, //pts: PropTypes.string.isRequired
    about: PropTypes.string.isRequired //pts: PropTypes.string.isRequired

}

Navbar.defaultProps = {
    title: 'set your title',
    about: 'About text here'
};