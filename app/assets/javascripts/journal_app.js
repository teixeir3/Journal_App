window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    // var collection = new JournalApp.Collections.Posts();
    // collection.fetch({
    //   success:function () {
    //     var view = new JournalApp.Views.PostsIndex({
    //       collection: collection
    //     });
    //
    //     $(".content").html(view.render().$el);
    //   },
    //   error: function () {
    //     console.log("ALERT: YOU'RE SCREWED")
    //   }
    // })

    var router = new JournalApp.Routers.Posts($(".content"));
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
