require 'rack'
class MyApp


  def self.call(env)
    request=Rack::Request.new(env)
    # my_hash={}
    temp= request.params["temp"].to_i
    celsius= (temp-32)*5/9

    # temp=my_hash[:temp]
    # p temp
    [
        200,
        {"Content-Type" => "text/html"},
        ["<h1>#{celsius}</h1>"]
    ]

  end


end


Rack::Handler::WEBrick.run(MyApp)