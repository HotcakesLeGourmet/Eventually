import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { AllTracks, CurrentView } from "../context/store";
import GlobalStateProvider from "../components/GlobalStateProvider";
import { getData } from "../hooks/useData";
function MyApp({ Component, pageProps }: AppProps) {
    const [view, setView] = useState("weekly");
    const [tracks, setTracks] = useState(getData());
    useEffect(() => {
        const getTasks = JSON.parse(localStorage.getItem("tracks") as string);
        if (getTasks == null) {
            setTracks([]);
        } else {
            setTracks(getTasks);
        }
    }, []);
    return (
        <AllTracks.Provider value={{ tracks, setTracks }}>
            <CurrentView.Provider value={{ view, setView }}>
                <Component {...pageProps} />
            </CurrentView.Provider>
        </AllTracks.Provider>
    );
}

export default MyApp;
