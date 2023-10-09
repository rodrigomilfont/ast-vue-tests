import glob from 'glob';

export class FileLoader {

	extension: string

	constructor(extension?: string) {
		this.extension = extension || '/**/*.vue';
	}

	public getSystemFiles () {
		const DIR = `${process.env.DIR + '/' + this.extension}`;
		console.log('DIR:', DIR)

		return glob.sync(DIR, {})
	}
}
