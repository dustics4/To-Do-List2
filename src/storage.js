export class Storage {
    static saveProjects(projects) {
        try {
            localStorage.setItem('projects', JSON.stringify(projects));
        } catch (error) {
            console.error('Error saving projects to local storage', error);
        }
    }

    static loadProjects() {
        try {
            const projects = JSON.parse(localStorage.getItem('projects'));
            return projects ? projects : [];
        } catch (error) {
            console.error("Error loading projects from local storage", error);
            return [];
        }
    }

    static saveTasks(projectId, tasks) {
        try {
            localStorage.setItem(`tasks_${projectId}`, JSON.stringify(tasks));
        } catch (error) {
            console.error("Error saving tasks from local storage", error);
        }
    }

    static loadTasks(projectId) {
        try {
            const tasks = JSON.parse(localStorage.getItem(`tasks_${projectId}`));
            return tasks ? tasks : [];
        } catch (error) {
            console.error("Error whilst loading tasks from local storage", error);
            return [];
        }
    }

    static removeTasks(projectId) {
        try {
            localStorage.removeItem(`tasks_${projectId}`);
        } catch (error) {
            console.error("Error removing tasks from local storage", error);
        }
    }

    static clearLocalStorage() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error("Error clearing local storage", error);
        }
    }
    static saveProjects(projects) {
        try {
            localStorage.setItem('projects', JSON.stringify(projects));
        }catch (error) {
            console.error('Error saving projects to local storage', error)
        }
       
    }

    static loadProjects() {
        try {
            const projects = JSON.parse(localStorage.getItem('projects'));
            return projects ? projects : [];
        }catch(error){
            console.error("Error loading projects from local storage", error);
            return [];
        }
       
    }

    static saveTasks(projectId, tasks) {
        try {
            localStorage.setItem(`tasks_${projectId}`, JSON.stringify(tasks));
        }catch (error){
            console.error("Error saving tasks from local storage" , error);
        }
    }

    static loadTasks(projectId) {
        try {
            const tasks = JSON.parse(localStorage.getItem(`tasks_${projectId}`));
            return tasks ? tasks : [];
        }catch(error){
            console.error("Error whilst loading tasks from local storage", error);
        }
        
    }

    static saveActiveProject(activeProjectTitle){
        try {
            localStorage.setItem('activeProject', activeProjectTitle);
        }catch(error){
            console.error("Unable to saveActiveProject from local storage", error);
        }
    }

    static loadActiveProject(){
        try{
            return localStorage.getItem('activeProject');
        }catch(error) {
            console.error("Unable to load Active project from local storage" , error);
            return null;
        }
    }

}