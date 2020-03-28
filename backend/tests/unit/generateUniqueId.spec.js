const generateUniqueID = require('../../src/utils/generateUniqueId');
describe('Generate Unique ID', () => {
    it('should be an Unique ID', () =>{
        const id = generateUniqueID();

        expect(id).toHaveLength(8);
    });
});