window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var collection = new JournalApp.Collections.Posts()
    collection.fetch({
      success: function () {
        JournalApp.router = new JournalApp.Routers.Posts($(".content"), collection);
        var sidebar = new JournalApp.Views.PostsIndex({
          collection: collection
        });
        $(".sidebar").html(sidebar.render().$el);

        Backbone.history.start();
      },
      error: function() {
        console.log("collection fail");
      }
    });


  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
