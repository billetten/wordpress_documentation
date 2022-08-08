Make a folder for the wordpress installation preferably in /var/www/:
```sh
mkdir wordpress

cd wordpress
```

Download wordpress files
```sh
wp core download --locale=da_DK
```

Allow www-data user 
```sh
sudo chown -R www-data: /var/www/wordpress/
sudo chmod -R 755 /var/www/wordpress/
```