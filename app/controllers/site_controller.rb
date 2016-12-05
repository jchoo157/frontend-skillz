class SiteController < ApplicationController
  def index
    @comment = Comment.new
    @comments = Comment.all
    @vote = @comment.votes.new
  end

  def download_pdf
    send_file "#{Rails.root}/public/resume-johnny-choo.pdf", type: "application/pdf", x_sendfile: true
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
