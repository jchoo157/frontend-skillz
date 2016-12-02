class SiteController < ApplicationController
  def index
    @comment = Comment.new
    @comments = Comment.all
    @vote = @comment.votes.new
  end

  def show
  end

  def new
  end

  def create
  end

  def update
  end

  def edit
  end

  def destroy
  end
end
