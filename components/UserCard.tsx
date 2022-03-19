import React, { useState } from "react";
import { text } from "stream/consumers";

function UserCard() {
    const defaultView = {
        Daily: false,
        Weekly: false,
        Monthly: false,
    };
    const [selectedView, setselectedView] = useState(defaultView);
    const onSectionClick = (e: any) => {
        const activeView = e.target.value;
        setselectedView({ ...defaultView, [activeView]: true });
    };
    return (
        <div className="sm: w-[330px] mt-4">
            <div className="flex flex-col h-44  bg-neutral-dark_blue rounded-2xl relative">
                <div className=" flex justify-center items-center w-full text-center bg-primary-blue text-white rounded-2xl h-4/6 z-10">
                    <div className="grid grid-cols-3 grid-rows-2 gap-x-4 text-left">
                        <div className=" flex justify-end  items-center row-start-1 row-end-3  ">
                            <div className="border-4 border-white rounded-full ">
                                <img src="/image-jeremy.png " className="w-16" />
                            </div>
                        </div>
                        <div className="flex items-end">
                            <p className="text-xs text-neutral-pale_blue">Reported for</p>
                        </div>
                        <div className=" row-start-2 col-start-2  col-span-2 text-xl">
                            <p className="">Jeremy Robson</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around flex-grow  items-center text-neutral-pale_blue">
                    <button
                        onClick={(e) => onSectionClick(e)}
                        className={` hover:text-white  ${selectedView.Daily ? "text-white" : ""}`}
                        value="Daily"
                    >
                        Daily
                    </button>
                    <button
                        onClick={(e) => onSectionClick(e)}
                        className={` hover:text-white ${selectedView.Weekly ? "text-white" : ""}`}
                        value="Weekly"
                    >
                        Weekly
                    </button>
                    <button
                        onClick={(e) => onSectionClick(e)}
                        className={` hover:text-white  ${selectedView.Monthly ? "text-white" : ""}`}
                        value="Monthly"
                    >
                        Monthly
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
