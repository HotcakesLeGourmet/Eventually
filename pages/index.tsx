import type { NextPage } from "next";
import { useEffect, useState } from "react";
import TrackerCard from "../components/TrackerCard";
import UserCard from "../components/UserCard";
import { getData } from "../hooks/useData";

const Home: NextPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData(setData);
    }, []);
    return (
        <div className="flex  flex-col items-center">
            <UserCard />
            <div className="flex flex-col gap-y-8 w-[330px] my-8">
                {data.map((tracker) => (
                    <TrackerCard data={tracker} />
                ))}
            </div>
        </div>
    );
};

export default Home;
