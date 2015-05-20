describe("primeTable", function() {

  describe("primeGenerator function", function(){
    var primeNum;
    it("should return an empty array for n = 0", function(){
      primeNum = primeGenerator(0);
      expect(primeNum).to.be.instanceof(Array);
      expect(primeNum.length).to.be.equal(0);
    });
    it("should return [1] for n = 1", function(){
      primeNum = primeGenerator(1);
      expect(primeNum).to.be.instanceof(Array);
      expect(primeNum.length).to.be.equal(1);
      expect(primeNum).to.deep.equal([1]);
    });
      it("should return [1,2,3,5,7,11,13,17,19,23] for n = 10", function(){
      primeNum = primeGenerator(10);
      expect(primeNum).to.be.instanceof(Array);
      expect(primeNum.length).to.be.equal(10);
      expect(primeNum).to.deep.equal([1,2,3,5,7,11,13,17,19,23]);
    });
  });

  describe("primeTableGenerator function", function(){
    var primeTable;
    it("should return [[]] for n = 0", function(){
      primeTable = primeTableGenerator(0);
      expect(primeTable).to.deep.equal([[]]);
    });
    it("should return [[1]] for n = 1", function(){
      primeTable = primeTableGenerator(1);
      expect(primeTable).to.deep.equal([[1]]);
    });
    it("should return [[1,2],[2,4]] for n = 2", function(){
      primeTable = primeTableGenerator(2);
      expect(primeTable).to.deep.equal([[1,2],[2,4]]);
    });
    it("should return [[1,2,3,5,7,11,13,17,19,23],[2,4,6,10,14,22,26,34,38,46],[3,6,9,15,21,33,39,51,57,69],[5,10,15,25,35,55,65,85,95,115],[7,14,21,35,49,77,91,119,133,161],[11,22,33,55,77,121,143,187,209,253],[13,26,39,65,91,143,169,221,247,299],[17,34,51,85,119,187,221,289,323,391],[19,38,57,95,133,209,247,323,361,437],[23,46,69,115,161,253,299,391,437,529]] for n = 10", function(){
      primeTable = primeTableGenerator(10);
      expect(primeTable).to.deep.equal([[1,2,3,5,7,11,13,17,19,23],[2,4,6,10,14,22,26,34,38,46],[3,6,9,15,21,33,39,51,57,69],[5,10,15,25,35,55,65,85,95,115],[7,14,21,35,49,77,91,119,133,161],[11,22,33,55,77,121,143,187,209,253],[13,26,39,65,91,143,169,221,247,299],[17,34,51,85,119,187,221,289,323,391],[19,38,57,95,133,209,247,323,361,437],[23,46,69,115,161,253,299,391,437,529]]);
    });
  });
});