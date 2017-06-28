$(document).ready(function(){
  $('#new_comment_button').click(function(e){
    e.preventDefault();
    // $('body').append('<form id=new_comment style="display: inline;">').append("<textarea type='textarea' placeholder='Comment Body'" ).append("</form>")


    // + $('input[name="submit"]') + "</li>"
    const form    = document.createElement("form")
    const comment = document.createElement("textarea")
    const author  = document.createElement("input")
    const submit  = document.createElement("input")

    form.id             = 'new_comment'
    form.style          = "display: block;"
    comment.placeholder = 'Your text here'
    author.id           = "authorName"
    author.type         = "text"
    author.placeholer   = "Your Name"
    submit.type         = "submit"
    submit.placeholder  = "submit"

    form.appendChild(author);
    form.appendChild(comment);
    form.appendChild(submit);

    document.getElementsByTagName('body')[0].appendChild(form);
    $(submit).click(function(e){
      e.preventDefault();
      if ($(author).val() && $(comment).val()) {
      $('#comment_list').append(`<li>${$(comment).val()}<span class="author">${$(author).val()}</span></li>`);
      $(new_comment).toggle()
    }
    });
  });
});
