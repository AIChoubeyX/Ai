import sql from "../configs/db";


export const getUserCreations = async (req, res) => {
  try {
    const {userId} = req.auth()
    const creations = await sql `SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`
         res.json({
        success:true,
        creations
     }) 

  } catch (error) {
     res.json({
        success:false,
        error:message
     }) 

  }
};

export const getPulishedCreations = async (req, res) => {
  try {
    const creations = await sql `SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC`
         res.json({
        success:true,
        creations
     }) 

  } catch (error) {
     res.json({
        success:false,
        error:message
     }) 

  }
};
