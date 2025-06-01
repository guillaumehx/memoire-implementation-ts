export class ShuntingYard {
    
    public static precedence: { [op: string]: number } = {
        '+': 1, '-': 1, '*': 2, '/': 2, '^': 4
    };

    static infixToRPN(expression: string): (string | number)[] {
        
        expression = this.preprocess(expression);
        
        const outputQueue: (string | number)[] = [];
        const operatorStack: string[] = [];

        const tokens = expression.match(/\d+|\+|\-|\*|\/|\^|\(|\)/g);
        if (!tokens) {
            throw new Error("Invalid expression");
        }

        for (const token of tokens) {
            if (/^\d+$/.test(token)) {
                outputQueue.push(parseInt(token, 10));
            } else if (token in this.precedence) {
                while (operatorStack.length > 0 &&
                    operatorStack[operatorStack.length - 1] !== '(' &&
                    (
                        this.precedence[operatorStack[operatorStack.length - 1]] > this.precedence[token] ||
                        (this.precedence[operatorStack[operatorStack.length - 1]] === this.precedence[token] && token !== '^')
                    )
                ) {
                    outputQueue.push(operatorStack.pop()!);
                }
                operatorStack.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
                    outputQueue.push(operatorStack.pop()!);
                }
                operatorStack.pop();
            }
        }

        while (operatorStack.length > 0) {
            outputQueue.push(operatorStack.pop()!);
        }

        return outputQueue;
    }

    private static preprocess(expression: string): string {
        return expression
            .replace(/\s+/g, '')
            .replace(/(\d)(\()/g, '$1*$2')
            .replace(/(\))(\d)/g, '$1*$2')
            .replace(/(\))(\()/g, '$1*$2');
    }
}