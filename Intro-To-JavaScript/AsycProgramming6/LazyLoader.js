function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Profile Loaded");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Posts loading failed");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Messages Loaded");
        }, 1000);
    });
}

async function loadDashboard() {
    let startTime = Date.now();

    let results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    let endTime = Date.now();

    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Failed:", result.reason);
        }
    });

    console.log("Total time:", (endTime - startTime) / 1000, "seconds");
}

loadDashboard();