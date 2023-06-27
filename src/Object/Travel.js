export class Travel {
    constructor() {
        this.id = Math.random().toString(36).substring(2) + Date.now().toString(36);
        this.description = "";
        this.title = "";
        this.image = [];
        this.startTime = new Date().getDate();
    }
}