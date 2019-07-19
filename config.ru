require "./server"
require_relative 'app/api.rb'

run ExpenseTracker::API.new
run Sinatra::Application
add_import_path 'node_modules/motion-ui/src'
