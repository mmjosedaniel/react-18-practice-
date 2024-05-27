import { useState, useEffect } from "react";
import axios from "axios";

const useGetData = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try{
				const response = await axios.get(url);
				setData(response.data);
			} catch(error) {
				console.error('Error fetching data:', error)
			}
			
		};

		getData()
	}, [url]);

	return data
};

export default useGetData