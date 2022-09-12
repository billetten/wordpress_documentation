#### Get event details
The BASM plugin give you the function to read an events details:

```php
$BWPS->get_event(); 
```

If you want to get the JSON data in it self: 
```php
$event =  $BWPS->get_event(); 
$data = json_decode($event->json_blob);
```

This data can be used to extrat show information like: 
```php
<?php foreach ($data->shows as $show): ?>
    <show>
        <show_no><?php echo $show->show_no; ?></show_no>
        <show_time><?php echo $show->show_time; ?></show_time>
        <availability><?php echo $show->availability; ?></availability>
        <ticket_status><?php echo ticket_status($show->availability); ?></ticket_status>
    </show>
<?php endforeach; ?>
```
