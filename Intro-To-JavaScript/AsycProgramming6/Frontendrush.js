function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});

function designAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Design completed");
            resolve();
        }, 1000);
    });
}

function buildAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Build completed");
            resolve();
        }, 1000);
    });
}

function testAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Testing completed");
            resolve();
        }, 1000);
    });
}

function deployAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Deployment completed");
            resolve();
        }, 1000);
    });
}

function celebrateAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Celebration time!");
            resolve();
        }, 1000);
    });
}

async function startPipeline() {
    await designAsync();
    await buildAsync();
    await testAsync();
    await deployAsync();
    await celebrateAsync();
}

startPipeline();