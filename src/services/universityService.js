const { notFoundException, conflictException, sucessException } = require('../HttpCatalog/httpCatalog');
const api = require('../requestApi/request');
const formatUniversities = require('../utils/formatUniversities');

class ApiService {
  constructor(model) {
    this.model = model;
  }

  async getAll(query) {
    const { page = 1, limit = 20, country } = query;
    const options = { page, limit, select: ['_id', 'name', 'country', 'state_province'] };
    const filters = {};

    if (limit > 20) {
      options.limit = 20;
    }

    if (country) {
      Object.assign(filters, { country });
    }
    const result = await this.model.paginate(filters, options);
    return result;
  }

  async getOne({ id }) {
    const result = await this.model.findById(id);
    if (!result) { return notFoundException('Universidade não econtrada'); }
    return sucessException(result);
  }

  async create(body) {
    const findUniversity = await this.model.findOne({
      name: body.name,
      country: body.country,
      state_province: body.state_province,
    });

    if (findUniversity) { return conflictException('Universidade já cadastrada'); }

    const result = await this.schema.create(body);
    return sucessException(result);
  }

  async update({ id }, body) {
    const university = await this.model.findByIdAndUpdate(id, body);
    if (!university) {
      return notFoundException('Universidade não econtrada');
    }
    return sucessException('Dados atualizados com sucesso');
  }

  async delete({ id }) {
    const university = await this.model.findByIdAndDelete(id);
    if (!university) {
      return notFoundException('Universidade não econtrada');
    }
    return sucessException('Universidade Deletada com sucesso');
  }

  async populate() {
    const verifyBD = await this.model.find();
    if (verifyBD.length > 60) return conflictException('Banco já populado');
    const request = await api.requestAPI();
    const formated = await formatUniversities(request);
    const result = await this.model.insertMany(formated);
    return sucessException(`O banco foi polulado com ${result.length} resultados`);
  }
}

module.exports = ApiService;
