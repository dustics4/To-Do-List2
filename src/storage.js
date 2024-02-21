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

    static saveActiveProject(activeProjectTitle) {
        localStorage.setItem("activeProjectTitle", activeProjectTitle);
    }

    static loadActiveProject() {
        return localStorage.getItem("activeProjectTitle");
    }

    static clearLocalStorage() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error("Error clearing local storage", error);
        }
    }
}