import  connectDB from "@/util/database"
import { ObjectId } from "mongodb";

// 글 수정 메서드
export default async function handler(request, response){
    if(request.method == 'POST'){
        // 제목과 내용이 비어있으면 에러코드 return
        if (request.body.title == '' || request.body.content == ''){
            return response.status(500).json({error: '부정확한 입력'})
        }
        console.log("글 수정처리")
        try {
            const db = (await connectDB.connectDB).db("forum");
            // DB에 원하는 id의 데이터에 덮어씌우기
            let result = await db.collection('post').updateOne(
                {_id: new ObjectId(request.body._id)},
                {$set: {title : request.body.title, content :request.body.content}}
                // {$inc: {}} 더하기도 가능
            )
            // 정상적으로 처리후 /list로 페이지이동
            return response.status(200).redirect('/list')            
        } catch (error) {
            console.log(error)
        }
    }
}