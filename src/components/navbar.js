import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Nav,
   } from 'react-bootstrap';
import { Link } from "gatsby"
const ListLink = props => (

    <Link activeClassName="active" className={props.className} to={props.to}>{props.children}</Link>

)


export default class Main extends React.Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
                    <Navbar bg="light" expand="lg">
                        <div className={"container"}>
                            {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
                            <Link to="/" className={"navbar-brand"}>NAvBrand</Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <ListLink className={"nav-link"} to="/">Home</ListLink>
                                    <ListLink className={"nav-link"}  to="/services/">Services</ListLink>
                                    <ListLink className={"nav-link"}  to="/portfolio/">Portfolio</ListLink>
                                    <ListLink className={"nav-link"}  to="/technologies/">Technologies</ListLink>
                                    <ListLink className={"nav-link"}  to="/career/">Career</ListLink>
                                    <ListLink className={"nav-link nav-btn"}  to="/career/">Contact</ListLink>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
        );
    }
}