require "sinatra"
require 'json'
require 'http'
require 'dotenv/load'
require 'open-uri'
require "optparse"
require "sinatra/reloader" if development?
require "pry" if development? || test?

  set :bind, '0.0.0.0'
  set :public_folder, File.join(File.dirname(__FILE__), "public")

  get "/about" do
    erb :home
  end

  get "/" do
    redirect "/mainpage"
  end

  get "/mainpage" do
    erb :home
  end

  get "/api.yelp.com/v3" do
    ip_location = JSON.parse(open("https://ip-api.io/api/json?api_key=#{ENV['IP_API_KEY']}").read)
    LONGITUDE = ip_location["longitude"]
    LATITUDE = ip_location["latitude"]
    url = "https://api.yelp.com/v3/businesses/search?term=takeout&radius=1600&sort_by=rating&latitude=#{LATITUDE}&longitude=#{LONGITUDE}"
    response = HTTP.auth("Bearer #{ENV['YELP_API_KEY']}").get(url)
    return response.body.to_json
  end

  get "/mainpage/selection" do
    erb :home
  end
