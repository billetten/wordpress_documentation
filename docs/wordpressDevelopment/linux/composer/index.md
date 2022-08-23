# Hacks
## Composer
### Get composer to use a specific php version 
```sh
/usr/bin/php7.4 /usr/local/bin/composer 
```
You can alternatively make an alias for it like:

```sh
alias c7="/usr/bin/php7.4 /usr/local/bin/composer"
```
Now you can write; 
```sh
c7 update 
```
this will use composer with php 7.4 to update an composer project 

Read more about alias [here](https://www.tecmint.com/create-alias-in-linux/)