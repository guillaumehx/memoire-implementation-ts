import { BinaryOperationNode } from "../tree/BinaryOperationNode";
import { NumberNode } from "../tree/NumberNode";
import { UnaryOperationNode } from "../tree/UnaryOperationNode";

export interface NodeVisitor {
    visitNumberNode(node: NumberNode): number;
    visitBinaryOperationNode(node: BinaryOperationNode): number;
    visitUnaryOperationNode(node: UnaryOperationNode): number;
}