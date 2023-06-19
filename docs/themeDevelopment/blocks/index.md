# Blocks
<!-- panels:start -->

<!-- div:title-panel -->
## Setup
To get the component working you need to add the BlockProvider to the config/app.php:
```php
    'providers' => [
        /*
         * Laravel Framework Service Providers...
         */
        Illuminate\Bus\BusServiceProvider::class,
        Illuminate\Cache\CacheServiceProvider::class,
        Illuminate\Filesystem\FilesystemServiceProvider::class,
        Illuminate\View\ViewServiceProvider::class,
        Roots\Acorn\Providers\AcornServiceProvider::class,
        Xooom\Providers\XooomServiceProvider::class,
        Xooom\Providers\AjaxProvider::class,
        Xooom\Customizer\Customizer::class,
        --> Xooom\Providers\BlockProvider::class,
    ],
```
<!-- div:title-panel -->
## Getting started
You can make as many blocks as you want. 
Just create a new file in this folder `/resources/views/blocks`. 
If you don't have that folder, just create it.

If you call the file: `example.blade.php`

The slug for this block will be `acf/example`

Starter template for a block (You don't need to fill out all the fields at the top):
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
**[list what the different things can be](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/)**

<!-- div:title-panel -->
## ACF 
When you've created a block file, you can create acf fields for the block. 

In acf you'll need to find the block from it's slug. Then you can map all the fields to this specific block. 

<!-- div:title-panel -->
<!-- ## Examples -->
<!-- div:left-panel -->
<!-- [code](getEvent/code.md ':include :type=md') -->
<!-- div:right-panel -->
<!-- [example](getEvent/example.md ':include :type=md') -->

