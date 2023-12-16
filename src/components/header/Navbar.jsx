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
import { images } from '../../shared/images';

const Header = () => {
	return (
		<main>
			<Navbar style={{ backgroundImage: `url(${images.home_banner})`, backgroundRepeat: 'no-repeat' }} className={`fixed w-full p-3 text-base backdrop-blur-none text-white`} shouldHideOnScroll>
				<NavbarBrand>
					<Link href="/">
						<p className="font-bold text-inherit text-white text-2xl">Simple Flow</p>
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
									className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent text-white font-medium"
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
								className="text-dark text-base"
							>
								About Us
							</DropdownItem>
							<DropdownItem
								as={Link}
								href="/our-team"
								key="Our Team"
								description="See Our Legendary Team Member"
								className="text-dark text-base"
							>
								Our Team
							</DropdownItem>
							<DropdownItem
								as={Link}
								href="/career"
								key="Career"
								description="See Our Recent Career"
								className="text-dark text-base"
							>
								Career
							</DropdownItem>
							<DropdownItem
								as={Link}
								href="/events"
								key="Events "
								description="See Our Events"
								className="text-dark text-base"
							>
								Events
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavbarContent>
				<NavbarContent
					className="hidden sm:flex gap-4 text-white text-base"
					justify="center"
				>
					<NavbarItem>
						<Link className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent text-white font-medium" href="/services">
							Services
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent text-white font-medium" href="/portfolios">
							Portfolio
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link className="p-0 text-base bg-transparent data-[hover=true]:bg-transparent text-white font-medium" href="/contacts">
							Contact
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</main >
	);
};

export default Header;
