const router = require('express').Router();

const Content = require('../models/Content');
// const keys = require('../../config/keys')


router.post('/addItem', (req, res) => {
    const itemName = req.body.itemName;
    const itemCost = req.body.itemCost
    const category = req.body.category

    const newContent = new Content({
        itemName,
        itemCost,
        category
    });
    newContent.save()
        .then((content) => { return res.status(201).json(content) })
        .catch((err) => {
            console.log(err)
            return res.status(400).json({ message: "Unable to Add the data" })

        })

})

router.get('/getItems', (req, res) => {
    Content.find().then((contents) => {
        return res.status(200).json(contents)
    }).catch((err) => {
        console.log(err)
        return res.status(404).json({ message: "Unable to fetch data" })

    })

})


router.patch('/:id', (req, res) => {
    var contentId = req.params.id;
    const itemName = req.body.itemName;
    const itemCost = req.body.itemCost
    const category = req.body.category
    Content.findByIdAndUpdate(contentId, {
        itemName,
        itemCost,
        category
    }).then((content) => {
        return res.status(200).json(content)

    }).catch((err) => {
        console.log(err)
        return res.status(400).json({ message: "Unable to update the record" })
    })

})


router.delete('/:id', (req, res) => {
    var contentId = req.params.id;
    Content.findByIdAndDelete(contentId).then((content) => {
        return res.status(200).json(content)
    }).catch((err) => {
        console.log(err)
        return res.status(400).json({ message: "Unable to delete the record" })
    })


})

module.exports = router