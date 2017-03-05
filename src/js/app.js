import CellularAutomata from './cellularautomata'

let rules = {
    0: [0, 0, 0],
    1: [0, 0, 1],
    1: [0, 1, 0],
    1: [0, 1, 1],
    1: [1, 0, 0],
    1: [1, 0, 1],
    1: [1, 1, 0],
    0: [1, 1, 1],
}

let automata = new CellularAutomata('app', rules)
automata.draw()