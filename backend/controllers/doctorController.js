const doctorModel = require("../models/doctorModel");

module.exports.getController = async (req, res) => {
    try {
        const doctors = await doctorModel.find();
        if(doctors){
            return res.status(200).send({
                success:true,
                message:'fetched doctors',
                doctors
            });
        }
        else{
            return res.status(200).send({
                success:false,
                message:'Could not fetch doctors info'
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Could not fetch doctor info'
        });
    }
}