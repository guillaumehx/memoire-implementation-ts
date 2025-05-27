import { ExpressionNode } from '../tree/ExpressionNode';
import { NumberNode } from '../tree/NumberNode';
import { BinaryOperationNode } from '../tree/BinaryOperationNode';
import { ShuntingYard } from './ShuntingYard';

export class ExpressionParser {
    parse(expression: string): ExpressionNode {
        const outputQueue = ShuntingYard.infixToRPN(expression);
        const stack: Array<ExpressionNode> = [];

        for (const item of outputQueue) {
            if (typeof item === 'number') {
                stack.push(new NumberNode(item));
            } else if (item in ShuntingYard.precedence) {
                const right = stack.pop()!;
                const left = stack.pop()!;
                stack.push(new BinaryOperationNode(item, left, right));
            }
        }

        if (stack.length !== 1) {
            throw new Error("Invalid expression");
        }
        return stack.pop()!;
    }
}
