"use strict";
// COMMENTED OUT CODE IS PROMISE WAY OF DOING
let regularFunction = () => {
    return "Hello";
}
let followUpFunction = msg => {
    console.log("Follow up. Timeout returned:",msg);
}
// let timeoutFunctionPromise = msg => {
//     return new Promise(resolve => {
//         var returnMsg;
//         setTimeout(() => {
//             console.log("Input msg", msg);
//             returnMsg = msg + " Wrld";
//             console.log("timeoutFunction has constructed: ", returnMsg);
//             resolve(returnMsg)
//         }),10000;
//     })
// }
// console.log("Before any function call");
// var regularReturn = regularFunction();
// timeoutFunctionPromise(regularReturn).then((timeoutReturn) => {
//     followUpFunction(timeoutReturn);
// }); 
let oneFunction = arg => {
    return new Promise(resolve => {
        setTimeout(() => {
            var returnVal = arg;
            console.log("oneFunction produces: ", returnVal);
            resolve(returnVal);
        }, 2000);
    });
};

let twoFunction = arg => {
    return new Promise(resolve => {
        setTimeout(() => {
            var returnVal = arg + "Two";
            console.log("twoFunction produces: ", returnVal);
            resolve(returnVal);
        }, 2000);
    });
};

let threeFunction = arg => {
    return new Promise(resolve => {
        setTimeout(() => {
            var returnVal = arg + "Three";
            console.log("threeFunction produces: ", returnVal);
            resolve(returnVal);
        }, 2000);
    });
};
// THIS LOOKS LIKE HELL
let finalVal = arg => {
    return new Promise(resolve => {
        oneFunction(arg).then((val) => {
            twoFunction(val).then((val) => {
                threeFunction(val).then((val) => {
                    console.log("Final val: ", val);
                })
            })
        })
    });
}
finalVal("One");
// THIS LOOKS WAY BETTER
// async await syntax
let finalValAsync = async arg => {
    // until oneFunction returns a Promise finalValAsync will be paused    
    var one = await oneFunction(arg);
    // until twoFunction returns a Promise finalValAsync will be paused
    var two = await twoFunction(one);
    // until threeFunction returns a Promise finalValAsync will be paused
    var val = await threeFunction(two);
    console.log("Final val: ", val);
}

finalValAsync("One");