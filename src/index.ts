'use strict';

import { FileLoader } from './fileLoader'
import {
	FileReader,
	ExtractFunctionScript,
	ASTTransform,
} from './helpers';

const fileLoader = new FileLoader();

fileLoader
	.getSystemFiles()
	.map((files) => FileReader(files))
	.map((files) => ASTTransform(files))
	.map((files) => ExtractFunctionScript(files))
	.map((files) => console.log(files))
