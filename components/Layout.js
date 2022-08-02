import Nav from "../components/Nav";
const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div>
				{/* header */}
				<main>{children}</main>
				{/* footer */}
			</div>
		</>
	);
};
export default Layout;
