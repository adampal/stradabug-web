require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get page_1" do
    get home_page_1_url
    assert_response :success
  end

  test "should get page_2" do
    get home_page_2_url
    assert_response :success
  end

  test "should get redirected" do
    get home_redirected_url
    assert_response :success
  end
end
