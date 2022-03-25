import { useState, useEffect, useContext } from "react";
import axios from "axios";
export const getData = () => {
    const [data, setData] = useState([]);
    async function fetchData() {
        const response = await axios.get("data.json");
        if (localStorage.getItem("tracks")) {
            setData(JSON.parse(localStorage.getItem("tracks") as string));
            ;
        } else {
            ;
            localStorage.setItem("tracks", JSON.stringify(response.data));
            const data = await JSON.parse(localStorage.getItem("tracks") as string);
            setData(data);
            window.location.reload();
        }
    }
    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
           console.log(error)
        }
    }, [setData]);

    return data;
};
