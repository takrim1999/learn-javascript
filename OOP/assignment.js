// Creating a StopWatch
function StopWatch(){
    let value = 0;
    let running = false;
    let startTime = 0;
    let endTime = 0;

    this.start = function (){
        if (running){
            return "Already Running!";
        }
        else{
            if (startTime===0){
                startTime = new Date();
                }
            running = true;
        }
    }

    this.stop = function (){
        if (!running){
            return "Not Started!";
        }
        else{
            endTime = new Date();
            running = false;
        }
    }

    this.show = function (){
        value = (endTime - startTime);
        return value/1000;
    }

    this.reset = function (){
        startTime = 0;
        endTime = 0;
    }
}

const stopwatch = new StopWatch();
title = document.getElementsByTagName("h1")[0];
display = document.getElementById("display");
startButton = document.getElementsByName("start")[0];
stopButton = document.getElementsByName("stop")[0];
resetButton = document.getElementsByName("reset")[0];
// console.log(display);
// console.log(title);
// console.log(startButton);
display.value = stopwatch.show();
startButton.onclick(function (){
    let message = stopwatch.start();
    if (message){
        title.innerText = message;
    }
}
)