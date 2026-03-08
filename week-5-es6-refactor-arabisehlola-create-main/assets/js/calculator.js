// Calculator Main Logic

import { calculate, formatNumber } from "./utilities.js";

const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const buttons = document.querySelectorAll('.btn');

class Calculator {
    constructor() {
        this.display = display;
        this.clearBtn = clearBtn;
        this.buttons = buttons;
        
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        
        this.init();
    }
    
    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleButtonClick(e));
        });
        
        this.clearBtn.addEventListener('click', () => this.clear());
    }
    
    handleButtonClick(e) {
        const btn = e.target;
        const value = btn.getAttribute('data-value');
        
        if (btn.classList.contains('clear')) {
            this.clear();
        } else if (btn.classList.contains('operator')) {
            this.handleOperator(value);
        } else if (btn.classList.contains('equals')) {
            this.handleEquals();
        } else {
            this.handleNumber(value);
        }
    }
    
    handleNumber(num) {
        if (this.shouldResetDisplay) {
            this.currentValue = num;
            this.shouldResetDisplay = false;
        } else {
            this.currentValue = this.currentValue === '0' ? num : this.currentValue + num;
        }
        this.updateDisplay();
    }
    
    handleOperator(op) {
        if (this.operation !== null && !this.shouldResetDisplay) {
            this.handleEquals();
        }
        
        this.previousValue = this.currentValue;
        this.operation = op;
        this.shouldResetDisplay = true;
    }
    
    handleEquals() {
        if (this.operation === null || this.shouldResetDisplay) {
            return;
        }
        
        try {
            const result = calculate(
                parseFloat(this.previousValue),
                this.operation,
                parseFloat(this.currentValue)
            );
            
            this.currentValue = formatNumber(result);
            this.operation = null;
            this.shouldResetDisplay = true;
            this.updateDisplay();
        } catch (error) {
            this.display.value = 'Error';
            this.currentValue = '0';
        }
    }
    
    clear() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
    }
    
    updateDisplay() {
        this.display.value = this.currentValue;
    }
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Calculator({ display, clearBtn, buttons});
});
