const router = require('express').Router();

const Departamento = require('../../model/departamento.model')

router.get('/', async (req, res) => { 
    try {
        const departamentos = await Departamento.find();
        res.json(departamentos);
    } catch (error) {
        res.json({fatal: error.message})
    }
});

router.post('/', async (req, res) => { 
    try {
        const departamento = await Departamento.create(req.body);
        res.json(departamento);
    } catch(error) {
        res.json({fatal: error.message});
    }
});

router.put('/:departamentoId', async(req, res) => { 
    const {departamentoId} = req.params;
    const departamento = await Departamento.findByIdAndUpdate(departamentoId, req.body, {new: true});
    res.json(departamento);
});

router.delete('/:departamentoId', async (req, res) => { 
    const { departamentoId } = req.params;
    const departamento = await Departamento.findByIdAndDelete(departamentoId);

    res.json(departamento);
});


module.exports = router;

