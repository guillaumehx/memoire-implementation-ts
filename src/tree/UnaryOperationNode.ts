import { ExpressionNode } from './ExpressionNode';
import { NodeVisitor } from '../visitor/NodeVisitor';

export class UnaryOperationNode extends ExpressionNode {
    
    private operator: string;
    private operand: ExpressionNode;

    constructor(operator: string, operand: ExpressionNode) {
        super();
        this.operator = operator;
        this.operand = operand;
    }

    getOperator(): string {
        return this.operator;
    }

    getOperand(): ExpressionNode {
        return this.operand;
    }

    accept(visitor: NodeVisitor): number {
        return visitor.visitUnaryOperationNode(this);
    }
}