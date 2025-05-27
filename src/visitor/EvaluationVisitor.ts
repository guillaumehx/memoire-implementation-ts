import { BinaryOperationNode } from '../tree/BinaryOperationNode';
import { NodeVisitor } from './NodeVisitor';
import { NumberNode } from '../tree/NumberNode';
import { UnaryOperationNode } from '../tree/UnaryOperationNode';

export class EvaluationVisitor implements NodeVisitor {
    
    visitNumberNode(node: NumberNode): number {
        return node.getValue();
    }

    visitBinaryOperationNode(node: BinaryOperationNode): number {
        const left = node.getLeft().accept(this);
        const right = node.getRight().accept(this);
        switch (node.getOperator()) {
            case '+': return left + right;
            case '-': return left - right;
            case '*': return left * right;
            case '/': return left / right;
            case '^': return Math.pow(left, right);
            default: throw new Error(`Bad input : ${node.getOperator()}`);
        }
    }

    visitUnaryOperationNode(node: UnaryOperationNode): number {
        const operand = node.getOperand().accept(this);
        switch (node.getOperator()) {
            case 'sqrt': return Math.sqrt(operand);
            default: throw new Error(`Bad input : ${node.getOperator()}`);
        }
    }
}