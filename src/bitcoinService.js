import axios from 'axios';

export const getBlockCount = async () => {
	try {
		const res = await axios.get(`/api/getblockcount`);
		return res.data.result;
	} catch (error) {
		console.error("Error fetching block count:", error);
		throw error;
	}
};

