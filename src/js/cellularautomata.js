export default class CellularAutomata
{
    constructor(appId, rules, size = 100) {
        this.app = document.getElementById(appId)
        this.appId = appId
        this.rules = rules
        this.size = size

        this.process()
    }

    process() {
        
        // Create the first generation (with a random life state)
        let firstGeneration = this.createFirstGeneration()
        


        // For 1 ti this.size:
            // Then create another generation with a rule based life state
    }

    createCell() {
        let cell = document.createElement('div')
        cell.classList.add('cell');
        cell.classList.add(randomizeLife())
        return cell
    }

    createFirstGeneration() {
        let generation = document.createElement('div')

        this.app.appendChild(generation)

        for (let i = 1; i < this.size; i++) {
            let cell = this.createCell()
            generation.appendChild(cell)
        }

        return generation
    }

    createGeneration() {

    }


    draw() {
        
    }
}

function randomizeLife()
{
    let options = ['live', 'dead']

    let random = Math.floor(Math.random() * options.length)
    
    return options[random]
}


/*
let app = document.getElementById('app')
let generation = document.querySelector('.generation')

createGeneration()
nextGeneration()

function createCell()
{
    let cell = document.createElement('div')
    cell.classList.add('cell');
    cell.classList.add(randomizeLife())
    return cell
}

function createGeneration()
{
    for (let i = 0; i < 100; i++) {
        let cell = createCell()
        generation.appendChild(cell)
    }
}

function nextGeneration()
{
    let previousGeneration = document.querySelector('.generation')
    let newGeneration = previousGeneration.cloneNode(true)

    app.appendChild(newGeneration)
}

function randomizeLife()
{
    let options = ['live', 'dead']

    let random = Math.floor(Math.random() * options.length)
    
    return options[random]
}
*/