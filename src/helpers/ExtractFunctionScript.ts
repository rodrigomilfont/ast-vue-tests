import type { ESLintProgram } from 'vue-eslint-parser/ast'
import { AST } from 'vue-eslint-parser'
import { generateCodeFrame } from 'vue-template-compiler'

function generateCode(file:string, node: { range: number[] }) {
	console.log('generateCode: ', generateCodeFrame(file, node.range[0], node.range[1] ));
}

export function ExtractFunctionScript(node: [ESLintProgram,  string, string ] ): [ESLintProgram , string, string, string[]] {
	const [estree, filename, fileBuffer ] = node;
	const functionNames: string[] = [];

	console.log('filename: ', filename);
	console.log('fileBuffer ', fileBuffer);

	AST.traverseNodes(estree, {
		visitorKeys: 'VAttribute[directive=true]',
		enterNode(node, parent) {
			if(node.type === 'VIdentifier') {
				console.log('enterNode node.type: ', node.type);
				console.log('enterNode parent?.type: ', parent?.type);
				generateCode(fileBuffer, node)
				console.log('enterNode node: ', node);
				functionNames.push(node?.name)
			}
		},
		leaveNode(node, parent) {
			console.log('leaveNode node: ', node.type);
			console.log('leaveNode parent: ',  parent?.type);
		},
	})

	return [ estree, filename, fileBuffer, functionNames ]
}
