import React, { useEffect, useState } from "react";
import { gettingData } from "../service";

const Tokenomics = () => {
	const [roadmapData, setRoadmapData] = useState();

	useEffect(() => {
		gettingData("images").then((res) => setRoadmapData(res));
	}, []);

	return (
		<div id="token" className="tokenomics_container montserrat">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="mb-3 fw700 f50 small_caps letterSpacing_1px text-white text-center">
								Tokenomics
							</h1>

							<div className="mt-5 pt-4">
								<img
									className="d-none d-md-block w-100"
									src={
										roadmapData && roadmapData[1].fields.image.fields.file.url
									}
									alt={roadmapData && roadmapData[1].fields.title}
									title={roadmapData && roadmapData[1].fields.title}
								/>
								<img
									className="token-m d-block d-md-none w-100"
									src={
										roadmapData && roadmapData[2].fields.image.fields.file.url
									}
									alt={roadmapData && roadmapData[2].fields.title}
									title={roadmapData && roadmapData[2].fields.title}
								/>
							</div>

							<p className="f18 text-white text-center mt-5">
								* Sells within 24h of the purchase will be taxed at Development:
								3%, Liquidity: 10%, Marketing: 12%
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tokenomics;
