import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
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
			<Navbar
				className="bg-primaryColor/0 backdrop-blur-none text-white"
				shouldHideOnScroll
			>
				<NavbarBrand>
					<Link href="/">
						<p className="font-bold text-inherit text-white">Simple Flow</p>
					</Link>
				</NavbarBrand>
				<NavbarContent
					className="hidden sm:flex gap-4 text-white"
					justify="center"
				>
					<Dropdown>
						<NavbarItem>
							<DropdownTrigger>
								<Button
									disableRipple
									className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white font-semibold"
									radius="sm"
									variant="light"
								>
									About
								</Button>
							</DropdownTrigger>
						</NavbarItem>
						<DropdownMenu
							aria-label="About Us"
							className="w-[340px]"
							itemClasses={{
								base: 'gap-4',
							}}
						>
							<DropdownItem
								as={Link}
								href="/about-us"
								key="About Us"
								description="See Our About Us"
								className="text-dark"
							>
								About Us
							</DropdownItem>
							<DropdownItem
								as={Link}
								href="/our-team"
								key="Our Team"
								description="See Our Legendary Team Member"
								className="text-dark"
							>
								Our Team
							</DropdownItem>
							<DropdownItem
								as={Link}
								href="/career"
								key="Career"
								description="See Our Recent Career"
								className="text-dark"
							>
								Career
							</DropdownItem>
							<DropdownItem
								as={Link}
								href="/events"
								key="Events "
								description="See Our Events"
								className="text-dark"
							>
								Events
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavbarContent>
				<NavbarContent
					className="hidden sm:flex gap-4 text-white"
					justify="center"
				>
					<NavbarItem>
						<Link className="text-white" href="/services">
							Services
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link className="text-white" href="/portfolios">
							Portfolio
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link className="text-white" href="/contacts">
							Contact
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</main>
	);
};

export default Header;
