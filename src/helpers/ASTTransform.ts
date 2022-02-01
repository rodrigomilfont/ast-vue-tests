import type { ESLintProgram } from 'vue-eslint-parser/ast'
import { parse } from 'vue-eslint-parser'

export function ASTTransform( file: Array<string>) : [ ESLintProgram, string, string ] => {
	const options = {
		sourceType: 'module',
		ecmaVersion: 11
	}

	const [fileBuffer, fileName] = file

	let fileParsedESLint

	try  {
		fileParsedESLint = parse(fileBuffer, options)
	}
	catch(error) {
		console.log('console.error() ', error, fileName);
		return [ parse('', options), fileName, fileBuffer ]
	}

	return [ fileParsedESLint , fileName, fileBuffer ]

}
