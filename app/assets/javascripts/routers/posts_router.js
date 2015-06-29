JournalApp.Routers.Posts = Backbone.Router.extend({
  initialize: function ($content, collection) {
    this.$content = $content;
    this.collection = collection;
  },

  routes: {
    "": "new",
    "posts/new": "new",
    "posts/:id/edit": "edit",
    "posts/:id": "show"
  },

  index: function () {
    var view = new JournalApp.Views.PostsIndex({
      collection: this.collection
    });

    this.$content.html(view.render().$el);
  },

  show: function (id) {
    var view = new JournalApp.Views.PostShow({
      model: this.collection.get(id),
      collection: this.collection
    });

    this.$content.html(view.render().$el);
  },

  edit: function(id) {
    var view = new JournalApp.Views.PostForm({
      model: this.collection.get(id)
    });

    this.$content.html(view.render().$el);
  },

  new: function() {
    var view = new JournalApp.Views.PostForm({
      model: new JournalApp.Models.Post,
      collection: this.collection
    });
    
    this.$content.html(view.render().$el);
  }
});
