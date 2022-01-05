import React from "react";

const StepsToFeed = () => {
	return (
		<div className="steps_to_feed_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="text-center mb-3 fw700 f48 small_caps letterSpacing_1px text-white montserrat">
								STEPS TO FEED THE SHARK
							</h1>
							<div className="row align-items-center mt-5">
								<div className="steps_right_side col-md-5 text-white poppins f18">
									<ol>
										<li className="mb-4">
											Create a MetaMask Wallet using either a desktop computer
											or an iOS/Android mobile device. This will allow you to
											buy, sell, send and receive $SHARK.
										</li>
										<li className="mb-4">
											You can buy Ethereum (ETH) directly on MetaMask or
											transfer it to your MetaMask Wallet from exchanges like
											Coinbase, Binance, etc. Make sure to use the ERC-20
											network when transfering ETH.
										</li>
										<li className="mb-4">
											Access your wallet on Uniswap by clicking ‘Connect Wallet’
											and selecting MetaMask.
										</li>
										<li>
											You can start swapping as soon as you have ETH available!
											Press ‘Select a token’ and enter $SHARK’s token address or
											search for it on the Dextools tokens list.
										</li>
									</ol>
									<div className="d-flex justify-content-center justify-content-md-start">
										<button className="text-white condensed fw600 mt-3">
											BUY NOW
										</button>
									</div>
								</div>
								<div className="col-md-7 mt-5 mt-md-0">
									<div className="row">
										<div className="col-12 col-sm-8 mx-auto mx-md-auto ms-auto">
											<iframe
												src="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
												height="660px"
												width="100%"
												style={{
													border: "0",
													margin: "0 auto",
													marginBottom: "5rem",
													display: "block",
													borderRadius: "10px",
													maxHeight: "500px",
												}}
											/>
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

export default StepsToFeed;
