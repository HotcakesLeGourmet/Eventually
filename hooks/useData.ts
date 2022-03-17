import * as data from "../public/data.json";
export const getData = (setData: any) => {
    fetch("data.json", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            setData(myJson);
        });
};
