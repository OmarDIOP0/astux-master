export const addClass = async( req,res)=>{
    try {
        const {name} = req.body;
        
    } catch (error) {
        console.log('Error adding class',error.message);
    }
}