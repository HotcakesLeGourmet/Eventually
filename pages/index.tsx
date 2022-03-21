import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import TrackerCard from "../components/TrackerCard";
import UserCard from "../components/UserCard";
import { AllTracks, CurrentView } from "../context/store";
const Home: NextPage = () => {
    const contextData = useContext(AllTracks);

    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-4 lg:items-center lg:h-screen ">
            <UserCard />
            <div className="flex flex-col gap-y-8 w-[330px] my-8 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:w-1/2">
                {contextData.map((activy: any, index) => (
                    <TrackerCard data={activy} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Home;
