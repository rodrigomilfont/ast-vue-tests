import fs from 'fs'

export function FileReader(file: string):string[]
{
	return [ fs.readFileSync(file, 'utf8'), file ];
}
