import Link from "next/link";
const NavLink = ({ linkName, link }) => {
	return (
		<li>
			<Link href={link}>
				<a className="nav--link">{linkName}</a>
			</Link>
		</li>
	);
};
export default NavLink;
