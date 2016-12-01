class SiteController < ApplicationController
  def index
    @comment = Comment.new
    @comments = Comment.all
    @vote = Vote.new
    @votes = Vote.all
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
