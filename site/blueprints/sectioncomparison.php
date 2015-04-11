<?php if(!defined('KIRBY')) exit ?>

title: Section Comparison
pages: false
files: true
fields:
  title:
    label: Title
    type:  text
  subtitle:
    label: Subtitle∂
    type: textarea
  left:
    label: Feature Comparison LEFT
    type: textarea
    help: Use markdown heading level 3 and **bold** to make table
  right:
    label: Feature Comparison RIGHT
    type: textarea
  below:
    label: After Table HTML
    type: textarea