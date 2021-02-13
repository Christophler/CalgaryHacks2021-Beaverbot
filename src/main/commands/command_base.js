

class CommandBase {

    #names;

    CommandBase(names) {
        this.names = names;
    }

    run(message, args) {
        throw new Error("this command is supposed to be implemented");
    }

}

modules.exports = CommandBase;