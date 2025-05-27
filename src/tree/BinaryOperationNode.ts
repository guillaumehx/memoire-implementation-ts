import { ExpressionNode } from './ExpressionNode';
import { NodeVisitor } from '../visitor/NodeVisitor';

export class BinaryOperationNode extends ExpressionNode {
    
    private operator: string;
    private left: ExpressionNode;
    private right: ExpressionNode;

    constructor(operator: string, left: ExpressionNode, right: ExpressionNode) {
        super();
        this.operator = operator;
        this.left = left;
        this.right = right;
    }

    getOperator(): string {
        return this.operator;
    }

    getLeft(): ExpressionNode {
        return this.left;
    }

    getRight(): ExpressionNode {
        return this.right;
    }

    accept(visitor: NodeVisitor): number {
        return visitor.visitBinaryOperationNode(this);
    }
}