import Project from './folder.js';
import Task from "./task";

export default class ToDoList {
    constructor(){
        this.projects = [];
    }

    setProjects(projects){
        this.projects = projects;
        console.log(projects);
    }

    getProjects(){
        return this.projects;
    }

    getProject(projectName){
        return this.projects.find((project) => project.getTitle())
    }
}