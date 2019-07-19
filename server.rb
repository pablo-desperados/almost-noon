require "sinatra"
require 'json'
require 'http'
require 'open-uri'
require "optparse"
require "sinatra/reloader" if development?
require "pry" if development? || test?


set :public_folder, File.join(File.dirname(__FILE__), "public")

API_KEY = 'iZpPMULRZtBfW0YSZNaXAV-5pMSeh1cc7ZDe1f6xmyTLx_TzYhMb9GMWqAMtJ4xtm1qKgTh_hXzram5-KRJ4lHvm3jvo_9Egqm7thTHlqV69djfav716SxZMDJAkXXYx'

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
  ip_location = JSON.parse(open('https://ip-api.io/api/json?api_key=9841f40b-0640-4cef-a623-1558b995b2f1').read)
  LONGITUDE = ip_location["longitude"]
  LATITUDE = ip_location["latitude"]
  url = "https://api.yelp.com/v3/businesses/search?term=takeout&radius=1600&sort_by=rating&latitude=#{LATITUDE}&longitude=#{LONGITUDE}"
  response = HTTP.auth("Bearer #{API_KEY}").get(url)
  return response.body.to_json
end

get "/mainpage/selection" do
  erb :home
end
