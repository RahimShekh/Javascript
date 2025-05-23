//Tricky question

function timeout(){
    console.log("Inside timeout");
}

console.log("hello");

setTimeout(timeout,10000);

console.log("welcome to the loops");

let c = 0;
for(let i = 0; i < 1000000; i++)
{
    c = c +1;                    //This is a CPU-intensive synchronous operation.
}

console.log("Extensive operation done");

// ans =    hello
//welcome to the loops
//extensive operation done 
// inside timeout

/*
setimeout last mein run hoga kyuki thread is busy doing the task.
setTimeout uses the Web API to handle the delay timer in the browser or Node.js environment.
After 10 seconds, the timeout callback is pushed to the task queue.
It waits until the call stack is empty before being executed.

website to check : JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHN
ldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24h
Jyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29
uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7

*/
