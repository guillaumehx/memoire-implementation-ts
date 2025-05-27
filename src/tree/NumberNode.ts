import { ExpressionNode } from './ExpressionNode';
import { NodeVisitor } from '../visitor/NodeVisitor';

export class NumberNode extends ExpressionNode {
    
    private value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    accept(visitor: NodeVisitor): number {
        return visitor.visitNumberNode(this);
    }
}