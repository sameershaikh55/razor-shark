import { useState } from "react";
import Head from "next/head";

/* IMPORTING COMPONENTS */
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import DAO from "../components/DAO";
import Tokenomics from "../components/Tokenomics";
import InvasionRoute from "../components/InvasionRoute";
import StepsToFeed from "../components/StepsToFeed";
import Sidebar from "../components/Sidebar";

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Head>
				<title>Radio Shark</title>
				<meta name="description" content="Radio Shark" />
				<link rel="icon" href="/assets/logo.svg" />
			</Head>

			{/* COMPONENTS START */}
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Hero />
			<About />
			<DAO />
			<Tokenomics />
			<InvasionRoute />
			<StepsToFeed />
			{/* COMPONENTS END */}
		</div>
	);
}
