import connectDB from "@/util/database"
import { ObjectId } from "mongodb";

type Detailprops = { //타입스크립트에서 props를 받기위해 사용하는 type선언
  params: {
    _id: string;
  }
}
// 상세보기
export default async function Detail(props: Detailprops) {
    const db = (await connectDB.connectDB).db("forum");
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params._id)})
    //let result = await db.collection('post').find().toArray(); //조건없이 모든 데이터 가져오기
    
    return (
      <div>
        <h4>상세페이지</h4>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
      </div>
    );
  }