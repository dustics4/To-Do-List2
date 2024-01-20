import Project from './folder.js';
import Task from "./task";

export default class ToDoList {
    constructor(){
        this.projects = [];
    }

    setProjects(projects){
        this.projects = projects;
    }

    getProjects(){
        return this.projects;
    }

    getProject(projectName){
        return this.projects.find((project) => project.getTitle() === projectName);
    }

    contains(projectName){
        return this.project.some((project) => project.getTitle() === projectName);
    }

    addProject(newProject){
        if(this.projects.find((project) => project.name === newProject.name))
        return
        this.projects.push(newProject);
    }

    deleteProject(projectName){
        const projectToDelete = this.projects.find((project) => project.getTitle() === projectName);
        this.projects.splice(this.projects.indexOf(projectToDelete, 1));
    }

}