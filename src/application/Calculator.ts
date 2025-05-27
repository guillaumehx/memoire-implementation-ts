import { ExpressionParser } from '../parser/ExpressionParser';
import { EvaluationVisitor } from '../visitor/EvaluationVisitor';
import { ExpressionNode } from '../tree/ExpressionNode';

export class Calculator {
    
    private parser: ExpressionParser;
    private visitor: EvaluationVisitor;

    constructor() {
        this.parser = new ExpressionParser();
        this.visitor = new EvaluationVisitor();
    }

    compute(expression: string): number;
    compute(ast: ExpressionNode): number;
    compute(input: string | ExpressionNode): number {
        if (typeof input === 'string') {
            const ast = this.parser.parse(input);
            return ast.accept(this.visitor);
        } else {
            return input.accept(this.visitor);
        }
    }
}