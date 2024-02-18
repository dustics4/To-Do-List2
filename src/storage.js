export class Storage {
    static saveProjects(projects) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static loadProjects() {
        const projects = JSON.parse(localStorage.getItem('projects'));
        return projects ? projects : [];
    }

}