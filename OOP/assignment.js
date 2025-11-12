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
