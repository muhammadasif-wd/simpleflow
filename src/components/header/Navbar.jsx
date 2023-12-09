import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react';
import React from 'react';

const Header = () => {
	return (
		<main>
			<Navbar shouldHideOnScroll>
				<NavbarBrand>
					<p className="font-bold text-inherit">Simple Flow</p>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarItem>
						<Link color="foreground" href="#">
							Features
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link href="#" aria-current="page">
							Customers
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="#">
							Integrations
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</main>
	);
};

export default Header;
