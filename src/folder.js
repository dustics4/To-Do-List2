class Folder {
    constructor(name){
        this.name = name;
    }
}

class Tasks {
    constructor(name,date,priority,description){
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.description = description;
    }
}

export{Folder , Tasks};