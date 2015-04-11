<?php function startsWith($haystack, $needle)
{
    return !strncmp($haystack, $needle, strlen($needle));
} ?>

<div id="hero-blog" class="hidden-xs" style="background-image:url('<?php foreach($pages->find('blog')->images() AS $img):if (startsWith($img->name(),"cover-background")){ echo $img->url(); break; }; endforeach ?>')">

</div>



