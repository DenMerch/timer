const refs = {
    btnStart: document.querySelector(".start"),
    btnStop: document.querySelector(".stop"),
    output: document.querySelector(".uotput"),
}

const timer = {
    intervalId: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return
        }
        const startTime = Date.now();
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const time = currentTime - startTime;
            // console.log(time);
            const timeComponents = getTimer(time);
            // console.log("🚀 ~ file: index.js:14 ~ setInterval ~ timeComponents", timeComponents)
            const timeValue = getTimer(time);
            // console.log(time);
            updateFace(timeValue)



        }, 1000)
    },

    stop() {
        clearInterval(this.intervalId)
        this.isActive = false;

    },

}

function updateFace({ hours, minutes, seconds }) {
    refs.output.textContent = `${hours}:${minutes}:${seconds}`;
}
function pad(value) {
    return String(value).padStart(2, '0');
}
function getTimer(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, minutes, seconds };
}
refs.btnStart.addEventListener("click", () => { timer.start() });
refs.btnStop.addEventListener("click", () => { timer.stop() });
