var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njc2MDE0NTUsIm5iZiI6MTY2NzYwMTQ1NSwianRpIjoiY2VjM2YyOTktMTJkYS00NGI5LWE2ZGMtM2YwODdjZTRiMWI1IiwiZXhwIjoxNjY3NjAyMzU1LCJpZGVudGl0eSI6ImZyZWRkeSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.KhFy5166kXjzfuxEMhzlDtFp2y2cAv3PXKmX40VxVGM';
$(document).ready(function () {
    $('#btnLogin').click(function(e){ 
        e.preventDefault(); 
        data = { 
            "username": $('#username').val(), 
            "password": $('#password').val() 
         }; 
        $.ajax({ 
            type: "POST", 
            url: "https://freddy.codesubmit.io/login", 
            data: JSON.stringify(data), 
            dataType: "json", 
            contentType: "application/json",
            success: function(response) 
            {
            
            window.location.href = "http://127.0.0.1:5500/Index.html";
            }, 
            error: function (rs, e) {console.debug(rs)} ,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer '+ token);
            }
        }); 
    }); 
  });

