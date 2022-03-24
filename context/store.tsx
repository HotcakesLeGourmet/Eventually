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
const initialState = { count: 0 };

export function tracksReducer(state: any, action: any) {
    switch (action.type) {
        case "delete":
            const currentStorage = JSON.parse(localStorage.getItem("tracks") as string);
            const newStorage = currentStorage.filter((track: any) => track.title != "Work");
            localStorage.setItem("tracks", JSON.stringify(newStorage));
            return [...state, ...newStorage];
        case "add":
            return getData();
        default:
            throw new Error();
    }
}

export const CurrentView = React.createContext({
    view: "weekly",
    setView: (content: string) => {},
});
