/* Class overview */
class ServerResponse {
  /* Creates a default sucessfull response */
  constructor() {
    this.status = '200';
    this.description = 'The request was performed without an issue.';
  };

  /* Sets a new status */
  setStatus(status) {
    this.status = status;
  }

  /* Sets a new description */
  setDescription(description) {
    this.description = description;
  }
};
 /* Exports the class */
module.exports = ServerResponse;
