// src/structural/adapter/Adapter.ts
class OldPrinter {
    printLegacy(text: string) { console.log(`🖨️ Legacy Print: ${text}`); }
}

interface ModernPrinter {
    print(text: string): void;
}

export class PrinterAdapter implements ModernPrinter {
    constructor(private oldPrinter: OldPrinter) {}

    print(text: string): void {
        // Адаптуємо метод
        this.oldPrinter.printLegacy(text);
    }
}