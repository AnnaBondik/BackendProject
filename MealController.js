const MealModel = require('./MealModel');

//GET
module.exports.getMeal = async(req,res)=>{
    const myMeal = await MealModel.find();
    res.send(myMeal);
}

//POST
module.exports.saveMeal = async(req, res)=>{
    const { title } = req.body; //title from MealModel // мы хотим получить досутп ко всем названиям, чтобы потом их можно было поменять
    //req.body так как мы хотим получить доступ к телу документа, чтобы потом поменять что-либо
    MealModel.create({title})//  сможем создать новое название поэтому сreate
    .then((data)=> {
        console.log('meal added')
        res.send(data);
    })
}

//DELETE
module.exports.deleteMeal = async(req, res)=>{
    const {_id} = req.body;
    MealModel.findByIdAndDelete(_id)
    .then(()=> res.send("meal deleted"))
}

//EDIT
module.exports.editMeal= async(req, res)=>{
    const{ _id, title} = req.body;
    MealModel.findByIdAndUpdate(_id, {title})
    .then(()=>res.send(`Meal ${req.body.title} edited`))
}