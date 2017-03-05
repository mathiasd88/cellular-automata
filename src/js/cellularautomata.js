import Cell from './cell'
import Rules from './rules'
import Generation from './generation'

export default class CellularAutomata {
    constructor(appId, rules, size = 100) {
        this.app = document.getElementById(appId)
        this.appId = appId
        this.rules = rules
        this.size = size
    }

    process() {
        // Creates the first generation (with a random life state)
        let generation = this.createFirstGeneration()

        // Creates next generations (rule based life status)
        for (let i = 0; i < this.size; i++) {
            generation = this.createNextGeneration(generation)
        }
    }

    createFirstGeneration() {
        let generation = new Generation(this.app)
        generation.create()

        for (let i = 0; i < this.size; i++) {
            let cell = new Cell(generation, randomizeLife())
            cell.create()
        }

        return generation
    }

    createNextGeneration(previousGeneration) {
        let newGeneration = new Generation(this.app)
        newGeneration.create()

        for (let i = 0; i < this.size; i++) {
            let cell = new Cell(newGeneration)
            let newStatus = Rules.calculateStatus(this.rules, i, cell, previousGeneration)
            cell.setStatus(newStatus)
            cell.create()
        }

        return newGeneration
    }

    draw() {
        this.process()
    }
}

function randomizeLife()
{
    let options = ['live', 'dead']

    let random = Math.floor(Math.random() * options.length)
    
    return options[random]
}