Now we need to make the file, whivh nginx use to route 
```sh
sudo nano /etc/nginx/sites-available/wordpress
```

What the files should contain
```sh
server {
    listen 80;
    listen [::]:80;
    root /var/www/wordpress;
    index  index.php index.html index.htm;
    server_name  example.com www.example.com;

    client_max_body_size 100M;
    autoindex off;
    
    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
         include snippets/fastcgi-php.conf;
         fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
         fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
         include fastcgi_params;
    }
}
```

After saving the file above, run the commands below to enable the new site, then restart Nginx server.
```sh
sudo ln -s /etc/nginx/sites-available/wordpress /etc/nginx/sites-enabled/
sudo service nginx restart
```

At this stage, WordPress is ready and can be launched by going to the server’s IP or hostname.

For WSL users: 
You need to aff the domain in the hostfile on windows.

Run as administrator when running command in powershell: 
```sh
notepad.exe c:\Windows\System32\Drivers\etc\hosts
```

```sh
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
127.0.0.1               example.com
...
```

