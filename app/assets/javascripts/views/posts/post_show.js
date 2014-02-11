JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function(pojo) {
    console.log("post show view intialize: " + pojo);
    this.post = pojo.post
  },

  template: JST['posts/show'],

  render: function () {
    // do shit here
    console.log(this.post);
    var renderedContent = this.template({
      post: this.post
    });

    this.$el.html(renderedContent);
    return this;
  }
});