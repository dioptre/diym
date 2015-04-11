<?php if(!defined('KIRBY')) exit ?>

title: Error
pages: false
files: false
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea
    size:  large
  bodyid:
    label: ID (This will be applied to the <body> element)
    type:  text