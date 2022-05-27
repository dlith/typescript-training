import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach;
let myGolfCouach = new GolfCoach;

let theCoaches: Coach[] = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCouach);


for(let tmpCoach of theCoaches){
    console.log(tmpCoach.getDailyWorkout());
}