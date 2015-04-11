<?php if(!defined('KIRBY')) exit ?>

title: Section Cover Quote
pages: false
files: true
fields:
  title:
    label: Title
    type:  text
  quote:
    label: Quote
    type: textarea
  quoteuser:
    label: Who wrote the quote?
    type: text
    help: Something like - (George Stmith | Brisbane)
  coverpic:
    label: Cover Picture
    type: select
    options: images