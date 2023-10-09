import type { ESLintProgram } from 'vue-eslint-parser/ast'
import { AST } from 'vue-eslint-parser'
// import { generateCodeFrame } from 'vue-template-compiler'

// function generateCode(file:string, node: { range: number[] }) {
// console.log('generateCode: ', generateCodeFrame(file, node.range[0], node.range[1] ));
// }

export function ExtractFunctionScript(node: [ESLintProgram,  string, string ] ): [ESLintProgram , string, string, string[]] {
	const [estree, fileName, fileBuffer ] = node;
	const functionNames: string[] = [];

	// console.log('fileName: ', fileName);
	// console.log('fileBuffer ', fileBuffer);
	// console.log('estree:', estree)


	AST.traverseNodes(estree, {
		enterNode(node, parent) {
			console.log('node.type: ', node.type)
			// if(node.type === 'VIdentifier') {
			if(node.type === 'ImportDeclaration') {
				// console.log('enterNode node.type: ', node.type);
				// console.log('enterNode parent?.type: ', parent?.type);
				// generateCode(fileBuffer, node)
				// console.log('enterNode node: ', node);
				// functionNames.push(node?.name)
			}
		},
		leaveNode(node, parent) {
			// console.log('leaveNode node: ', node.type);
			// console.log('leaveNode parent: ',  parent?.type);
		},
	})

	return [ estree, fileName, fileBuffer, functionNames ]
}
