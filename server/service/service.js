const model = require('../model/model')



module.exports.find = async function(request,response) {
    return await model.find();
}
module.exports.findById = async function(id,request,response) {
    return await model.findById(id);
}
module.exports.create = async function(body,request,response) {
    const newCreate = new Blog(body)
    return await newCreate.save()
}
module.exports.delete = async function(id,request,response) {
    return await model.findByIdAndRemove(id)
}
