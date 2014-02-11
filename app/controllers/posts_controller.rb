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
      render @post.errors.full_messages
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(params[:post])
      render json: @post
    else
      flash.now[:errors] = @post.errors.full_messages
      render @post.errors.full_messages
    end
  end
end
