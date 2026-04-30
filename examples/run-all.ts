import { Database } from '../src/creational/singleton/Database';
import { RoadLogistics } from '../src/creational/factory-method/Logistics';
import { PrinterAdapter } from '../src/structural/adapter/Adapter';
import { MilkDecorator } from '../src/structural/decorator/Coffee';
import { ShoppingCart, CryptoPayment } from '../src/behavioral/strategy/Payment';
import { NewsAgency, Subscriber } from '../src/behavioral/observer/News';

console.log("--- 1. SINGLETON ---");
const db1 = Database.getInstance();
db1.query("SELECT * FROM users");

console.log("\n--- 2. FACTORY METHOD ---");
const logistics = new RoadLogistics();
logistics.planDelivery();

console.log("\n--- 3. ADAPTER ---");
const adapter = new PrinterAdapter({ printLegacy: (t) => console.log(t) } as any);
adapter.print("Hello Adapter!");

console.log("\n--- 4. DECORATOR ---");
const myCoffee = new MilkDecorator({ cost: () => 50, description: () => "Кава" });
console.log(`${myCoffee.description()} коштує ${myCoffee.cost()}грн`);

console.log("\n--- 5. STRATEGY ---");
const cart = new ShoppingCart();
cart.setStrategy(new CryptoPayment());
cart.checkout(1000);

console.log("\n--- 6. OBSERVER ---");
const agency = new NewsAgency();
agency.subscribe(new Subscriber("Олексій"));
agency.notify("Патерни GOF реалізовано!");