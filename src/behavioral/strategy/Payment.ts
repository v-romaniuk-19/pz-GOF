// src/behavioral/strategy/Payment.ts
interface PaymentStrategy {
    pay(amount: number): void;
}

export class CreditCardPayment implements PaymentStrategy {
    pay(amount: number) { console.log(`💳 Оплачено ${amount}грн через Card.`); }
}

export class CryptoPayment implements PaymentStrategy {
    pay(amount: number) { console.log(`🪙 Оплачено ${amount}грн через Crypto.`); }
}

export class ShoppingCart {
    private strategy!: PaymentStrategy;
    setStrategy(s: PaymentStrategy) { this.strategy = s; }
    checkout(amount: number) { this.strategy.pay(amount); }
}