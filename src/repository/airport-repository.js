const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/index");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;

/**
 * 
 *  const CrudRespository = require("./crud-repository");
const { Airport } = require("../models/index");
class AirportRespository extends CrudRespository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRespository;
 */
