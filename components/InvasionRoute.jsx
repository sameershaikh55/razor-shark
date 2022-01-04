import React, { useEffect, useState } from "react";
import { gettingData } from "../service";

const InvasionRoute = () => {
	const [roadmapData, setRoadmapData] = useState([]);
	const [image, setImage] = useState();

	useEffect(() => {
		gettingData("roadmap").then((res) => setRoadmapData(res));
		gettingData("images").then((res) => setImage(res));
	}, []);

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
										src={image && image[3].fields.image.fields.file.url}
										alt={image && image[3].fields.title}
										title={image && image[3].fields.title}
									/>
									<img
										className="d-blocks d-md-none w-100"
										src="/images/routeHead2.svg"
										alt=""
									/>
								</div>
							</div>

							<div className="d-flex flex-column">
								{roadmapData.map((item, i) => {
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
													<div className="col-9 fw500">
														<ul className="list-unstyled text-white lh-sm mb-0">
															{item.fields.singleRoadField.content[0].content.map(
																(item2, i) => {
																	return (
																		<li key={i}>
																			{item2.content[0].content[0].value}
																		</li>
																	);
																}
															)}
														</ul>
													</div>
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
