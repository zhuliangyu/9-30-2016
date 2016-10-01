require 'rack'
class MyApp


  def self.call(env)
    request=Rack::Request.new(env)
    # my_hash={}
    score= request.params["score"].to_i

    grade="Undefined"
    if score>90
      grade="A"
    elsif score>80
      grade="B"
    elsif score>70
      grade="C"
    elsif score>60
      grade="D"
    else
      grade="F"

    end


    # temp=my_hash[:temp]
    # p temp
    [
        200,
        {"Content-Type" => "text/html"},
        ["<h1>#{grade}</h1>"]
    ]

  end


end


Rack::Handler::WEBrick.run(MyApp)