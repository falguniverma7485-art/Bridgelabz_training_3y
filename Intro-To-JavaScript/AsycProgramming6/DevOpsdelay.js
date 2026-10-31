function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server A failed");
            } else {
                resolve("Server A responded in 2 seconds");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server B failed");
            } else {
                resolve("Server B responded in 3 seconds");
            }
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then((responses) => {
        console.log("Deployment completed for all servers");
        console.log(responses);
    })
    .catch((error) => {
        console.log("Deployment error:", error);
    });

Promise.race([serverA(), serverB()])
    .then((fastest) => {
        console.log("Fastest response:", fastest);
    })
    .catch((error) => {
        console.log("First result was an error:", error);
    });