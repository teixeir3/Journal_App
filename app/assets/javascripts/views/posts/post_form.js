JournalApp.Views.PostForm = Backbone.View.extend({

  template: JST["posts/post_form"],

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
    var that = this;
    if (this.model.isNew()) {
      this.collection.create(formData.post, {
        wait: true,
        success: function(data) {
          JournalApp.router.navigate(
            "#/posts/" + data.id,
            { trigger: true }
          );
        },
        error: function(resp) {
          alert("Post Create Error! ERROR! ERRROEORORO!!!");
        }
      });
    } else {
      this.model.save(formData.post, {
        success: function() {
          JournalApp.router.navigate("", { trigger: true });
        },
        error: function(resp) {
          alert("Post Update Error! ERROR! ERRROEORORO!!!");
        }
      });
    }
  }
});