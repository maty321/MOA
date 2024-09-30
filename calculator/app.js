if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function calculate() {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const operation = document.getElementById('operation').value;
    var result;

    if (isNaN(operand1) || isNaN(operand2)) {
        result = "Zadejte prosím platná čísla.";
    } else if((operand2 == 0) && (operation == 'divide')) {
        result = "Nelze dělit nulou";
    } else {
        switch (operation) {
            case 'add':
                result = operand1 + operand2;
                break;
            case 'subtract':
                result = operand1 - operand2;
                break;
            case 'multiply':
                result = operand1 * operand2;
                break;
            case 'divide':
                result = operand1 / operand2;
                break;
            default:
                result = "Neznámá operace";
        }
    }

    document.getElementById('result').innerText = "Výsledek: " + result;
}