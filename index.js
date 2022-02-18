class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    };

    start = () => {
        // Jumpstart the timer.
        this.tick();
        // Continue executing the tick method every second.
        this.intervalId = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.intervalId);
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            // Stop counting down if time is up.
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 1;
        };
    };

    get timeRemaining() {
        // time getter.
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        // time setter.
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton)