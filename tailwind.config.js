function withOpacityValue(variable) {
    return ({ opacityValue }) => {
        if (opacityValue === undefined) {
            return `rgb(var(${variable}))`;
        }
        return `rgb(var(${variable}) / ${opacityValue})`;
    };
}
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: withOpacityValue("--primary-Blue"),
                    work_theme: withOpacityValue("--primary-Light-red-work"),
                    play_theme: withOpacityValue("--primary-Soft-blue-play"),
                    study_theme: withOpacityValue("--primary-Light-red-study"),
                    exercise_theme: withOpacityValue("--primary-Lime-green-exercise"),
                    social_theme: withOpacityValue("--primary-Violet-social"),
                    self_care_theme: withOpacityValue("--primary-Soft-orange-self-care"),
                },
                neutral: {
                    very_dark_blue: withOpacityValue("--neutral-Very-dark-blue"),
                    dark_blue: withOpacityValue("--neutral-Dark-blue"),
                    desaturated_blue: withOpacityValue("--neutral-Desaturated-blue"),
                    pale_blue: withOpacityValue("--neutral-Pale-Blue"),
                },
            },
            animation: {
                "single-pulse": "fadeInText 1s linear 1",
                "deleting-track": "fadeOutTrack 1s linear 1"
            },
            keyframes: {
                fadeInText: {
                    "0%": { opacity: 0 },
                    "50%": { opacity: 0.5 },
                    "100%": { opacity: 1 },
                },
                fadeOutTrack : {
                    "0%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                    "95%": { opacity: 0 },
                }
            },
            screens: {
                'md': '660px',
                // => @media (min-width: 992px) { ... }
              },
        },
    },
    plugins: [],
};
