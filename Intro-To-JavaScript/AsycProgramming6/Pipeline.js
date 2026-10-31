function deliveryStep(stepName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(stepName + " failed");
            } else {
                resolve(stepName);
            }
        }, delay);
    });
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");

        await deliveryStep("Order taken", 1500);
        console.log("Step 1: Order taken");

        await deliveryStep("Food prepared", 2000);
        console.log("Step 2: Food prepared");

        await deliveryStep("Package ready", 1000);
        console.log("Step 3: Package ready");

        await deliveryStep("Out for delivery", 1800);
        console.log("Step 4: Out for delivery");

        await deliveryStep("Delivered", 1200);
        console.log("Delivery completed!");

    } catch (error) {
        console.log("Pipeline failed!");
        console.log("Reason:", error);
    }
}

runPipeline();