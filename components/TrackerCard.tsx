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
        <div className="m-4">
            <div
                className={`flex items-end h-32 bg-primary-${data.title.toLowerCase()}_theme rounded-2xl relative overflow-clip`}
            >
                <img
                    src={`./icon-${data.title.toLowerCase()}.svg`}
                    className="absolute left-2/3 -top-4"
                    alt="Icon for task"
                />
                <div className="w-full text-center text-white bg-neutral-dark_blue rounded-2xl h-4/5 z-10">
                    {data.title}
                </div>
            </div>
        </div>
    );
}

export default TrackerCard;
