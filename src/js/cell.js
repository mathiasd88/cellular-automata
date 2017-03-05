import DomElement from './domelement'

export default class Cell extends DomElement {
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