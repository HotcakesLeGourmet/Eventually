import React from "react";
import { getData } from "../hooks/useData";

export const AllTracks = React.createContext({
    tracks: [
        {
            id: 99999999999,
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
        },
    ],
    setTracks: (tracks: any) => {},
});

export const CurrentView = React.createContext({
    view: "weekly",
    setView: (content: string) => {},
});
