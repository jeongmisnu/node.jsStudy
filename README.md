# node.js Study
node.js 연습 블로그 만들기

## Use Package
- express
- mongoose (mongoDB)
- cors
- pm2

## 기능
1. 전체 게시글 목록 조회
    - 제목, 작성자명, 작성 날짜를 조회하기
    - 작성 날짜 기준으로 내림차순 정렬하기
2. 게시글 작성
    - 제목, 작성자명, 작성 내용을 입력하기
3. 게시글 조회
    - 제목, 작성자명, 작성 날짜, 작성 내용을 조회하기
4. 게시글 수정
    - 제목, 작성자명, 작성 내용 중 원하는 내용을 수정하기
5. 게시글 삭제
    - 원하는 게시물을 삭제하기
6. 댓글 목록 조회
    - 조회하는 게시글에 작성된 모든 댓글을 목록 형식으로 볼 수 있도록 하기
    - 작성 날짜 기준으로 내림차순 정렬하기
7. 댓글 작성
    - 댓글 내용을 비워둔 채 댓글 작성 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
    - 댓글 내용을 입력하고 댓글 작성 API를 호출한 경우 작성한 댓글을 추가하기
8. 댓글 수정
    - 댓글 내용을 비워둔 채 댓글 수정 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
    - 댓글 내용을 입력하고 댓글 수정 API를 호출한 경우 작성한 댓글을 수정하기
9. 댓글 삭제
    - 원하는 댓글을 삭제하기

## API
1. 전체 게시글 목록 조회
- Request
    - Method : GET
    - URL : /api/posts
- Respones
    - HTTP Status Code : 200
    - Payload : 
    { postId: number, title: string, content: string, authorId: string, writeDate: date }
2. 게시글 작성
- Request
    - Method : POST
    - URL : /api/posts
    - Body : 
    { title: string, content: string, authorId: string }
- Respones
    - HTTP Status Code : 201
    - Payload : 
    { postId: number, writeDate: date }
3. 게시글 조회
- Request
    - Method : GET
    - URL : /api/posts/:post
- Respones
    - HTTP Status Code : 200
    - Payload : 
    { title: string, authorId: string, writeDate: date, content: string }
4. 게시글 수정
- Request
    - Method : PUT
    - URL : /api/posts/:post
    - Body : 
    { title: string, content: string, authorId: string}
- Respones
    - HTTP Status Code : 201
    - Payload : 
    { success: boolean, message: string }
5. 게시글 삭제
- Request
    - Method : DELETE
    - URL : /api/posts/:post
    - Body : 
    { authorId: string}
- Respones
    - HTTP Status Code : 200
    - Payload : 
    { success: boolean, message: string }
6. 댓글 목록 조회
- Request
    - Method : GET
    - URL : /api/posts/:post/comments
- Respones
    - HTTP Status Code : 200
    - Payload : 
    { commentId: number, content: string, authorId: string }
7. 댓글 작성
- Request
    - Method : POST
    - URL : /api/posts/:post/comments
    - Body :
    { content: string, authorId: string }
- Respones
    - HTTP Status Code : 200
    - Payload : 
    { commentId: number, content: string, authorId: string }
8. 댓글 수정
- Request
    - Method : PUT
    - URL : /api/posts/:post/:comment
    - Body : 
    { content: string, authorId: string }
- Respones
    - HTTP Status Code : 200
    - Payload : 
    { success: blooean, message: string }
9. 댓글 삭제
- Request
    - Method : DELETE
    - URL : /api/posts/:post/:comment/
    - Body : 
    { authorId: string }
- Respones
    - HTTP Status Code : 200
    - Payload : 
    { success: boolean, message: string }