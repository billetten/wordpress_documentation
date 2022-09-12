#### event time 
All events have a first show time and a last show time, which you can get like this: 

```php
$first_show_time = new \BWPS\FormatTime($BWPS->get_the_first_show_time());
$last_show_time = new \BWPS\FormatTime($BWPS->get_the_last_show_time());
```

To format it, you have 2 options: 
#### Option 1, format yourself  
```php
$first_show_time->format('D, d M Y H:i:s +0000')
```
#### Option 2, let wordpress format   
```php
    wp_date( get_option( 'date_format' ), $BWPS->get_the_first_show_time() ) // Date
    wp_date( get_option( 'time_format' ), $BWPS->get_the_first_show_time() ) // Time
```