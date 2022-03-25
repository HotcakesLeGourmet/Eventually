import { NextPage } from "next";
import React from "react";

const sample: NextPage = () => {
    return (
        <>
            <div className="flex flex-col bg-primary-blue min-h-screen justify-center ">
                <div className="max-w-full bg-white flex justify-center mx-8 rounded-lg">
                    <div className="md:grid md:gap-4 m-4 w-1/2 grid-cols-3 grid-rows-2 lg:text-lg text-center flex gap-2 flex-wrap justify-center">
                        <h1 className="bg-primary-work_theme activities-text">Work</h1>
                        <h1 className="bg-primary-play_theme activities-text">Play</h1>
                        <h1 className="bg-primary-study_theme activities-text">Study</h1>
                        <h1 className="bg-primary-exercise_theme activities-text">Exercise</h1>
                        <h1 className="bg-primary-social_theme activities-text text-white">Social</h1>
                        <h1 className="bg-primary-self_care_theme activities-text">Self-care</h1>
                    </div>
                </div>
                <div className="flex max-w-full justify-center py-4 m-8 bg-white rounded-lg">
                    <div className=" md:w-10/12 w-1/2 grid md:grid-cols-2  md:grid-rows-2 h-96 md:h-80 gap-2">
                        <div className="bg-neutral-pale_blue rounded-2xl flex justify-center items-center">Pale Blue</div>
                        <div className="bg-neutral-desaturated_blue rounded-2xl flex justify-center items-center text-white">Desaturated Blue</div>
                        <div className="bg-neutral-dark_blue rounded-2xl flex justify-center items-center text-white">Dark Blue </div>
                        <div className="bg-neutral-very_dark_blue rounded-2xl flex justify-center items-center text-white">Very Dark Blue </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default sample;
