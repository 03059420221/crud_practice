import User from "../models/usermodel.js"

export const getdata= async (req,res)=>{
   try{
    const users=await User.find();
    if(users.length===0){
        return res.status(400).json({message:"user not found"})
    }
    res.status(200).json(users);
          
   }catch(error){
    res.status(500).json({error:"internal server error"})
   }
}

export const createUser= async (req,res) =>{
    try{
     
        const {name,email,password}=req.body;
        const userExist=await User.findOne({email});
        if (userExist){
            return res.status(304).json({message:"user already exist"})
        }
        const zain= new User({
           name,
           email,
           password
        })
        await zain.save();
        res.status(200).json(zain);
    }catch (error){
    res.status(500).json({error:"internal server error"})
    }
}
export const update=async( req, res)=>{
    try{
         const id=req.params.id
         const userExist=await User.findOne({_id:id})
         if (!userExist){
            return res.status(404).json({message:"unable to find user"})
         }
         const updateduser=await User.findByIdAndUpdate(id,req.body,{new:true})
         res.status(201).json(updateduser)

    }catch(error){
        res.status(500).json({error:"internal server error"})
    }
}
    export const deleteUser=async(req,res)=>{
        try{
          const id=req.params.id
          const userExist=await User.findOne({_id:id})
         if (!userExist){
            return res.status(404).json({message:"unable to find user"})
         }
         await user.findByIdAndDelete(id);
         res.status(201).json({message:"user deleted sucessfully"})
          
        }catch(error){
            res.status(500).json({error:"internal server error"})
        }
    
    }