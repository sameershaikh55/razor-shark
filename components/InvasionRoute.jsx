import React, { useEffect, useState } from "react";
import { gettingData } from "../service";

const InvasionRoute = () => {
	// const [roadmapData, setRoadmapData] = useState([]);

	// useEffect(() => {
	// 	gettingData("roadmap").then((res) => setRoadmapData(res));
	// }, []);

	// console.log(roadmapData);
	const data = [
		{
			text: (
				<ul className="list-unstyled text-white lh-sm mb-0">
					<li>Telegram Launch</li>
					<li>Twitter Launch</li>
					<li>Website Release</li>
					<li>Stealth Launch on Uniswap</li>
					<li>Contract Verification</li>
					<li>Liquidity Lock</li>
					<li>Calls & Twitter Marketing</li>
				</ul>
			),
		},
		{
			text: (
				<ul className="list-unstyled text-white lh-sm mb-0">
					<li>1,000 Holders</li>
					<li>Twitter Meme Contest</li>
					<li>Coin Gecko Listing</li>
					<li>CoinMarketCap Listing</li>
					<li>Multi-lingual Telegram Groups</li>
				</ul>
			),
		},
		{
			text: (
				<ul className="list-unstyled text-white lh-sm mb-0">
					<li>5,000 Holders</li>
					<li>Community Contests</li>
					<li>Major PR Marketing</li>
					<li>Shibaswap Listing</li>
					<li>FEGEX Listing</li>
				</ul>
			),
		},
		{
			text: (
				<ul className="list-unstyled text-white lh-sm mb-0">
					<li>10,000 Holders</li>
					<li>Certik Audit</li>
					<li>Shark Portfolio DApp Launch</li>
					<li>Shark Squad DAO Launch</li>
					<li>Whitepaper Release</li>
				</ul>
			),
		},
		{
			text: (
				<ul className="list-unstyled text-white lh-sm mb-0">
					<li>50,000 Holders</li>
					<li>Website Upgrade</li>
					<li>Time Square Billboard Advertising</li>
					<li>More CEX Listing</li>
					<li>$1,000,000 Massive Buyback</li>
				</ul>
			),
		},
	];

	return (
		<div id="roadmap" className="invasion_route_container montserrat">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex align-items-center">
								<h1 className="f50 fw700 mb-4 small_caps letterSpacing_1px w-100 text-white">
									RAZOR SHARK <br className="d-none d-md-block" /> INVASION
									ROUTE
								</h1>
								<div className="w-100">
									<img
										className="d-none d-md-block w-100"
										src="/images/routeHead.svg"
										alt=""
									/>
									<img
										className="d-blocks d-md-none w-100"
										src="/images/routeHead2.svg"
										alt=""
									/>
								</div>
							</div>

							<div className="d-flex flex-column">
								{data.map((item, i) => {
									return (
										<div
											key={i}
											className={`${i === 0 && "bg_color1"} ${
												(i % 2 === 0 && "align-self-start") || "align-self-end"
											} single-roadmap montserrat p-5`}
										>
											<div className="container-fluid px-0">
												<div className="row align-items-center">
													<div className="col-3">
														<div className="position-relative">
															<img
																className="w-100"
																src="/images/roadmapNumber.svg"
																alt=""
															/>
															<h1 className="mb-0 number-text fw600 text-white">{`0${
																i + 1
															}`}</h1>
														</div>
													</div>
													<div className="col-9 fw500">{item.text}</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvasionRoute;
