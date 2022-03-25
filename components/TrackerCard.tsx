import React, { useContext, useEffect, useState } from "react";
import { CurrentView } from "../context/store";
import { AllTracks } from "../context/store";
import { v4 as uuidv4 } from "uuid";
import UptHoursModal from "./UptHoursModal";
function TrackerCard({ track }: { track: any }) {
    const { tracks , setTracks } = useContext(AllTracks);
    const { view } = useContext(CurrentView);
    const [deleting, setdeleting] = useState(false);
    const [togglingView, setTogglingView] = useState(false);
    const [buttonExpanded, setbuttonExpanded] = useState(false);
    const [modal, setModal] = useState(false);
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
                JSON.stringify([...currentStorage.filter((element: any) => element.id != track.id)])
            );
            const newStorage = JSON.parse(localStorage.getItem("tracks") as string);
            setTracks(newStorage);
        }, 950);
    };
    const updateHours = () => {};
 
    useEffect(() => {
        if (!togglingView) {
            setTogglingView(true);
            const removeAnimation = setTimeout(() => {
                setTogglingView(false);
            }, 1050);
        }
    }, [view]);
    return (
        <div className={`relative ${deleting ? "animate-deleting-track" : ""} `}>
            <div
                className={`w-[99.5%] flex items-end h-32 bg-primary-${track.title.toLowerCase()}_theme rounded-2xl relative overflow-clip lg:h-40`}
            >
                <img
                    src={`./icon-${track.title.toLowerCase()}.svg`}
                    className="absolute left-2/3 -top-2 lg:-top-1 lg:w-12"
                    alt="Icon for task"
                />
            </div>
            <div className=" lg:absolute hover:bg-neutral-very_dark_blue/80 w-full text-center text-white bg-neutral-dark_blue rounded-2xl h-[80%]  absolute -left-[.1%] top-1/4">
                <div className="flex justify-around items-center h-full lg:flex-col lg:justify-center lg:ml-4">
                    <div
                        className={` flex flex-col text-left lg:w-full lg:gap-y-6 ${
                            togglingView ? " animate-single-pulse" : ""
                        }`}
                    >
                        <div className=" font-medium lg:text-xs">{track.title}</div>
                        <div className=" font-light text-2xl lg:text-3xl">
                            {track.timeframes[view].current} hrs
                        </div>
                    </div>
                    <div className="lg:w-full flex items-end relative lg:static h-full lg:h-auto">
                        <div className="flex   text-neutral-pale_blue lg:flex lg:justify-start">
                            <div className="font-medium  text-right text-3xl  -top-2 -right-4 absolute lg:top-0 lg:right-2">
                                <span
                                    className=" text-white lg:relative h-8 cursor-pointer "
                                    onClick={(e) => {
                                        setbuttonExpanded(!buttonExpanded);
                                    }}
                                >
                                    ...
                                    <div
                                        className={`absolute text-xs w-14 right-0 -bottom-10 py-2  z-10  ${
                                            buttonExpanded ? " flex flex-col" : " hidden"
                                        }`}
                                    >
                                        <button
                                            className=" bg-neutral-desaturated_blue rounded-t-md"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDeleteTrack()
                                            }}
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className=" bg-neutral-desaturated_blue rounded-b-md"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setModal((prevstate) => !prevstate);
                                            }}
                                        >
                                            Update
                                        </button>
                                        {modal ? (
                                            <UptHoursModal
                                                time={track.timeframes[view].current}
                                                id={track.id}
                                            />
                                        ) : null}
                                    </div>
                                </span>
                            </div>
                            <p
                                className={`text-sm lg:text-xs my-anime mb-6 lg:m-auto${
                                    togglingView ? " animate-single-pulse" : ""
                                }`}
                            >
                                {trackInfo[view]} - {track.timeframes[view].previous} hrs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackerCard;
