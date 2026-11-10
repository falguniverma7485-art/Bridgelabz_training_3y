"use strict";

class FitnessAnalytics {
    constructor(workoutData) {
        this.workoutData = workoutData;
    }

    getActiveUsers() {
        return this.workoutData.filter(function(person) {
            return person.steps > 7000;
        });
    }

    getAverageCalories() {
        let total = this.workoutData.reduce(function(sum, person) {
            return sum + person.calories;
        }, 0);

        return total / this.workoutData.length;
    }

    getUserSummary() {
        return this.workoutData.map(function(person) {
            return person.user + " walked " + person.steps +
                " steps and burned " + person.calories + " calories";
        });
    }
}

let workoutData = [
    { user: "Niyati", steps: 8600, calories: 340 },
    { user: "Arnav", steps: 12000, calories: 510 },
    { user: "Tavishi", steps: 4300, calories: 210 }
];

try {
    if (workoutData.length === 0) {
        throw new Error("Workout dataset is empty");
    }

    let fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(fitness.getActiveUsers());

    console.log("Average Calories:", fitness.getAverageCalories());

    console.log("User Summary:");
    fitness.getUserSummary().forEach(function(summary) {
        console.log(summary);
    });

} catch (error) {
    console.log("Error:", error.message);
}