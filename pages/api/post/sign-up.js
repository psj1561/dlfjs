import  connectDB from "@/util/database"

// 회원가입 처리(임시)
export default async function handler(request, response){
    if(request.method == 'POST'){
        if (request.body.id == '' || request.body.pwd == ''){
            return response.status(500).json({error: '아이디나 비번이 빈칸입니당'})
        }
        console.log("회원가입처리")
        try {
            const db = (await connectDB.connectDB).db("forum");
            let isId = await db.collection('post').find({id : request.body.id})
            if (isId != ''){
                return response.status(500).json({error: '이미 존재하는 아이디입니다.'})
            }
            let result = await db.collection('post').insertOne(request.body)
            return response.status(200).redirect('/list')            
        } catch (error) {
            console.log(error)
        }
    }
}