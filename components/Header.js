import Nav from "../components/Nav";

const Header = () => {
	return (
		<div className=" bg-blue-50 flex flex-row justify-between p-4">
			<div className="text-green-500 hover:cursor-pointer">Logo</div>
			<Nav />
			<a className="flex item-center">Book a shoot</a>
		</div>
	);
};
export default Header;
