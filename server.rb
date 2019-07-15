require "sinatra"
require 'json'
require 'open-uri'
require "sinatra/reloader" if development?
require "pry" if development? || test?

set :bind, '0.0.0.0'
set :public_folder, File.join(File.dirname(__FILE__), "public")
CURRENT_FILE_PATH = File.dirname(__FILE__)

YELP_API = "iZpPMULRZtBfW0YSZNaXAV-5pMSeh1cc7ZDe1f6xmyTLx_TzYhMb9GMWqAMtJ4xtm1qKgTh_hXzram5-KRJ4lHvm3jvo_9Egqm7thTHlqV69djfav716SxZMDJAkXXYx"

get "/about" do
  erb :home
end

get "/" do
  redirect "/mainpage"
end

get "/mainpage" do
  erb :home
end

# get "/api.yelp.com/v3/businesses/search?location=Boston" do
#   binding.pry
#   erb :home
# end

get "/mainpage/selection" do
  a=JSON.parse(open('https://ip-api.io/api/json?api_key=9841f40b-0640-4cef-a623-1558b995b2f1').read)
  binding.pry
  erb :home
end
