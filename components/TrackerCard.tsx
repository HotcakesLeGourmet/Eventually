import React, { useContext } from "react";
import { CurrentView } from "../context/store";
function TrackerCard({ data }: { data: any }) {
    const { view } = useContext(CurrentView);
    const trackInfo: { [key: string]: string } = {
        daily: "Yesterday",
        weekly: "Last Week",
        monthly: "Last Month",
    };
    return (
        <div className="relative">
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
                    <div className=" flex flex-col text-left lg:w-full lg:gap-y-6">
                        <div className=" font-medium lg:text-xs">{data.title}</div>
                        <div className=" font-light text-2xl lg:text-3xl">
                            {data.timeframes[view].current} hrs
                        </div>
                    </div>
                    <div className="lg:w-full">
                        <div className="grid grid-cols-3 grid-rows-2 gap-y-2 text-neutral-pale_blue lg:flex lg:justify-start">
                            <div className="font-medium  text-right text-3xl col-start-3 col-end-4 lg:absolute right-4 top-0">
                                <button>...</button>
                            </div>
                            <p className=" text-sm row-start-2 col-start-1 col-end-4 lg:text-xs">
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
