import React from "react";
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, ClickEvent }) => {
	const navigations = [
		{
			text: "HOME",
			link: "home",
		},
		{
			text: "ABOUT US",
			link: "about",
		},
		{
			text: "TOKENOMICS",
			link: "token",
		},
		{
			text: "ROADMAP",
			link: "roadmap",
		},
	];

	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				left: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<div className="logo">
				<Link to="home">
					<img src="/images/logo.svg" alt="logo" />
				</Link>
			</div>
			<img
				onClick={ClickEvent}
				src="/images/icons/cross.svg"
				alt=""
				className="CrossBTn"
			/>
			<ul>
				{navigations.map((item, i) => {
					return (
						<li className="fw600 text-white f28 pointer" key={i}>
							<Link
								// activeClass="activeNav"
								onClick={ClickEvent}
								to={item.link}
								smooth={true}
								duration={600}
								spy={true}
								offset={-50}
							>
								{item.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
