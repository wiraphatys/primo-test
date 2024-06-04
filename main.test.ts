import { merge } from './main';

describe('Merge Sort', () => {
    it('should sort an array of numbers', () => {
        const collection_1 = [3, 1, 4];
        const collection_2 = [7, 2, 5];
        const collection_3 = [6, 8, 9];
        const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        let result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual(expectedOutput);
    });

    it('should return empty array', () => {
        const collection_1 = [];
        const collection_2 = [];
        const collection_3 = [];
        const expectedOutput = [];

        let result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual(expectedOutput);
    });

    it('should return array of one', () => {
        const collection_1 = [1, 1, 1];
        const collection_2 = [1, 1, 1];
        const collection_3 = [1, 1, 1];
        const expectedOutput = [1, 1, 1, 1, 1, 1, 1, 1, 1];

        let result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual(expectedOutput);
    });
});
