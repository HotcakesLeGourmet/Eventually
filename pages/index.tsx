import type { NextPage } from "next";
import { useEffect, useState } from "react";
import TrackerCard from "../components/TrackerCard";
import { getData } from "../hooks/useData";

const Home: NextPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData(setData);
    }, []);
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-8/12">
                {data.map((tracker) => (
                    <TrackerCard data={tracker} />
                ))}
            </div>
        </div>
    );
};

export default Home;
