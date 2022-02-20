class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        // The callbacks object is optional,
        // so only assign if it was provided.
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    };

    start = () => {
        // The onStart callback is optional, so check if it exists
        // before calling the callback function.
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        // Jumpstart the timer.
        this.tick();
        // Continue executing the tick method 20 milliseconds.
        this.intervalId = setInterval(this.tick, 20);
    };

    pause = () => {
        clearInterval(this.intervalId);
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            // Stop counting down if time is up.
            this.pause();
            // The onComplete callback is optional, so check if it exists
            // before calling the callback function.
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            // Since we update every 20 milliseconds, we should
            // subtract 0.02 to timeRemaining
            this.timeRemaining = this.timeRemaining - 0.02;
            // The onTick callback is optional, so check if it exists
            // before calling the callback function.
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        };
    };

    get timeRemaining() {
        // time getter.
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        // time setter.
        // Round to only 2 decimals.
        this.durationInput.value = time.toFixed(2);
    }
}
