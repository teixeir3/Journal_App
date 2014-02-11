JournalApp.Views.PostForm = Backbone.View.extend({

  template: JST["posts/post_form"],

  // events
  events: {
    "click button.post-form-submit": "submitForm"
  },

  render: function() {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },

  submitForm: function (event) {
    event.preventDefault();
    var formData = $("form.post-form").serializeJSON();
    var postID = this.model.id;
    this.model.save(formData.post, {
      success: function() {
        JournalApp.router.navigate("", { trigger: true });
      },
      error: function() {
        console.log("Post Update Error! ERROR! ERRROEORORO!!!")
      }
    })
    // var post = new Model(id);
  }
});