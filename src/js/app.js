export default class Settings {
    constructor() {
        this.default = new Map([
            [
                'theme', 'dark'
            ],[
                'music', 'trance'
            ],[
                'difficulty', 'easy'
            ]
        ]);
        this.custom = new Map();
    }
    customization(key, value) {
        this.custom.set(key, value);
    }
    settings() {
        const settings = new Map();
        this.default.forEach((value, key) => {
            settings.set(key, value);
        });
        this.custom.forEach((value, key) => {
            if(settings.has(key)) {
                settings.delete(key);
                settings.set(key, value);
            }
        });
        return settings;
    }
}