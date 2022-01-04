import React from "react";

const About = () => {
	return (
		<div className="about_container montserrat">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="about_inner_container text-white">
								<div className="upper_part">
									<h1 className="f48 fw700 mb-4 small_caps letterSpacing_1px">
										He is Fierce. He is Fast.{" "}
										<br className="d-none d-md-block" /> He is Invincible.
									</h1>
									<p className="f22 mb-0 fw500">
										<span className="color3">Razor Shark ($SHARK)</span> is a
										hyper-deflationary ERC-20 token that keeps pumping through
										the use of true deflationary techniques, liquidity pool
										enhancement and additional revenue generation. <br />
										<span className="color3">$SHARK</span> is backed by a strong
										community at its core, which grows organically on Telegram
										and Twitter. As the token takes off, the community will
										evolve into a Decentralized Autonomous Organization (DAO),
										where members have the right to vote and decide on the
										community’s development direction. Ape in early for a FAST
										100x!
									</p>
								</div>

								<div className="bottom_part">
									<h1 className="f48 fw700 mb-4 small_caps letterSpacing_1px">
										He Keeps Growing <br /> Bigger and Bigger.
									</h1>

									<div className="row align-items-center">
										<div className="col-12 col-md-5">
											<img
												className="w-100"
												src="/images/aboutInnerImg.svg"
												alt=""
											/>
										</div>
										<div className="col-12 col-md-7 f24 fw500">
											<span className="color3">$SHARK</span> focuses on
											long-term growth by continuously injecting new liquidity
											into the project. Taking advantage of the high-yield
											crypto market,
											<span className="color3">Razor Shark</span> will be
											strategically investing a percentage of the marketing
											wallet into a combination of risk-adjusted yield-bearing
											assets, including but not limited to stable coin staking,
											blue-chip NFTs, large and medium cap altcoins as well as
											fractionalized NFT shares. Profits generated are
											inherently reintroduced back into the project in the form
											of marketing spend and tremendous $SHARK buybacks.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
