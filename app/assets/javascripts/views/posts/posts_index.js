JournalApp.Views.PostsIndex = Backbone.View.extend({

  intialize: function() {
    this.listenTo(
      this.collection,
      "remove add change:title reset",
      this.render
    )
  },

  template: JST['posts/index'],

  events: {
    "click button.delete-post": "remove"
  },

  render: function () {
    console.log("IN RENDER BABY");
    var renderedContent = this.template({
      posts: this.collection
    });
    this.$el.html(renderedContent);

    return this;
  },

  remove: function (event) {
    console.log("In remove!");
    var dataId = $(event.currentTarget).data("id");
    // console.log(this.collection.get(dataId));
    console.log(this.collection.remove(dataId));
    // get post by data-id
    // delete it
    // render again?
  }

});
