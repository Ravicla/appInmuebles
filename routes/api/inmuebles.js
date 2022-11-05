const router = require('express').Router();

const Inmueble = require('../../model/inmuebles')

router.get('/', async (req, res) => { 
    try {
        const inmuebles = await Inmueble.find();
        res.json(inmuebles);
    } catch (error) {
        res.json({fatal: error.message})
    }
});

router.post('/', async (req, res) => { 
    try {
        const inmueble = await Inmueble.create(req.body);
        res.json(inmueble);
    } catch(error) {
        res.json({fatal: error.message});
    }
});

router.put('/:inmuebleId', async(req, res) => { 
    try {
        const {inmuebleId} = req.params;
        const inmueble = await Inmueble.findByIdAndUpdate(inmuebleId, req.body, {new: true, runValidators: true});
        res.json(inmueble);
    } catch (error) {
        res.json({fatal: error.message})
    }
});

router.delete('/:inmuebleId', async (req, res) => { 
    const { inmuebleId } = req.params;
    const inmueble = await Inmueble.findByIdAndDelete(inmuebleId);

    res.json(inmueble);
});


module.exports = router;

