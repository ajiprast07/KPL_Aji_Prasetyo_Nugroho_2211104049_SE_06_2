const Observer = require('./observer');
 
class ConcreteObserver extends Observer {
    constructor(name) {
        super();
        this.name = name;
        this.notificationCount = 0;
        this.maxNotifications = 3;
        this.subject = null; // Menyimpan referensi ke subject
    }
    
    // Method untuk menyimpan referensi ke subject
    setSubject(subject) {
        this.subject = subject;
    }
 
    update(data) {
        this.notificationCount++;
        console.log(`${this.name} menerima data: ${data} (Notifikasi ke-${this.notificationCount}/${this.maxNotifications})`);
        
        // Auto-unsubscribe setelah menerima 3 notifikasi
        if (this.notificationCount >= this.maxNotifications && this.subject) {
            console.log(`${this.name} telah menerima ${this.maxNotifications} notifikasi. Unsubscribe otomatis...`);
            this.subject.detach(this);
        }
    }
}
 
module.exports = ConcreteObserver;