import { useState, useEffect } from "react";
import axios from "axios";
export const getData = () => {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await axios.get("data.json");
        setData(response.data);
    }
    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return data;
};
