<?php if(!defined('KIRBY')) exit ?>

title: Site
pages: default
fields:
  title:
    label: Title
    type:  text
  author:
    label: Author
    type:  text
  description:
    label: Description
    type:  textarea
  copyright:
    label: Copyright
    type:  textarea
  css:
    label: Additional CSS overrides
    type:  textarea
    help: Add anything you want to overwrite style, just write CSS
  loginurl:
    label: Shop Login URL
    type:  text
    help: This is a backendy thing, so we don't have to change template, if we ever change the url
  signupurl:
    label: Shop Signup URL
    type:  text