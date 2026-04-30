// src/structural/decorator/Coffee.ts
interface Coffee {
    cost(): number;
    description(): string;
}

class SimpleCoffee implements Coffee {
    cost() { return 50; }
    description() { return "Кава"; }
}

class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}
    cost() { return this.coffee.cost(); }
    description() { return this.coffee.description(); }
}

export class MilkDecorator extends CoffeeDecorator {
    cost() { return this.coffee.cost() + 15; }
    description() { return this.coffee.description() + ", молоко"; }
}