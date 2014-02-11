window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var collection = new JournalApp.Collections.Posts
    collection.fetch({
      success:function () {
        var view = new JournalApp.Views.PostsIndex({
          collection: collection
        });

        $(".content").html(view.render().$el);
      },
      error: function () {
        console.log("ALERT: YOU'RE SCREWED")
      }
    })
    // var posts;
//     $.ajax({
//       url: "/posts",
//       type: "GET",
//       dataType: "json",
//       success: function (data) {
//         posts = data;
//       },
//       error: function (data) {
//         console.log("Error with: ")
//         console.log(data);
//       }
//     })
//     console.log("After ajax: ")
//     console.log(posts);

  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
