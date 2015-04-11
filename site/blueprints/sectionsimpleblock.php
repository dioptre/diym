<?php if(!defined('KIRBY')) exit ?>

title: Section Comparison
pages: false
files: true
fields:
  title:
    label: Title
    type:  text
    help: This doesn't do anything
  below:
    label: After Table HTML
    type: textarea
    help: User Markdown Text here
  color:
    label: Color
    type: text
    help: Needs to be in this format HEX (hash)fff