export default class Rules {
    static calculateStatus(rules, index, cell, previousGeneration) {
        previousGeneration = previousGeneration.getDomRepresentation().childNodes

        let prevSelf = previousGeneration[index]
        let leftSibling = prevSelf.previousElementSibling || previousGeneration[previousGeneration.length - 1]
        let rightSibling = prevSelf.nextElementSibling || previousGeneration[0]

        if (
            state(leftSibling) == 0 &&
            state(prevSelf) == 0 &&
            state(rightSibling) == 0
        ) {
            return 'dead'
        }

        if (
            state(leftSibling) == 0 &&
            state(prevSelf) == 0 &&
            state(rightSibling) == 1
        ) {
            return 'live'
        }

        if (
            state(leftSibling) == 0 &&
            state(prevSelf) == 1 &&
            state(rightSibling) == 0
        ) {
            return 'live'
        }

        if (
            state(leftSibling) == 0 &&
            state(prevSelf) == 1 &&
            state(rightSibling) == 1
        ) {
            return 'live'
        }

        if (
            state(leftSibling) == 1 &&
            state(prevSelf) == 0 &&
            state(rightSibling) == 0
        ) {
            return 'live'
        }

        if (
            state(leftSibling) == 1 &&
            state(prevSelf) == 0 &&
            state(rightSibling) == 1
        ) {
            return 'live'
        }

        if (
            state(leftSibling) == 1 &&
            state(prevSelf) == 1 &&
            state(rightSibling) == 0
        ) {
            return 'live'
        }

        if (
            state(leftSibling) == 1 &&
            state(prevSelf) == 1 &&
            state(rightSibling) == 1
        ) {
            return 'dead'
        }

    }
}

function state(cell) {

    let cellDiv = document.getElementById(cell.id)

    return cellDiv.classList.contains('live') ? 1 : 0
}