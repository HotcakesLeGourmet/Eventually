import React from "react";

function UserCard() {
    return (
        <div className="">
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
                    <div>Daily</div>
                    <div className=" text-white">Weekly</div>
                    <div>Monthly</div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
