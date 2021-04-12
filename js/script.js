function emailSubmit(){
    $('#email-btn').val('Subscribe')
    $('.w-form-fail').css({display:'none'})
    $('.w-form-done').css({display:'none'})
    let email = $('#email-input').val()
    if(validateEmail(email)){
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("progress", updateProgress);
        xhr.addEventListener("load", transferComplete);
        xhr.addEventListener("error", showError);
        xhr.addEventListener("abort", showError);
        
        xhr.open("POST", `API = https://elixr-backend.herokuapp.com/subscribe`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            email: email
        }));

    }else{
        $('.w-form-fail').css({display:'block'})
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
        return re.test(email);
}
function showError(e){
    $('.w-form-fail').css({display:'block'})  
    $('#email-btn').val('Subscribe')

}
function transferComplete(e){
    $('.w-form-done').css({display:'block'})  
    $('#email-btn').val('Subscribe')

}
function updateProgress(e){
    $('#email-btn').val('Please wait..')
}