function createUniqueId() {
    return Math.random().toString(36);
}

export default class DomElement {
    constructor() {
        this.id = createUniqueId();
    }

    getId() {
        return this.id;
    }

    getDomRepresentation() {
        return document.getElementById(this.id);
    }

    appendChild(node) {
        let element = this.getDomRepresentation(this.id);
        element.appendChild(node);
    }

    appendDomElement(element) {
        let node = document.getElementById(element.id);
        let thisNode = document.getElementById(this.id);

        thisNode.appendChild(node);
    }
}