function stateBasedOnRule(response) {
    if (parseInt(response) === 1) {
        return "live";
    }

    return "dead";
}

function state(cell) {

    let cellDiv = document.getElementById(cell.id);

    return cellDiv.classList.contains("live") ? 1 : 0;
}

export default class Rules {
    static calculateStatus(rules, index, previousGeneration) {
        previousGeneration = previousGeneration.getDomRepresentation().childNodes;

        let prevSelf = previousGeneration[index];
        let leftSibling = prevSelf.previousElementSibling || previousGeneration[previousGeneration.length - 1];
        let rightSibling = prevSelf.nextElementSibling || previousGeneration[0];

        for (let i = 0; i < rules.length; i++) {
            if (state(leftSibling) == rules[i][0] && state(prevSelf) == rules[i][1] && state(rightSibling) == rules[i][2]) {
                return stateBasedOnRule(rules[i][3]);
            }
        }
    }
}