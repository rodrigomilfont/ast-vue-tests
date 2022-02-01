'use strict';

import { FileLoader } from './fileLoader'
import {
	FileReader,
	ExtractFunctionScript,
	ASTTransform,
} from './helpers';

console.log('ExtractFunctionScript: ', ExtractFunctionScript);

const astTransform = (file: Array<string>) : [ ESLintProgram, string, string] => {
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

const fileLoader = new FileLoader();

fileLoader
	.getSystemFiles()
	.map((files) => FileReader(files))
	.map((files) => astTransform(files))
	.map((files) => ExtractFunctionScript(files))
