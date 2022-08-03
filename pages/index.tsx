import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

const Home: NextPage = () => {
	return (
		<div>
			<Layout>
				<Hero />
			</Layout>
		</div>
	);
};

export default Home;
