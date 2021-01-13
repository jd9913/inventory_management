import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar bg='light' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>WebEOC Inventory Management</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='/orders'>Order List</Nav.Link>
							<Nav.Link href='/inventory'>Current Inventory</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
