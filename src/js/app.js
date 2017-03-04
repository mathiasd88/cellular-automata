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
