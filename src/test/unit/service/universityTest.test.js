/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const sinon = require('sinon');
const { expect } = require('chai');
const UniversityServices = require('../../../services/universityService');
const Model = require('../../../schemas/universitySchema');
const { MockGetOne, MockCreate, MockGetAll } = require('../mockResults');

describe('testa a service:', () => {
  it('find a university', () => {
    before(async () => {
      sinon.stub(Model, 'findOne').resolves(MockGetOne);
    });

    after(() => {
      sinon.restore();
    });
    it('Sucesso', async () => {
      const getOne = await UniversityServices.getOne(MockGetOne.message._id);
      expect(getOne).to.have.a.property('message');

      expect(getOne).to.have.a.property('statusCode');

      expect(getOne).to.have.a.property('error');
    });
  });

  it('find a university error', () => {
    before(async () => {
      sinon.stub(Model, 'findOne').resolves();
    });

    after(() => {
      sinon.restore();
    });

    it('Fail', async () => {
      const getOne = await UniversityServices.getOne('6329fd3c2c9153770c2adaaa');
      expect(getOne.message).to.be.equal('Universidade não econtrada');
      expect(getOne.statusCode).to.be.equal(404);
      expect(getOne.error).to.be.equal(true);
    });
  });

  it('Create university Fail', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(MockGetOne);
    });

    after(() => {
      sinon.restore();
    });

    it('Fail', async () => {
      const getOne = await UniversityServices.create(MockCreate);
      expect(getOne.message).to.be.equal('Universidade já cadastrada');
      expect(getOne.statusCode).to.be.equal(409);
      expect(getOne.error).to.be.equal(true);
    });
  });

  it('Create university Sucess', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves();
      sinon.stub(Model, 'create').resolves(MockCreate);
    });

    after(() => {
      sinon.restore();
    });

    it('Sucess', async () => {
      const create = await UniversityServices.create(MockCreate);
      expect(create).to.have.property('message');
      expect(create.statusCode).to.be.equal(200);
      expect(create.error).to.be.equal(false);
    });
  });

  it('findAndDelete Fail', () => {
    before(async () => {
      sinon.stub(Model, 'findByIdAndDelete').resolves(null);
    });

    after(() => {
      sinon.restore();
    });

    it('Fail', async () => {
      const destroy = await UniversityServices.destroy(MockGetOne.message._id);
      expect(destroy.message).to.be.equal('Universidade não econtrada');
      expect(destroy.statusCode).to.be.equal(404);
      expect(destroy.error).to.be.equal(true);
    });
  });

  it('findAndDelete Sucess', () => {
    before(async () => {
      sinon.stub(Model, 'findByIdAndDelete').resolves(MockGetOne);
    });

    after(() => {
      sinon.restore();
    });

    it('Sucess', async () => {
      const destroy = await UniversityServices.destroy(MockGetOne.message._id);
      expect(destroy.message).to.be.equal('Universidade Deletada com sucesso');
      expect(destroy.statusCode).to.be.equal(200);
      expect(destroy.error).to.be.equal(false);
    });
  });

  it('Update University Fail', () => {
    before(async () => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
    });

    after(() => {
      sinon.restore();
    });

    it('Fail', async () => {
      const destroy = await UniversityServices.update(MockGetOne.message._id);
      expect(destroy.message).to.be.equal('Universidade não econtrada');
      expect(destroy.statusCode).to.be.equal(404);
      expect(destroy.error).to.be.equal(true);
    });
  });

  it('Update University Sucess', () => {
    before(async () => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(MockGetOne);
    });

    after(() => {
      sinon.restore();
    });

    it('Fail', async () => {
      const destroy = await UniversityServices.update(MockGetOne.message._id, MockGetOne);
      expect(destroy.message).to.be.equal('Dados atualizados com sucesso');
      expect(destroy.statusCode).to.be.equal(200);
      expect(destroy.error).to.be.equal(false);
    });
  });

  it('Find All', () => {
    before(async () => {
      sinon.stub(Model, 'paginate').resolves(MockGetAll);
    });

    after(() => {
      sinon.restore();
    });

    it('Sucess', async () => {
      const getAll = await UniversityServices.getAll(MockGetAll);
      expect(getAll.message).to.have.a.property('docs');
      expect(getAll.statusCode).to.be.equal(200);
      expect(getAll.error).to.be.equal(false);
    });
  });
});
