import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";

const Home: NextPage = () => {
	return (
		<div>
			<Layout>
				<Hero />
				<Gallery />
			</Layout>
		</div>
	);
};

export default Home;
