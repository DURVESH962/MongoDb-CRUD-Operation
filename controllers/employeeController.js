const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const Employee = require('../models/employee.model')
router.get("/",(req,res) =>{
    res.render('home')
})
router.get('/addEmp',(req,res) =>{
    res.render('addEmployee')
})

router.post('/addEmp',(req,res) =>{
    // console.log(req,body)
const{fname,email,city,pno}= req.body
let Emp = new Employee()
Emp.fullName =fname,
Emp.email=email,
Emp.city=city,
Emp.mobile=pno,
Emp.save((err,result) =>{
    if(err) console.log("error in insertion",err)
    console.log("Recored added successfully")
    res.redirect('/')

})
})
router.get("/showEmp",(req,res) =>{
   Employee.find((err,result) =>{
       if(err) console.log("Error in fetching data")
    //    console.log(result)

    res.render('showEmployee',{list:result})
   })
})
router.get("/updateEmp",(req,res) =>{
    Employee.find((err,result) =>{
        if(err) console.log("Error in fetching data")
     //    console.log(result)
 
     res.render('updateEmployee',{list:result})
    })
 })
 router.get('/delEmp',(req,res) =>{
     Employee.find((err,result) =>{
         if(err) throw err
         res.render('delEmployee',{list:result})
     })
 })
 router.get('/deleteEmp/:id',(req,res) =>{
     Employee.findByIdAndDelete(req.params.id,(err,result) =>{
         if(err) throw err;
        //  console.log(result)
        res.redirect('/showEmp');
     })
 })

module.exports = router
