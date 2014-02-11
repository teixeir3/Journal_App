JournalApp.Views.PostsIndex = Backbone.View.extend({

  initialize: function() {
    this.listenTo(
      this.collection,
      "remove add change:title reset",
      this.render.bind(this)
    )
  },

  template: JST['posts/index'],

  events: {
    "click button.delete-post": "remove"
  },

  render: function () {
    var renderedContent = this.template({
      posts: this.collection
    });
    this.$el.html(renderedContent);

    return this;
  },

  remove: function (event) {
    var dataId = $(event.currentTarget).data("id");
    this.collection.get(dataId).destroy(); // Calls Model#remove
  }

});
