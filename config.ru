require "./server"
require 'dotenv/load'
require './lib/app'


run Sinatra::Application
