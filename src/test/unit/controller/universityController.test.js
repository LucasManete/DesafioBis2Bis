/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
const service = require('../../../services/universityService');
const controller = require('../../../controllers/universityController');
const { MockGetOne, MockCreate } = require('../mockResults');

describe('testa controller', () => {
  it('Testando se achou uma universidade', async () => {
    const res = {};
    const req = {};
    before(() => {
      sinon.stub(service, 'getOne').resolves(MockGetOne);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('retorna uma universidade', async () => {
      req.params = { id: MockGetOne.message._id };
      await controller.getOne(req, res);
      expect((res.status).calledWith(200)).to.be.true;
      expect((res.json).calledWith(MockGetOne)).to.be.true;
    });
  });

  it('Testando se achou uma universidade Fail', async () => {
    const res = {};
    const req = {};
    const data = {
      statusCode: 404,
      message: 'Universidade não econtrada',
      error: true,
    };
    before(() => {
      sinon.stub(service, 'getOne').resolves(data);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('retorna uma universidade', async () => {
      req.params = { id: '6329fd3c2c9153770c2adaaa' };
      await controller.getOne(req, res);
      expect((res.status).calledWith(404)).to.be.true;
      expect((res.json).calledWith(data)).to.be.true;
    });
  });

  it('Testando criar uma universidade', async () => {
    const res = {};
    const req = {};
    before(() => {
      sinon.stub(service, 'create').resolves(MockCreate);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('Cria uma universidade', async () => {
      req.body = MockCreate;
      await controller.create(req, res);
      expect((res.status).calledWith(200)).to.be.true;
      expect((res.json).calledWith(MockCreate)).to.be.true;
    });
  });

  it('Testando deletar uma universidade', async () => {
    const res = {};
    const req = {};
    const data = {
      statusCode: 200,
      message: 'Universidade Deletada com sucesso',
      error: false,
    };
    before(() => {
      sinon.stub(service, 'destroy').resolves(data);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('deletar uma universidade', async () => {
      req.params = { id: MockGetOne.message._id };
      await controller.destroy(req, res);
      expect((res.status).calledWith(data.statusCode)).to.be.true;
      expect((res.json).calledWith(data)).to.be.true;
    });
  });

  it('Testando atualizar uma universidade', async () => {
    const res = {};
    const req = {};
    const data = {
      statusCode: 200,
      message: 'Dados atualizados com sucesso',
      error: false,
    };
    before(() => {
      sinon.stub(service, 'update').resolves(data);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('atualizar uma universidade', async () => {
      req.params = { id: MockGetOne.message._id };
      await controller.update(req, res);
      expect((res.status).calledWith(data.statusCode)).to.be.true;
      expect((res.json).calledWith(data)).to.be.true;
    });
  });

  it('Testando popular o banco', async () => {
    const res = {};
    const req = {};
    const data = {
      statusCode: 200,
      message: 'O banco foi polulado com 1020',
      error: false,
    };
    before(() => {
      sinon.stub(service, 'populate').resolves(data);
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => {
      sinon.restore();
    });

    it('Popular o Banco', async () => {
      await controller.populate(req, res);
      expect((res.status).calledWith(data.statusCode)).to.be.true;
      expect((res.json).calledWith(data)).to.be.true;
    });
  });
});
