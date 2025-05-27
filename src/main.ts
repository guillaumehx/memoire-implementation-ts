import { Calculator } from './application/Calculator';

function main() {
    
    const args = process.argv.slice(2);
    if (!args || args.length === 0) {
        console.log("You should provide one or several expressions");
        process.exit();
    }
    
    const calculator = new Calculator();
    args.forEach(expr => {
        console.log(calculator.compute(expr));
    });
}

main();