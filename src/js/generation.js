import DomElement from './domelement'

export default class Generation extends DomElement {
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