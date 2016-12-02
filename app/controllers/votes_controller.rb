class VotesController < ApplicationController
  def show
  end

  def new
    p "*-*_" * 100
    comment = Comment.find(params[:comment_id])
    @vote = comment.votes.new
  end

  def create
    comment = Comment.find(params[:comment_id])
    p "8_0f" * 200
    @vote = comment.votes.new(vote_params)
    if @vote.save
      if request.xhr?
        render partial: 'partials/vote', locals: {comment: comment}, layout: false
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
  end

  private

  def vote_params
    params.require(:vote).permit(:vote_type, :comment_id)
  end
end
