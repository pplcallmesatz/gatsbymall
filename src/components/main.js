import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavDropdown,
    Form,
    FormControl,
    Button,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'react-bootstrap';
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
            <div>
            {/* Navigation Bar */}
            <header>
            <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
            <Link className={"navbar-brand"}>NAvBrand</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <ListLink className={"nav-link"} to="/">Home</ListLink>
            <ListLink className={"nav-link"}  to="/about/">About</ListLink>
            <ListLink className={"nav-link"}  to="/contact/">Contact</ListLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </header>
        {/* End: Navigation Bar */}
        {/* Body Content */}
            <div>
            { this.props.children }
            </div>
        {/* End: Body Content */}

        {/* Footer */}
        <footer>

        </footer>
        {/* End: Footer */}

        </div>
    );
    }
}