$(document).ready((e)=>{
    e.preventDefault

    $.get("/assets/pages/blog.posts/blog.post.1/blog.post.1.content.txt", function(data) {
        let fileDom = $(data);
        // console.log(fileDom)
        $(".blog-content").html(fileDom)
        
    });

    
})