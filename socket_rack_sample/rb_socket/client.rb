require 'rack'
class MyApp
  def self.call(env)
    request=Rack::Request.new(env);
    p request.params;
    [
        200,
        {"Content-Type"=>"text/html"},
        ["<h1>Hi</h1>"]
    ]

  end
end

Rack::Handler::WEBrick.run(MyApp)