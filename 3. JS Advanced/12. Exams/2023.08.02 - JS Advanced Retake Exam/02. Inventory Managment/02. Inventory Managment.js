class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (this.items.length >= this.capacity) {
            throw new Error("The inventory is already full.");
        }

        let existingItemIndex = this.items.findIndex(item => item.name === itemName);
        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity += quantity;
        } else {
            this.items.push({ name: itemName, quantity: quantity });
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        let item = this.items.find(item => item.name === itemName);
        if (!item) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        if (item.quantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        item.quantity -= quantity;
        if (item.quantity === 0) {
            this.items = this.items.filter(item => item.name !== itemName);
            this.outOfStock.push(itemName);
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        let existingItemIndex = this.items.findIndex(item => item.name === itemName);
        if (existingItemIndex !== -1) {
            this.items[existingItemIndex].quantity += quantity;
        } else {
            this.items.push({ name: itemName, quantity: quantity });
        }

        if (this.outOfStock.includes(itemName)) {
            this.outOfStock = this.outOfStock.filter(item => item !== itemName);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let summary = "Current Inventory:\n";
        this.items.forEach(item => {
            summary += `${item.name}: ${item.quantity}\n`;
        });

        if (this.outOfStock.length > 0) {
            summary += `Out of Stock: ${this.outOfStock.join(", ")}\n`;
        }

        return summary.trim();
    }
}

// Example usage:

// Input 4
const manager = new InventoryManager(3);
console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
