// src/creational/factory-method/Logistics.ts
interface Transport {
    deliver(): void;
}

class Truck implements Transport {
    deliver() { console.log("🚛 Доставка вантажівкою по дорозі."); }
}

class Ship implements Transport {
    deliver() { console.log("🚢 Доставка кораблем морем."); }
}

abstract class Logistics {
    public abstract createTransport(): Transport;

    public planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

export class RoadLogistics extends Logistics {
    public createTransport(): Transport { return new Truck(); }
}

export class SeaLogistics extends Logistics {
    public createTransport(): Transport { return new Ship(); }
}