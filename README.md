# CELLULAR AUTOMATA IN JS

## Getting Started

```javascript

let automata = new CellularAutomata(parentId, rules)
```
+ **parentId** is the id of the element where the automata will be contained
+ **rules** is an array which represents the rules of the automata based

```javascript

automata.draw()
```
The **draw()** method will show tha automata inside the element with the **parentId** in screen.

###Rules structure:
[Left Neighbour, Previous Cell, Right Neighbour, New State for the Cell]

####Example:
For the first rule in:
![](http://atlas.wolfram.com/01/01/126/01_01_4_126.gif)

The first array of rules will be:
[1, 1, 1, 0]

+ The first element (1): Represents the state of the left neighbour of the cell in the previous generation (in this case is alive = 1)
+ The second element (1): Represents the state of the same cell in the previous generation (in this case is alive = 1 )
+ The third element (1): Represents the state of the lefright neighbour of the cell in the previous generation (in this case is alive = 1)
+ The last element (0): Represents the state of the cell in the new generation (in this case is dead = 0)


## Usage
```javascript

// Import class
import CellularAutomata from './cellularautomata'

// Set the rules of your automata
let rules = [
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
]

// Create a new automata object
let automata = new CellularAutomata('app', rules)
// and draw it in the screen
automata.draw()
```

## The result

![](https://cloud.githubusercontent.com/assets/2658267/23589467/70150b9c-01ac-11e7-89d1-9b06751ae864.png)
