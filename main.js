$("#addItem").click(function(e){
  e.preventDefault();
  item = $("#itemInput")[0];
  li = "<li> <div>" + item.value + "</div> <input type='button' class='check' value='check' /> <input type='button' class='delete' value='delete' />  </li>";
  ul = $("ul").append(li);
  item.value = ""
});

$("ul").on('click', '.check', function(e) {
  span = $(e.toElement.parentElement.firstElementChild);
  if(span.hasClass("crossed")) {
    $(span).removeClass("crossed");
  } else {
    $(span).addClass("crossed");
  }
});

$("ul").on('click', '.delete', function(e) {
  ul = e.toElement.parentElement;
  $(ul).remove();
});
