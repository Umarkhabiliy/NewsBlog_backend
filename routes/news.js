var express = require('express');

var router = express.Router();

const newSchema = require('../schema/news');
/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const news = await newSchema.find({});
    res.json(news);

  } catch (error) {
    res.json({
      xato: "Get News Method Error"
    });
  }
  
});

router.post('/add', async (req, res, next) => {
  try {
    const news = await newSchema(req.body);
    news.save();
    res.json(news);
  } catch (error) {
    res.json({
      xato: "Add news post error"
    });
  }
});

router.patch('/update', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  try {
    const news = await newSchema.updateOne({ title: req.body.title },
      { $set: { content: req.body.newContent } }
    );
    if(news.modifiedCount != 0){
      res.send(news + "Updated");
      res.end();
    }else{
      res.send(news +"no updated");
      res.end();
    }
  } catch (error) {
      res.send(error);
      res.end();
  }
});

router.delete('/delete',(req,res,next)=>{
  try {
    newSchema.findOneAndDelete({title:req.body.title},(err,data)=>{
      if(err){
        res.json({
          xato:err
        });
      }else{res.json(data);
      }
     }
    );
  } catch (error) {
    res.json({xato: error})
  }
})
module.exports = router;
