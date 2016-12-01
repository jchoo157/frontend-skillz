class VotesController < ApplicationController
  def show
  end

  def new
    comment = Comment.find(params[:id])
    @vote = comment.vote.new
  end

  def create
    comment = Comment.find(params[:id])
    @vote = comment.votes.new(vote_params)
    if @vote.save
      redirect_to root_path
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
    params.require(:vote).permit(:vote_type)
  end
end
