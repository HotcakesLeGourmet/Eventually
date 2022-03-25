import React from "react";

function AddTrackModal() {
    return (
        <div className="flex justify-center items-center absolute h-full w-full bg-neutral-dark_blue/50 z-50 left-0 top-0 text-white">
            <div className=" w-80 h-40 bg-primary-blue rounded-xl">
                <form className="h-full text-black flex flex-col justify-center items-center gap-y-2" > 
                    <input type="text" className="rounded-xl px-2" />
                    <select className="rounded-xl">
                        <option value="Work" >Work</option>
                        <option value="Study">Study</option>
                        <option value="Self_care">Self_car</option>
                        <option value="Social">Social</option>
                        <option value="Exercise">Exercise</option>
                        <option value="Play">Play</option>
                    </select>
                </form>
            </div>
        </div>
    );
}

export default AddTrackModal;
