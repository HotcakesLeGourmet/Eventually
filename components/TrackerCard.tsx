import React from "react";
const sample = {
    title: "Work",
    timeframes: {
        daily: {
            current: 5,
            previous: 7,
        },
        weekly: {
            current: 32,
            previous: 36,
        },
        monthly: {
            current: 103,
            previous: 128,
        },
    },
};
function TrackerCard({ data = sample }) {
    return (
        <div className="relative">
            <div
                className={`w-[99.5%] flex items-end h-32 bg-primary-${data.title.toLowerCase()}_theme rounded-2xl relative overflow-clip`}
            >
                <img
                    src={`./icon-${data.title.toLowerCase()}.svg`}
                    className="absolute left-2/3 -top-2"
                    alt="Icon for task"
                />
            </div>
            <div className="w-full text-center text-white bg-neutral-dark_blue rounded-2xl h-[80%]  absolute z-10 -left-[.1%] top-1/4">
                <div className="flex justify-around items-center h-full">
                    <div className=" flex flex-col text-left">
                        <div className=" font-medium ">{data.title}</div>
                        <div className=" font-light text-2xl">
                            {data.timeframes.weekly.current} hrs
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 grid-rows-2 gap-y-2 text-neutral-pale_blue">
                            <div className="font-medium  text-right text-3xl col-start-3 col-end-4">
                                <button>...</button>
                            </div>
                            <p className=" text-sm row-start-2 col-start-1 col-end-4">
                                Last Week - {data.timeframes.weekly.previous} hrs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackerCard;
