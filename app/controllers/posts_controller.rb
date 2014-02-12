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
      respond_with(@post, :status => :unprocessable_entity)
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
      respond_with(@post, :status => :unprocessable_entity)
    end
  end
end
