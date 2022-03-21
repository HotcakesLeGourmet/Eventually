import React, { useState, useContext } from "react";
import { CurrentView } from "../context/store";
function UserCard() {
    const defaultView = {
        daily: false,
        weekly: false,
        monthly: false,
    };
    const { view, setView } = useContext(CurrentView);
    const [selectedView, setselectedView] = useState({ ...defaultView, weekly: true });
    const onSectionClick = (e: any) => {
        const activeView = e.target.value;
        setselectedView({ ...defaultView, [activeView]: true });
        setView(activeView)
    };
    
    return (
        <div className="lg:flex lg:items-center lg:justify-center sm: w-[330px] mt-4 lg:h-full ">
            <div className="flex lg:h-[22rem]  flex-col h-44 bg-neutral-dark_blue rounded-2xl relative">
                <div className=" flex justify-center items-center w-full text-center bg-primary-blue text-white rounded-2xl h-4/6 z-10">
                    <div className="grid grid-cols-3 grid-rows-2 gap-x-4 text-left lg:flex lg:flex-col lg:gap-y-4 lg:items-start lg:m-4 lg:w-4/6">
                        <div className=" flex justify-end  items-center row-start-1 row-end-3 lg: ">
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
                <div className="flex justify-around flex-grow  items-center text-neutral-pale_blue lg:flex-col">
                    <button
                        onClick={(e) => onSectionClick(e)}
                        className={` hover:text-white  ${selectedView.daily ? "text-white" : ""}`}
                        value="daily"
                    >
                        Daily
                    </button>
                    <button
                        onClick={(e) => onSectionClick(e)}
                        className={` hover:text-white ${selectedView.weekly ? "text-white" : ""}`}
                        value="weekly"
                    >
                        Weekly
                    </button>
                    <button
                        onClick={(e) => onSectionClick(e)}
                        className={` hover:text-white  ${selectedView.monthly ? "text-white" : ""}`}
                        value="monthly"
                    >
                        Monthly
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
