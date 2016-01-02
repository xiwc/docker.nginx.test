# docker.nginx.test
Docker Nginx Test.
> http://segmentfault.com/a/1190000000751601
> http://segmentfault.com/a/1190000000759971
> http://blog.csdn.net/wsscy2004/article/details/25878223
> http://my.oschina.net/2xixi/blog/516951
> http://www.tuicool.com/articles/uUBVJr

#  use this image hosting step simple static content
$ docker run --name step-nginx -v /var/local/html:/usr/share/nginx/html:ro -d nginx

$ docker build -t step-content-nginx .

$ docker run --name step-nginx -d step-content-nginx

$ docker run --name step-nginx -d -p 80:80 step-content-nginx

$ docker run --name step-nginx -v /step/nginx.conf:/etc/nginx/nginx.conf:ro -d nginx

$ docker cp step-nginx:/etc/nginx/nginx.conf /step/nginx.conf

$ docker run --name step-nginx -v /var/local/html:/usr/share/nginx/html:ro -p 80:80 -d nginx

