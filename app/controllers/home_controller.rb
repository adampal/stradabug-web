class HomeController < ApplicationController
  def page_1
  end

  def page_2
  end

  def redirected
    redirect_to home_page_1_path
  end
end
