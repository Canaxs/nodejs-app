const model = require('../model/model')


module.exports.find = async function(request,response) {
    return await model.find();
}
module.exports.findById = async function(id,request,response) {
    return await model.findById(id);
}
module.exports.create = async function(body,request,response) {
    const newCreate = new model({
        title:body.title,
        content: body.content,
        tag: body.tag
    })
    return await newCreate.save()
}
module.exports.delete = async function(id,request,response) {
    return await model.findByIdAndRemove(id)
}

module.exports.update = async function(id,body,request,response) {
    return await model.findByIdAndUpdate(id,body,{ new: true })
}

