// Subject (Publisher)
class Subject {
    constructor() {
        this.observers = [];
    }
 
    attach(observer) {
        console.log('Observer ditambahkan.');
        this.observers.push(observer);
        
        // Memberikan referensi subject ke observer
        if (typeof observer.setSubject === 'function') {
            observer.setSubject(this);
        }
    }
 
    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
            console.log(`Observer ${observer.name || ''} dihapus.`);
        }
    }
 
    notify(data) {
        console.log('Notifikasi ke semua observer...');
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}
 
module.exports = Subject;