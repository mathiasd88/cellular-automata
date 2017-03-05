/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DomElement {
    constructor() {
        this.id = createUniqueId()
    }

    getId() {
        return this.id
    }

    getDomRepresentation() {
        return document.getElementById(this.id)
    }

    appendChild(node) {
        let element = this.getDomRepresentation(this.id)
        element.appendChild(node)
    }

    appendDomElement(element) {
        let node = document.getElementById(element.id)
        let thisNode = document.getElementById(this.id)

        thisNode.appendChild(node)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DomElement;


function createUniqueId() {
    return Math.random().toString(36);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rules__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generation__ = __webpack_require__(3);




class CellularAutomata {
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
        let generation = new __WEBPACK_IMPORTED_MODULE_2__generation__["a" /* default */](this.app)
        generation.create()

        for (let i = 0; i < this.size; i++) {
            let cell = new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */](generation, randomizeLife())
            cell.create()
        }

        return generation
    }

    createNextGeneration(previousGeneration) {
        let newGeneration = new __WEBPACK_IMPORTED_MODULE_2__generation__["a" /* default */](this.app)
        newGeneration.create()

        for (let i = 0; i < this.size; i++) {
            let cell = new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* default */](newGeneration)
            let newStatus = __WEBPACK_IMPORTED_MODULE_1__rules__["a" /* default */].calculateStatus(this.rules, i, cell, previousGeneration)
            cell.setStatus(newStatus)
            cell.create()
        }

        return newGeneration
    }

    draw() {
        this.process()
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CellularAutomata;


function randomizeLife()
{
    let options = ['live', 'dead']

    let random = Math.floor(Math.random() * options.length)
    
    return options[random]
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domelement__ = __webpack_require__(0);


class Cell extends __WEBPACK_IMPORTED_MODULE_0__domelement__["a" /* default */] {
    constructor(parent, status) {
        super()
        this.parent = parent        
        this.status = status
    }

    getStatus() {
        return this.status
    }

    setStatus(status) {
        this.status = status
    }

    create() {
        let cell = document.createElement('div')
        cell.classList.add('cell');
        cell.classList.add(this.status)
        cell.setAttribute('id', this.id)

        let parent = document.getElementById(this.parent.id)

        parent.appendChild(cell)

        return this
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cell;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domelement__ = __webpack_require__(0);


class Generation extends __WEBPACK_IMPORTED_MODULE_0__domelement__["a" /* default */] {
    constructor(parent) {
        super()
        this.parent = parent
    }

    create() {
        let generation = document.createElement('div')
        generation.classList.add('generation')
        generation.setAttribute('id', this.id)

        let parent = document.getElementById(this.parent.id)

        parent.appendChild(generation)

        return this
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Generation;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Rules {
    static calculateStatus(rules, index, cell, previousGeneration) {
        previousGeneration = previousGeneration.getDomRepresentation().childNodes

        let prevSelf = previousGeneration[index]
        let leftSibling = prevSelf.previousElementSibling || previousGeneration[previousGeneration.length - 1]
        let rightSibling = prevSelf.nextElementSibling || previousGeneration[0]

        for (let i = 0; i < rules.length; i++) {
            if (state(leftSibling) == rules[i][0] && state(prevSelf) == rules[i][1] && state(rightSibling) == rules[i][2]) {
                return stateBasedOnRule(rules[i][3])
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rules;


function stateBasedOnRule(response) {
    if (response == 1) {
        return 'live'
    }

    return 'dead'
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cellularautomata__ = __webpack_require__(1);


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

let automata = new __WEBPACK_IMPORTED_MODULE_0__cellularautomata__["a" /* default */]('app', rules)
automata.draw()

/***/ })
/******/ ]);