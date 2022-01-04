import React from "react";
import { Link } from "react-scroll";

const Header = ({ ClickEvent }) => {
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
		<div id="home" className="header_container condensed">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex justify-content-between align-items-center w-100">
								<div className="logo_container">
									<img src="images/logo.svg" alt="logo" />
								</div>

								<div className="d-flex d-lg-none">
									<img
										className="pointer"
										onClick={ClickEvent}
										src="/images/icons/hamburger.svg"
										alt=""
									/>
								</div>

								<div className="d-none d-lg-flex align-items-center">
									<ul className="list-unstyled d-flex mb-0">
										{navigations.map((item, i) => {
											return (
												<li
													className="fw600 text-white me-5 f26 pointer"
													key={i}
												>
													<Link
														activeClass="activeNav"
														to={item.link}
														smooth={true}
														duration={600}
														spy={true}
														offset={-500}
													>
														{item.text}
													</Link>
												</li>
											);
										})}
									</ul>

									<button className="f26 fw-bold text-uppercase">
										Buy on uniswap
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
