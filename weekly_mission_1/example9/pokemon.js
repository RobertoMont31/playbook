export default class Pokemon {
    constructor (name) {
        this.name = name
    }

    sayHello () {
        console.log(`Mi Pokemon ${this.name} te saluda !!!`)
    }

    sayMessage(msg) {
        console.log(`Mi Pokemon ${this.name} dice: ${msg}`)
    }
}