JournalApp.Views.PostShow = Backbone.View.extend({

  initialize: function() {
    // this.listenTo(
    //   this.collection,
    //   "remove",
    //   JournalApp.router.new
    // )
  },

  template: JST['posts/show'],

  events: {
    "click button.delete-post": "remove"
  },

  render: function () {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },

  remove: function (event) {
    var dataId = this.model.id;

    this.collection.get(dataId).destroy();
    JournalApp.router.new();
  }
});