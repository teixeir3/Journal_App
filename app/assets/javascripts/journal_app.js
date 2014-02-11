window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var collection = new JournalApp.Collections.Posts()
    collection.fetch({
      success: function () {
        new JournalApp.Routers.Posts($(".content"), collection);
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
