Make a folder for the wordpress installation preferably in /var/www/:
```sh
mkdir wordpress

cd wordpress
```

Download wordpress files
```sh
wp core download --locale=da_DK
```

Download wordpress files as root if folder is protected. (nginx)
```sh
sudo wp core download --locale=da_DK --allow-root
```

Allow the rigths
```sh
sudo chown -R www-data: /var/www/wordpress/
```
```sh
sudo chmod -R 755 /var/www/wordpress/
```