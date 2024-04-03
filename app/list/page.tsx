import connectDB from "@/util/database"
import DetailLink from "./DetailLink"
import ListItem from "./ListItem"

// 리스트 페이지(server 컴포넌트)
export default async function List() {
    const db  = (await connectDB.connectDB).db("forum")
    let result = await db.collection('post').find().toArray()

    return (
      <div className="list-bg">
        <ListItem result={result}/>
      </div>
    )
  } 