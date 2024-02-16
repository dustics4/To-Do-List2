//creating a local storage for the project so far
const Storage = {
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(        localStorage.setItem(key, JSON.stringify(data)))
    },

    load(key) {
        const data = localStorage.getItem(key);
        console.log( data ? JSON.parse(data) : null);
        return data ? JSON.parse(data) : null;
    }
};

export default Storage;