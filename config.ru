require "./server"
require_relative 'app/api.rb'
require './lib/app'

run Sinatra::Application
add_import_path 'node_modules/motion-ui/src'
