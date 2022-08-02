import Header from "../components/Header";
const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			{/* footer */}
		</div>
	);
};
export default Layout;
