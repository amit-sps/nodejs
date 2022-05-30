const EventEmitter=require("events")
console.log("EventEmitter............");
const event=new EventEmitter()

event.once("event1",()=>{
    console.log("welcome!")
})
event.on("event1",()=>{
    console.log("Event No 1 Called!")
})

// Event with parameter.....................
event.on("eventWithParameter",(a,b)=>{
    console.log(`${a} + ${b} = ${a+b}`)
})



console.log("***********Event1 First Call*************")
event.emit("event1");
console.log("***********Event1 Second Call*************")
event.emit("event1");

console.log("EventWithParameter First call")
event.emit("eventWithParameter",5,7)
console.log("EventWithParameter Second call")
event.emit("eventWithParameter",10,7)