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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CellularAutomata
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
/* harmony export (immutable) */ __webpack_exports__["a"] = CellularAutomata;


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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cellularautomata__ = __webpack_require__(0);


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

let automata = new __WEBPACK_IMPORTED_MODULE_0__cellularautomata__["a" /* default */]('app', rules)
automata.draw()

/***/ })
/******/ ]);