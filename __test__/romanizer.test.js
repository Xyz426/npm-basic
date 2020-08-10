import {transform} from "../src/romanizer";

describe('romanizer', function () {
    it('should return X when give 10', function () {
        const result = transform(10);
        expect(result).toEqual('X');
    });
});