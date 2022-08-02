import Link from "next/link";
import NavLink from "./NavLink";

const Nav = () => {
	return (
		<nav>
			<ul className="flex flex-row ">
				<NavLink linkName={"Packages"} link={"/packages"} />

				<NavLink linkName={"About"} link={"/about"} />

				<NavLink linkName={"Blog"} link={"/blog"} />

				<NavLink linkName={"Gallery"} link="/gallery" />

				<NavLink linkName={"Packages"} link={"/packages"} />
			</ul>
		</nav>
	);
};
export default Nav;
