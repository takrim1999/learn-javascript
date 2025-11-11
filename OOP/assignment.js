// Creating a StopWatch

function StopWatch(){
    this.time = 0;
    this.flag = false;
    this.start = function (){
        this.flag = true;
    }
    this.stop = function (){
        this.flag = false;
    }
    this.reset = function (){
        this.time = 0;
    }
    this.duration = function (){
        console.log("time: " + this.time/60);
    }
    while (this.flag===true){
        this.time++;
    }
}

sw = new StopWatch();
sw.start();
sw.stop();
sw.duration();