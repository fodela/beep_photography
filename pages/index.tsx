import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

const Home: NextPage = () => {
	return (
		<div>
			<Layout>
				<h2>Layout Child</h2>
			</Layout>
		</div>
	);
};

export default Home;
