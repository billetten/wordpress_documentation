Logon to MariaDB database console using the commands below:
```sh
sudo mysql -u root -p
```

Then create a database called wpdb
```sh
CREATE DATABASE wpdb;
```

Next, create a database user called wpdbuser and set password
```sh
CREATE USER 'wpdbuser'@'localhost' IDENTIFIED BY 'new_password_here';
```

Then grant the user full access to the database.
```sh
GRANT ALL ON wpdb.* TO 'wpdbuser'@'localhost' WITH GRANT OPTION;
```

Finally, save your changes and exit.
```sh
FLUSH PRIVILEGES;
EXIT;
```
