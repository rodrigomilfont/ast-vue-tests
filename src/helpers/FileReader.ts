import fs from 'fs'

export function FileReader(path: string):string[]
{
	let responseFile:string

	try {
		responseFile = fs.readFileSync(path, 'utf8')
	} catch (error) {
		responseFile = ''
	}

	return [ responseFile, path ];
}
