import Link from "next/link";

const Nav = () => {
	return (
		<nav className="flex flex-row justify-between items-center">
			<div>LOGO</div>
			<ul className="flex flex-row ">
				<li>
					<Link href="/packages">Packages</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/gallery">Gallery</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;
