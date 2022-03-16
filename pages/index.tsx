import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <div className="flex flex-col h-screen justify-center">
                <div className="max-w-full flex justify-center">
                    <div className="grid gap-4 m-4 w-1/2 grid-cols-3 grid-rows-2 text-center">
                        <h1 className="bg-primary-work_theme activities-text">Work</h1>
                        <h1 className="bg-primary-play_theme activities-text">Play</h1>
                        <h1 className="bg-primary-study_theme activities-text">Study</h1>
                        <h1 className="bg-primary-exercise_theme activities-text">Exercise</h1>
                        <h1 className="bg-primary-social_theme activities-text">Social</h1>
                        <h1 className="bg-primary-self_care_theme activities-text">Self-care</h1>
                    </div>
                </div>
                <div className="flex max-w-full justify-center m-8">
                    <div className=" w-10/12 grid grid-cols-2 grid-rows-2 h-80 gap-2">
                        <div className="bg-neutral-pale_blue rounded-2xl text-center"></div>
                        <div className="bg-neutral-desaturated_blue rounded-2xl"></div>
                        <div className="bg-neutral-dark_blue rounded-2xl"></div>
                        <div className="bg-neutral-very_dark_blue rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
