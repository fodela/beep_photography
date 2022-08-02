import Nav from "../components/Nav";

const Header = () => {
	return (
		<div className="flex flex-row justify-between p-4">
			<div className="text-green-500">Logo</div>
			<Nav />
		</div>
	);
};
export default Header;
