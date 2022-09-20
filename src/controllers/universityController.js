class ApiController {
  constructor(service) {
    this.service = service;
  }

  async populate(_req, res) {
    const result = await this.service.populateDB();

    return res.status(result.statusCode).json(result);
  }

  async getAll(req, res) {
    const result = await this.service.getAll(req.query);

    return res.status(result).json(result);
  }

  async getOne(req, res) {
    const response = await this.service.getOne(req.params);

    return res.status(response.statusCode).json(response);
  }

  async create(req, res) {
    const response = await this.service.create(req.body);

    return res.status(response.statusCode).json(response);
  }

  async update(req, res) {
    const response = await this.service.update(req.params, req.body);

    return res.status(response.statusCode).json(response);
  }

  async delete(req, res) {
    const response = await this.service.delete(req.params);

    return res.status(response.statusCode).json(response);
  }
}

module.exports = ApiController;
