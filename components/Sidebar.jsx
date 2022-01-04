import React from "react";
import Link from "next/link";

const Sidebar = ({ isOpen, ClickEvent }) => {
	const navigations = [
		{
			text: "HOME",
			link: "",
		},
		{
			text: "ABOUT US",
			link: "",
		},
		{
			text: "TOKENOMICS",
			link: "",
		},
		{
			text: "ROADMAP",
			link: "",
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
				<Link href="/">
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
							{item.text}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
