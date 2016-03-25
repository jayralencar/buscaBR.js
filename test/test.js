const expect = require('chai').expect;
const buscaBR = require('../buscaBR');

describe('Busca BR', function () {
  describe("Buscar", function () {
    it("Nome errado", function (done) {
      buscaBR.search('feijaum', ['arroz','feijão','feijoada'], function (res){
        expect(res).with.length(1);
        expect(res[0]).to.have.property('termo').with.equal("feijão");
        expect(res[0]).to.have.property('index').with.equal(1);
        done();
      });
    });

    it("Tratar erro", function (done) {
      buscaBR.search('feijaum', ['arroz', 'feijoada'], function (err, res) {
        expect(err).to.be.an.instanceof(Error);
        expect(res).to.equal(null);
        done();
      });
    });
  });

  describe("Encode", function () {
    it("Nome com acentos", function () {
      expect(buscaBR.encode('Feijão')).to.equal('FJ');
    });
  });
});
