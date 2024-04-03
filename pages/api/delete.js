import  connectDB from "@/util/database"
import { ObjectId } from "mongodb";

// 글 삭제 메서드
export default async function handler(request, response){
    try {
        if(request.method == 'DELETE'){
            const body = request.body;

            if (body == null){
                return response.status(400).json({
                    error: "body is null"
                })
            }
            let tmp = JSON.parse(body);

            const db = (await connectDB.connectDB).db("forum");
            let result = await db.collection('post').deleteOne({_id: new ObjectId(tmp._id)}
            )
            console.log(result)
            return response.status(200).json('삭제완료')
        } 
    } catch (error) {
        console.log(error)
    }

}