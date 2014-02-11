class PostsController < ApplicationController
  def index
    @posts = Post.all
    if request.xhr?
      render json: @posts
    end
  end

  def create
    @post = Post.new(params[:post])

    if @post.save
      render json: @post
    else
      flash.now[:errors] = @post.errors.full_messages
      render :index
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :index
  end
end
