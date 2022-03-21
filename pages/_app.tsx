import "../styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { AllTracks } from "../context/store";
import { CurrentView } from "../context/store";
import { getData } from "../hooks/useData";

function MyApp({ Component, pageProps }: AppProps) {
    const [view, setView] = useState("weekly");
    const tracks = getData();
    return (
        <AllTracks.Provider value={tracks}>
            <CurrentView.Provider value={{ view, setView }}>
                <Component {...pageProps} />
            </CurrentView.Provider>
        </AllTracks.Provider>
    );
}

export default MyApp;
