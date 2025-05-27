import { NodeVisitor } from "../visitor/NodeVisitor";

export abstract class ExpressionNode {
    abstract accept(visitor: NodeVisitor): number;
}