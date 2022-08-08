#### Install PHP 7.4
```cmd
sudo apt install software-properties-common apt-transport-https -y
```
```cmd
sudo add-apt-repository ppa:ondrej/php -y
```
```cmd
sudo apt update
```
```cmd
sudo apt upgrade
```
```cmd
sudo apt install php-7.4 libapache2-mod-php7.4 -y
```
```cmd
sudo systemctl restart apache2
```
```cmd
sudo apt install php7.4-fpm libapache2-mod-fcgid
```
```cmd
sudo a2enmod proxy_fcgi setenvif && sudo a2enconf php7.4-fpm
```
```cmd
sudo systemctl restart apache2
```

#### Install PHP 8.x
```cmd
sudo apt install software-properties-common apt-transport-https -y
```
```cmd
sudo apt -y upgrade
```
```cmd
sudo systemctl reboot
```
```cmd
sudo apt install lsb-release ca-certificates apt-transport-https software-properties-common -y
```
```cmd
sudo add-apt-repository ppa:ondrej/php
```
```cmd
sudo apt update
```
```cmd
sudo apt install php8.0
```
##### Install extenstions 
To install PHP 8 extensions on Ubuntu22.04|20.04|18.04 use the command syntax:

```cmd
sudo apt install php8.0-<extension>
```
```cmd
sudo apt install php8.0-cli php8.0-common php8.0-imap php8.0-redis php8.0-snmp php8.0-xml php8.0-zip php8.0-mbstring
```