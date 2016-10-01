require 'rack'
class MyApp


  def self.call(env)
    request=Rack::Request.new(env)
    # my_hash={}
    path= request.path


    if path=="/"
      [
          200,
          {"Content-Type" => "text/html"},
          ["<h1>Welcome to my application</h1>"]
      ]
    else
      name=request.params["name"]
      [
          200,
          {"Content-Type" => "text/html"},
          ["<h1>#{name}</h1>"]
      ]


    end




  end


end


Rack::Handler::WEBrick.run(MyApp)