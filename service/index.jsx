import { createClient } from "contentful";

export const gettingData = async (type) => {
	const client = createClient({
		space: "xo1kggjx27xz",
		accessToken: "C2OPtmp0h747yBXl2kCWDLhhIRcC-NG_XHtLvfKYzzs",
	});

	const res = await client.getEntries({ content_type: type });

	return res.items;
};
