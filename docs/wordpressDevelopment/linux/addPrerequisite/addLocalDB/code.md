#### Install Maria Db
```cmd
sudo apt install mariadb-server mariadb-client
```

#### Secure the database 
```cmd
sudo mysql_secure_installation
```

#### Verify / Login 
```cmd
sudo mysql -u root -p
```

#### Add user 
```cmd
CREATE USER 'wpdbuser'@'localhost' IDENTIFIED BY 'new_password_here';
```