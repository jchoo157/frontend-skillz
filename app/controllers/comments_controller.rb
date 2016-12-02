class CommentsController < ApplicationController
  def show
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      if request.xhr?
        render partial: 'partials/comment', locals: {comment: @comment}, layout: false
      else
        redirect_to root_path
      end
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.votes.destroy_all && @comment.destroy
      if request.xhr?
        @comment.votes.destroy_all
        @comment.destroy
      else
        redirect_to root_path
      end
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
