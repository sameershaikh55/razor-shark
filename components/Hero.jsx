import React, { useEffect, useState } from "react";
import { gettingData } from "../service";

const Hero = () => {
	const [image, setImage] = useState();
	const [links, setLinks] = useState([]);

	useEffect(() => {
		gettingData("images").then((res) => setImage(res));
		gettingData("socialLinks").then((res) => setLinks(res));
	}, []);

	return (
		<div className="hero_container hebrew">
			<div className="page_container">
				<div className="container-fluid text-white">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="razor_text ms-auto me-lg-5 px-4 px-md-5 px-lg-0 mt-4 mt-lg-0">
								<img src="/images/sharkText.svg" alt="" />
							</div>

							<div className="hero_text_section row align-items-center">
								<div className="col-12 col-lg-5 order-1 order-lg-0 position-relative">
									<div className="right_root2"></div>

									<h1 className="f48 mb-4 fw500">
										Razor Shark Invasion Alert! <br /> Take a bite or be the
										bite!
									</h1>
									<div className="share_icons mb-4">
										<a
											target="blank"
											href={links.length && links[0].fields.socialLink}
										>
											<img
												src="/images/icons/telegram.svg"
												alt=""
												className="pointer"
											/>
										</a>
										<a
											target="blank"
											href={links.length && links[1].fields.socialLink}
										>
											<img
												className="ms-4 pointer"
												src="/images/icons/twitter.svg"
												alt=""
											/>
										</a>
									</div>
									<h4 className="f40 mb-4">Contract: XXXXXXXXXXXX</h4>
									<button className="mb-4 hero_cta f40 fw-bold condensed">
										BUY NOW
									</button>
									<div className="hero_icons_container">
										<img src="/images/heroIcons/i1.svg" alt="" />
										<img
											className="ms-3"
											src="/images/heroIcons/i2.svg"
											alt=""
										/>
										<img
											className="ms-3"
											src="/images/heroIcons/i3.svg"
											alt=""
										/>
										<img
											className="ms-3"
											src="/images/heroIcons/i4.svg"
											alt=""
										/>
									</div>
								</div>
								<div className="col-12 col-lg-7 mt-4 mt-md-0">
									<div className="right_img pe-4">
										<img
											className="w-100"
											src={image && image[0].fields.image.fields.file.url}
											alt={image && image[0].fields.title}
											title={image && image[0].fields.title}
										/>
										<div className="right_root"></div>
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

export default Hero;
