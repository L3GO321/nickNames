export class Validator {
    constructor(name) {
        this.name = name;
    }

    validateUsername() {
        return /^[^0-9-_][0-9]{0,3}[a-z_\d\-]+[^0-9-_]+$/i.test(this.name)
    }
}

// const e = new Validator('ssss2222-_s')

// console.log(e.validateUsername())

