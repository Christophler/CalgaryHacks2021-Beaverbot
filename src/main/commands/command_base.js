

class CommandBase {

    constructor (names) {
        this.names = names;
    }

    run(message, args) {
        throw new Error("this command is supposed to be implemented");
    }

}

module.exports = CommandBase;