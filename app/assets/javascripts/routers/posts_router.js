JournalApp.Routers.Posts = Backbone.Router.extend({
  initialize: function ($content) {
    /*

    var collection = new JournalApp.Collections.Posts();
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

    */
  },

  routes: {
    "": "index",
    "posts/:id": "show"
  },

  index: function () {

  },

  show: function (id) {

  }
});
