//creating a local storage for the project so far
const Storage = {
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`Data saved to ${key}:`, data);
    },

    load(key) {
        const data = localStorage.getItem(key);
        console.log(`Data loaded from ${key}:`, data);
        if (data != null) {
            console.log(`Data loaded from ${key}:`, JSON.parse(data));
            return JSON.parse(data);
        } else {
            console.log(`No data found in ${key}`);
            return null;
        }
    }
};

export default Storage;