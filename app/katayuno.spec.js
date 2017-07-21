import Katayuno from './katayuno'

describe("Katayuno", () => {
    it("should add 2 and 3", () => {
        const kat = new Katayuno();
        const result = kat.sum(2,3);
        expect(result).to.equal(5);
    });

    it("should fail adding 3 and 4", () => {
        const kat = new Katayuno();
        const itsyourturn = kat.sum(3,4);
        expect(itsyourturn).to.equal(7);
    })
});
