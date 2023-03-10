# Blocks
<!-- panels:start -->
## Getting started
You can make as many blocks as you want. 
Just create a new file in /resources/views/blocks. 

example.blade.php

The slug for this block will be acf/example

Starter template for a block: 

```php
{{--
  Title:
  Description:
  Category:
  Icon:
  Keywords:
  Mode:
  Align:
  PostTypes:
  SupportsAlign:
  SupportsMode:
  SupportsMultiple:
  EnqueueStyle:
  EnqueueScript:
  EnqueueAssets:
--}}

@extends('layouts.block')

@section('block.content')  

{{-- content --}}

@endsection
```
<!-- div:title-panel -->
## ACF 
When you've created a block file, you can create acf fields for the block. 

In acf you'll need to find the block from it's slug. Then you can map all the fields to this specific block. 

<!-- div:title-panel -->
## Examples
<!-- div:left-panel -->
<!-- [code](getEvent/code.md ':include :type=md') -->
<!-- div:right-panel -->
<!-- [example](getEvent/example.md ':include :type=md') -->

