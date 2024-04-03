// 글 등록 페이지
export default function Write(){
    return(
        <div className="p-20">
            <h1>글작성</h1>
            <form action="/api/post/new" method="POST">
                <input type="text" name="title" placeholder="제목"/>
                <input type="text" name="content" placeholder="내용"/>
                <button type="submit">작성</button>
            </form>
        </div>
    )
}