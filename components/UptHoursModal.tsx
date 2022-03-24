import React, { useState, useRef, useContext } from "react";
import { AllTracks, CurrentView } from "../context/store";
function UptHoursModal({ time, id }: { time: any; id: any }) {
    const { tracks, setTracks } = useContext(AllTracks);
    const { view } = useContext(CurrentView);
    const [count, setCount] = useState(0);
    const updateCurrentHours = (operation: boolean) => {
        const updatedTracks = tracks.map((track) =>
            track.id === id
                ? {
                      ...track,
                      timeframes: {
                          ...track.timeframes,
                          //@ts-expect-error
                          [view]: { ...track.timeframes[view], current: operation ? 
                            //@ts-expect-error
                            track.timeframes[view].current + count < 25 ? track.timeframes[view].current + count : 24
                            //@ts-expect-error
                            : track.timeframes[view].current - count >= 0 ? track.timeframes[view].current - count : 0 },
                      },
                  }
                : track
        );
        localStorage.setItem("tracks", JSON.stringify(updatedTracks));
        setTracks(updatedTracks);
    };
    const intervalRef = useRef(null);
    const INTERVAL = 100;
    const increaseCount = (prevCount: number) => {
        if (prevCount + 1 > 24) {
            return 24;
        }
        return prevCount + 1;
    };
    const decreaseCount = (prevCount: number) => {
        if (prevCount - 1 <= 0) {
            return 0;
        }
        return prevCount - 1;
    };

    const startAddCounter = () => {
        if (intervalRef.current) return;
        //@ts-expect-error
        intervalRef.current = setInterval(() => {
            setCount(increaseCount);
        }, INTERVAL);
    };
    const startDecreaseCounter = () => {
        if (intervalRef.current) return;
        //@ts-expect-error
        intervalRef.current = setInterval(() => {
            setCount(decreaseCount);
        }, INTERVAL);
    };

    const stopCounter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);

            intervalRef.current = null;
        }
    };

    React.useEffect(() => {
        return () => stopCounter(); // when App is unmounted we should stop counter
    }, []);
    const onAdd = () => {
        updateCurrentHours(true)
        setCount(0);
    };
    const onRemove = () => {
        updateCurrentHours(false)
        setCount(0);
    };
    

    return (
        <div
            className="absolute flex justify-center items-center top-10 -right-0 z-50 cursor-default"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <div className=" flex  flex-col gap-y-2 w-40 h-30 bg-primary-blue  rounded-lg p-4 ">
                <div className="text-center text-white font-medium">Add hours </div>
                <div className="text-center text-xs">Current hours: {time} </div>
                <div>
                    <div className="flex justify-center items-end h-auto w-full  ">
                        <div className="flex text-3xl bg-white h-1/4 rounded-md">
                            <button
                                className="w-8 bg-neutral-dark_blue text-neutral-pale_blue  rounded-l-md"
                                onClick={(e) => {
                                    setCount(increaseCount);
                                }}
                                onMouseDown={startAddCounter}
                                onMouseUp={stopCounter}
                                onMouseLeave={stopCounter}
                            >
                                +
                            </button>
                            <input
                                className="text-center text-white bg-neutral-dark_blue w-8 text-sm"
                                type="text"
                                value={count}
                                maxLength={2}
                                min={0}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    //@ts-expect-error
                                    if (!isNaN(newValue)) {
                                        setCount(Number(newValue));
                                    }
                                }}
                            />
                            <button
                                className="w-8 bg-neutral-dark_blue text-neutral-pale_blue rounded-r-md "
                                onClick={(e) => {
                                    setCount(decreaseCount);
                                }}
                                onMouseDown={startDecreaseCounter}
                                onMouseUp={stopCounter}
                                onMouseLeave={stopCounter}
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around">
                    <button className="   hover:bg-neutral-pale_blue hover:text-neutral-desaturated_blue text-white rounded-md px-2" onClick={() => onAdd()}>
                        Add
                    </button>
                    <button className="  hover:bg-neutral-pale_blue hover:text-neutral-desaturated_blu text-white rounded-md px-2" onClick={() => onRemove()}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UptHoursModal;
