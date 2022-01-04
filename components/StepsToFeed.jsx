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
										<div className="col-12 col-sm-8 col-lg-10 mx-auto mx-md-auto ms-auto">
											<div className="connect_wallet_container p-5">
												<div className="d-flex align-items-center justify-content-between mb-5">
													<img src="/images/horse.svg" alt="" />
													<div className="d-flex align-items-center">
														<details className="custom-select select-1">
															<summary className="radios">
																<input
																	type="radio"
																	name="item"
																	id="default"
																	title=""
																	checked
																/>
																<input
																	type="radio"
																	name="item"
																	id=""
																	title=""
																/>
																<input
																	type="radio"
																	name="item"
																	id=""
																	title=""
																/>
															</summary>
															<ul className="list">
																<li>
																	<label
																		className="d-flex align-items-center justify-content-between w-100 ltr"
																		htmlFor=""
																	>
																		<a
																			className="text-decoration-none text-dark d-flex align-items-center justify-content-between w-100"
																			href=""
																		>
																			<img src="/images/ethereum.svg" alt="" />
																		</a>
																	</label>
																</li>
																<li>
																	<label
																		className="d-flex align-items-center justify-content-between w-100 ltr"
																		htmlFor="English"
																	>
																		<a
																			className="text-decoration-none text-dark d-flex align-items-center justify-content-between w-100"
																			href=""
																		>
																			<img src="/images/ethereum.svg" alt="" />
																		</a>
																	</label>
																</li>
															</ul>
														</details>
														<div className="dot_cont ms-2">
															<img src="/images/dots.svg" alt="" />
														</div>
													</div>
												</div>

												<div className="swap_container p-4">
													<div className="d-flex justify-content-between mb-3">
														<p className="mb-0 text-white f24 fw-light">Swap</p>
														<img src="/images/settings.svg" alt="" />
													</div>

													<div className="swap_bottom_bg d-flex justify-content-between align-items-center p-3 mb-3">
														<h1 className="mb-0 text-white fw-light">0.0</h1>
														<details className="custom-select montserrat">
															<summary className="radios">
																<input
																	type="radio"
																	name="item"
																	id="default"
																	title="ETH"
																	checked
																/>
																<input
																	type="radio"
																	name="item"
																	id="ETH"
																	title="ETH"
																/>
																<input
																	type="radio"
																	name="item"
																	id="ETH"
																	title="ETH"
																/>
															</summary>
															<ul className="list">
																<li>
																	<label
																		className="d-flex align-items-center justify-content-between w-100 ltr"
																		htmlFor=""
																	>
																		<a
																			className="text-decoration-none text-dark d-flex align-items-center justify-content-start w-100"
																			href=""
																		>
																			<img
																				src="/images/ethereum.svg"
																				alt=""
																				className="mt-2"
																			/>
																			<div>ETH</div>
																		</a>
																	</label>
																</li>
																<li>
																	<label
																		className="d-flex align-items-center justify-content-between w-100 ltr"
																		htmlFor="English"
																	>
																		<a
																			className="text-decoration-none text-dark d-flex align-items-center justify-content-start w-100"
																			href=""
																		>
																			<img
																				src="/images/ethereum.svg"
																				alt=""
																				className="mt-2"
																			/>
																			<div>ETH</div>
																		</a>
																	</label>
																</li>
															</ul>
														</details>
													</div>
													<div className="swap_bottom_bg d-flex justify-content-between align-items-center p-3">
														<h1 className="mb-0 text-white fw-light">0.0</h1>
														<select
															name=""
															id=""
															className="text-white px-2 py-1 montserrat"
														>
															<option value="Select Token">Select Token</option>
															<option value="Select Token">Select Token</option>
														</select>
													</div>
												</div>

												<button className="w-100 mt-4 py-3 border-0 fw-bold f24 condensed">
													Connect Wallet
												</button>
											</div>
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
