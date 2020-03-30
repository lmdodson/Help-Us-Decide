$(window).on("load", function() {
  card();
  console.log("****************************************");
  console.log("All functions have run");
});

function card() {
  console.log("In Card");
  console.log("****************************************");

  var title = "The Movie";
  var value = "10";
  var image = "/img/testImg2.jpg";

  console.log("****************************************");
  var source = '<img src="{{img}}" class="card" alt="musical notes">';
  console.log("sourceImg: ", source);

  var template = Handlebars.compile(source);

  var context = {
    movie: title,
    id: value,
    img: image
  };
  console.log("context: ", context);

  var html = template(context);
  console.log("html: ", html);

  document.getElementById("image").innerHTML = html;
  console.log("****************************************");

  //!

  var source = '<p class="genre-name">{{movie}}</p>';
  console.log("sourceName: ", source);

  var template = Handlebars.compile(source);

  var context = {
    movie: title,
    id: value,
    img: image
  };
  console.log("context: ", context);

  var html = template(context);
  console.log("html: ", html);

  document.getElementById("name").innerHTML = html;
  console.log("****************************************");

  //!

  var source = '<p class="demo__card__we">{{id}}</p>';
  console.log("sourceId: ", source);

  var template = Handlebars.compile(source);

  var context = {
    movie: title,
    id: value,
    img: image
  };
  console.log("context: ", context);

  var html = template(context);
  console.log("html: ", html);

  document.getElementById("id").innerHTML = html;

  console.log("****************************************");
}
