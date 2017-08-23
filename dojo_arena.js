$('button').click(function(){
  var id=$(this).attr('id');
  console.log(id);
  var imgarr=["beach.jpg","earth.jpg","dojo.jpg","forest.jpg","matrix.jpg","snow.jpg"];
  // $('body').css("background-image","url('dojo_arena_photos/"+imgarr[id]+"')");
  // $('body').css("background-repeat","no-repeat");
  $('#background').append("<img src='dojo_arena_photos/"+imgarr[id]+"'>");
  $('img').css("width","100%");
  $('#menu').hide();
  $('#select').show();
});

$('select').click(function(){
  // $('.0').click(function(){
  //   console.log("yaeh");
  //   var id=$(this).attr("class");
  //   console.log(id);
  // })
  var value= $(this).children("option:selected").val();
  var ninjaArr=["donny.png","leo.png","mikey.png","raphael.png"];
  if($(this).attr("id")=="left"){
    document.getElementById("img1").innerHTML="<img src='dojo_arena_photos/"+ninjaArr[value]+"'>";

  }
  else {
    // $("#background").append("<img src='dojo_arena_photos/"+ninjaArr[value]+"'>");
    document.getElementById("img2").innerHTML="<img src='dojo_arena_photos/"+ninjaArr[value]+"'>";
  }
})
