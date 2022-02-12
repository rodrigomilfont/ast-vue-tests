import { FileReader } from './FileReader'

import { expect } from 'chai';

describe('FileReader', () => {

	it('should test FileReader when not find file', () => {
		const path = '../../../UNDEFINED_FILE.vue'

		const fileloaderTest = FileReader(path)

		expect(fileloaderTest).to.deep.equal([ '', path ])
	})
})
