import React, { useContext, useEffect, useState } from "react";
import { CurrentView } from "../context/store";
import { AllTracks } from "../context/store";
import { v4 as uuidv4 } from "uuid";
function TrackerCard({ data }: { data: any }) {
    const { tracks, setTracks } = useContext(AllTracks);
    const { view } = useContext(CurrentView);
    const [deleting, setdeleting] = useState(false);
    const [togglingView, setTogglingView] = useState(false);
    const trackInfo: { [key: string]: string } = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month",
    };
    const onDeleteTrack = () => {
        setdeleting(!deleting);
        setTimeout(() => {
            const currentStorage = JSON.parse(localStorage.getItem("tracks") as string);
            localStorage.setItem(
                "tracks",
                JSON.stringify([...currentStorage.filter((track: any) => track.id != data.id)])
            );
            const newStorage = JSON.parse(localStorage.getItem("tracks") as string);
            setTracks(newStorage);
        }, 950);
    };
    const onAddTrack = () => {
        const newTrack = {
            id: uuidv4(),
            title: "Work",
            timeframes: {
                daily: {
                    current: 0,
                    previous: 0,
                },
                weekly: {
                    current: 0,
                    previous: 0,
                },
                monthly: {
                    current: 0,
                    previous: 0,
                },
            },
        };
        const currentStorage = JSON.parse(localStorage.getItem("tracks") as string);
        const newStorage = [...currentStorage, newTrack];
        localStorage.setItem("tracks", JSON.stringify(newStorage));
        setTracks(newStorage);
    };
    useEffect(() => {
        if (!togglingView) {
            setTogglingView(true);
            const removeAnimation = setTimeout(() => {
                setTogglingView(false);
            }, 1050);
        }
    }, [view]);
    return (
        <div className={`relative ${deleting ? "animate-single-pulse" : ""} `}>
            <div
                className={`w-[99.5%] flex items-end h-32 bg-primary-${data.title.toLowerCase()}_theme rounded-2xl relative overflow-clip lg:h-40`}
            >
                <img
                    src={`./icon-${data.title.toLowerCase()}.svg`}
                    className="absolute left-2/3 -top-2 lg:-top-1 lg:w-12"
                    alt="Icon for task"
                />
            </div>
            <div className=" lg:absolute hover:bg-neutral-very_dark_blue/80 w-full text-center text-white bg-neutral-dark_blue rounded-2xl h-[80%]  absolute z-10 -left-[.1%] top-1/4">
                <div className="flex justify-around items-center h-full lg:flex-col lg:justify-center lg:ml-4">
                    <div
                        className={` flex flex-col text-left lg:w-full lg:gap-y-6 ${
                            togglingView ? " animate-single-pulse" : ""
                        }`}
                    >
                        <div className=" font-medium lg:text-xs">{data.title}</div>
                        <div className=" font-light text-2xl lg:text-3xl">
                            {data.timeframes[view].current} hrs
                        </div>
                    </div>
                    <div className="lg:w-full">
                        <div className="grid grid-cols-3 grid-rows-2 gap-y-2 text-neutral-pale_blue lg:flex lg:justify-start">
                            <div className="font-medium  text-right text-3xl col-start-3 col-end-4 lg:absolute right-4 top-0">
                                <button className="text-white" onClick={() => onDeleteTrack()}>
                                    ...
                                </button>
                            </div>
                            <p
                                className={`text-sm row-start-2 col-start-1 col-end-4 lg:text-xs my-anime ${
                                    togglingView ? " animate-single-pulse" : ""
                                }`}
                            >
                                {trackInfo[view]} - {data.timeframes[view].previous} hrs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackerCard;
