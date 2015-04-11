<?php if(!defined('KIRBY')) exit ?>

title: Section Timeline
pages: false
files: true
fields:
  title:
    label: Title
    type:  text
  desc:
    label: Description
    type:  textarea
  pic:
    label: Picture
    type: select
    options: images
  postion:
    label: Picture Postion
    type: radio
    default: left
    options:
      left: Left
      right: Right