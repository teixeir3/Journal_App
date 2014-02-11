JournalApp.Views.PostShow = Backbone.View.extend({

  template: JST['posts/show'],

  events: {
    "click button.delete-post": "remove",
    "dblclick .post-title" : "toggleTitle",
    "dblclick .post-body" : "toggleBody",
    "blur .edit-post-title" : "savePost",
    "blur .edit-post-body" : "savePost"
  },

  render: function () {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);

    return this;
  },

  remove: function (event) {
    event.preventDefault();
    var dataId = this.model.id;
    this.collection.get(dataId).destroy();

    JournalApp.router.navigate("posts/new", { trigger: true });
  },

  toggleTitle: function() {
    $(".post-title").toggleClass("off");
    $(".edit-post-title").toggleClass("off");
  },

  toggleBody: function() {
    $(".post-body").toggleClass("off");
    $(".edit-post-body").toggleClass("off");
  },

  savePost: function(event) {
    var className = $(event.currentTarget).attr("class");
    var formData = $(".form-show").serializeJSON();
    var that = this;

    that.model.save(formData, {
      success: function () {
        (className == "edit-post-title") ? that.toggleTitle() : that.toggleBody();
        JournalApp.router.show(that.model.id);
      },
      error: function () {
        alert("Error updating post");
      }
    });
  }
});