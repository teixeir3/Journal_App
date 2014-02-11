JournalApp.Routers.Posts = Backbone.Router.extend({
  initialize: function ($content) {
    this.$content = $content;
    console.log($content);
  },

  routes: {
    "": "index",
    "posts/:id": "show"
  },

  index: function () {
    var that = this;
    var collection = new JournalApp.Collections.Posts();
    collection.fetch({
      success: function () {
        var view = new JournalApp.Views.PostsIndex({
          collection: collection
        });

        that.$content.html(view.render().$el);
      },
      error: function () {
        alert("ALERT: YOU'RE SCREWED");
      }
    })
  },

  show: function (id) {
    console.log("Router Show function: " + id);
    var collection = new JournalApp.Collections.Posts();
    var that = this;
    collection.fetch({
      success: function () {
        var view = new JournalApp.Views.PostShow(
          { post: collection.get(id) }
        );
        that.$content.html(view.render().$el);
      },
      error: function() {
        alert("ERROR! TAYLOR SWIFT KNOWS YOU STALK HER!");
      }
    })

    // this.$content.html(view.render().$el);
  }
});
