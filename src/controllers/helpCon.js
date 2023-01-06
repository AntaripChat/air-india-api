const help = (req,res)=>{
    return res.send({
        message:"Successfully Hitting API",
        success:true,
        data:{
            contact:"+91 81XXXXXX"
        }
    })
};
const helpp = (req,res)=>{
    return res.send({
        message:"Successfully Hitting API",
        success:true,
        data:{
            contact:"+91 91XXXXXXX"
        }
    })
};

module.exports =  {
    help,
    helpp,
}
