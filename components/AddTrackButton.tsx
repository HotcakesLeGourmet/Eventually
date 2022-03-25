import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AllTracks } from "../context/store";
import AddTrackModal from "./AddTrackModal";
function AddTrackButton() {
    const { tracks, setTracks } = useContext(AllTracks);
    const [toggleModal, setToggleModal] = useState(false);
    const onAddTrack = () => {
        const newTrack = {
            id: uuidv4(),
            title: "Work",
            timeframes: {
                daily: {
                    current: 0,
                    previous: 0,
                },
                weekly: {
                    current: 0,
                    previous: 0,
                },
                monthly: {
                    current: 0,
                    previous: 0,
                },
            },
        };
        const currentStorage = JSON.parse(localStorage.getItem("tracks") as string);
        if (currentStorage.length >= 6 ){
            alert(" You a max. of 6 tracks")
            return;
        }
        const newStorage = [...currentStorage, newTrack];
        localStorage.setItem("tracks", JSON.stringify(newStorage));
        setTracks(newStorage);
    };
    return (
        <>
            <button className="text-white text-lg" onClick={() => setToggleModal((prevState)=> !prevState) }>
                +
            </button>
            {toggleModal ? <AddTrackModal /> : null}
        </>
    );
}

export default AddTrackButton;
