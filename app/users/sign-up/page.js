//회원가입 페이지
export default function SignUp(){
    return(
        <div className="p-20">
            <h1>회원가입</h1>
            <form action="/api/post/sign-up" method="POST">
                <input type="text" name="id" placeholder="아이디"/>
                <input type="text" name="password" placeholder="비밀번호"/>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}