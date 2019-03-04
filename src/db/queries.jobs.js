const Job = require("./models").Job;

module.exports = {
  getAllJobs(callback){
    return Job.findAll()
    .then((topics) => {
      callback(null, topics);
    })
    .catch((err) =>{
      callback(err);
    });
  },
  getJob(id, callback) {
    return Job.findByPk(id)
    .then(job => {
      callback(null, job);
    })
    .catch(err => {
      callback(err);
    })
  },
  createJob(newJob, callback){
    return Job.create({
      title: newJob.title,
      description: newJob.description
    })
    .then((job) => {
      callback(null, job);
    })
    .catch((err) => {
      callback(err);
    });
  }
}
