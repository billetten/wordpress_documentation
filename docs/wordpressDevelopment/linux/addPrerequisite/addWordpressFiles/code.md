#### Get install files
```cmd
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
```

#### check the Phar file to verify that it’s working 
```cmd
php wp-cli.phar --info
```

#### Move wp to path  
```cmd
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp
```

#### Check if succesfull 
```cmd
wp --info
```