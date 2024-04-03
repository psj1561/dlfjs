import  connectDB from "@/util/database"

// 글 등록 메서드 (임의로 타입스크립트 형식 사용)
export default async function handler(request: Request, response :Response){
    if(request.method == 'POST'){
        if (request.body.title == ''){
            return response.status(500).json({error: 'title is required'})
        }
        console.log("글작성처리")
        try {
            const db = (await connectDB.connectDB).db("forum");
            let result = await db.collection('post').insertOne(request.body)
            return response.status(200).redirect('/list')            
        } catch (error) {
            console.log(error)
        }
    }
}