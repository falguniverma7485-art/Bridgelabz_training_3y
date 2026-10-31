function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Water is boiled");

            if (Math.random() < 0.15) {
                reject("Water boiling failed");
            } else {
                resolve();
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Coffee is brewed");

            if (Math.random() < 0.15) {
                reject("Coffee brewing failed");
            } else {
                resolve();
            }
        }, 2000);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Coffee poured into the cup");

            if (Math.random() < 0.15) {
                reject("Pouring coffee failed");
            } else {
                resolve();
            }
        }, 1000);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });