const modelRouter = require('express').Router()
const { request, response } = require('express')
const service = require('../service/service')

modelRouter.get('/', async (request, response) => {
    const blogs = await service.find()
    
    response.status(200).json(blogs)

    console.log(blogs)
  })

modelRouter.get('/:id', async (request, response) => {
    const blogs = await service.findById(request.params.id)
    
    response.status(200).json(blogs)

    console.log(blogs)
})

modelRouter.post('/', async (request, response) => {
    const create = await service.create(request.body)
    response.status(201).json(create)
})
modelRouter.delete('/:id', async (request, response) => {
    const delets = await service.delete(request.params.id);
    response.status(200).json(delets)
})

modelRouter.put('/:id', async (request,response) => {
    const update = await service.update(request.params.id,request.body);
    response.status(200).json(update);
})



module.exports = modelRouter;