const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');
 
// Inisialisasi subject
const subject = new Subject();
 
// Inisialisasi observers
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');
 
// Menambahkan observer ke subject
subject.attach(observer1);
subject.attach(observer2);
 
// Notifikasi pertama
console.log("\n--- Notifikasi 1 ---");
subject.notify("Update terbaru: Versi 1.0");
 
// Notifikasi kedua
console.log("\n--- Notifikasi 2 ---");
subject.notify("Update terbaru: Versi 2.0");
 
// Notifikasi ketiga - observer akan unsubscribe setelah ini
console.log("\n--- Notifikasi 3 ---");
subject.notify("Update terbaru: Versi 3.0");
 
// Notifikasi keempat - seharusnya tidak ada observer yang menerima ini
console.log("\n--- Notifikasi 4 ---");
subject.notify("Update terbaru: Versi 4.0");

// Menambahkan observer1 kembali untuk menguji
console.log("\n--- Menambahkan Observer 1 kembali ---");
subject.attach(observer1);
subject.notify("Update terbaru: Versi 5.0");