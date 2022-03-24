import type { NextPage } from "next";
import { useContext, useEffect, useState, useReducer } from "react";
import TrackerCard from "../components/TrackerCard";
import UserCard from "../components/UserCard";
import { AllTracks, CurrentView } from "../context/store";
import { getData } from "../hooks/useData";
import { tracksReducer } from "../context/store";
import UptHoursModal from "../components/UptHoursModal";
const Home: NextPage = () => {
    const { tracks, setTracks } = useContext(AllTracks);
    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-4 lg:items-center lg:h-screen relative ">
            <button className="text-white" onClick={() => {}}>
                -
            </button>
            <UserCard />
            <div className="flex flex-col gap-y-8 w-[330px] my-8 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 lg:w-1/2">
                {tracks.map((track: any) => (
                    <TrackerCard track={track} key={track.id} />
                ))}
            </div>
        </div>
    );
};

export default Home;
