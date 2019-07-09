require "sinatra"
require "sinatra/reloader" if development?
require "pry" if development? || test?

set :bind, '0.0.0.0'
set :public_folder, File.join(File.dirname(__FILE__), "public")
CURRENT_FILE_PATH = File.dirname(__FILE__)

get "/about" do
  erb :home
end

get "/" do
  redirect "/mainpage"
end

get "/mainpage" do
  erb :home
end

get "/mainpage/selection" do
  erb :home
end
