import Cell from "./cell";
import Rules from "./rules";
import Generation from "./generation";

function randomizeLife() {
    let options = ["live", "dead"];

    let random = Math.floor(Math.random() * options.length);

    return options[random];
}

export default class CellularAutomata {
    constructor(appId, rules, height = 100, width = 100) {
        this.app = document.getElementById(appId);
        this.appId = appId;
        this.rules = rules;
        this.height = height;
        this.width = width;
    }

    process() {
        // Creates the first generation (with a random life state)
        let generation = this.createFirstGeneration();

        // Creates next generations (rule based life status)
        for (let i = 0; i < this.height; i++) {
            generation = this.createNextGeneration(generation);
        }
    }

    createFirstGeneration() {
        let generation = new Generation(this.app);
        generation.create();

        for (let i = 0; i < this.width; i++) {
            let cell = new Cell(generation, randomizeLife());
            cell.create();
        }

        return generation;
    }

    createNextGeneration(previousGeneration) {
        let newGeneration = new Generation(this.app);
        newGeneration.create();

        for (let i = 0; i < this.width; i++) {
            let newStatus = Rules.calculateStatus(this.rules, i, previousGeneration);
            let cell = new Cell(newGeneration, newStatus);
            cell.create();
        }

        return newGeneration;
    }

    draw() {
        this.process();
    }
}