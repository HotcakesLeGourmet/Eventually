import React from "react";

export const AllTracks = React.createContext([
    {
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
]);
export const CurrentView = React.createContext({
    view: "weekly",
    setView: (content: string) => {},
});
