'use client' //클라이언트 컴포넌트로 선언

import Link from "next/link"

type Itemprops = {
    result:{
        _id:{},
        title:string,
        content:string
    }[]
  }

export default function ListItem(props :Itemprops){
    return (
        <div>
        { 
             props.result.map((a, i)=>
                 <div className="list-item" key={i}>
                    <Link href={'/detail/'+props.result[i]._id}>
                        <h4>{props.result[i].title}</h4>
                    </Link>
                    <Link href={'/edit/'+props.result[i]._id}>✏️</Link>
                    <span onClick={()=>{
                        fetch('/api/delete', {method: 'DELETE', body: JSON.stringify({_id: props.result[i]._id})})
                        .then((r)=>{
                            if(r.status === 200){
                                return r.json()
                            } else{
                                // 에러코드전송시 코드
                            }
                        })
                        .then((result)=>{
                            console.log(result) // 성공시 실행
                        }).catch((error)=>{
                            console.log(error) //인터넷문제로 실패시
                        }); //차라리 axios 라이브러리를 쓰는게 좋겠다~
                    }}>🗑️</span>
                    <p>{props.result[i].content}</p> 
                 </div>
             )
        } 
        </div>
    )
}