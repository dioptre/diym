<?php if($data->imgposition() == 'left'): ?>
<div class="row feature">
    <div class="col-md-6 image"><img src="<?php foreach($data->images() AS $img):if (startsWith($img->name(),"pic")){ echo $img->url();}; endforeach ?>" class="img-responsive" alt="feature1" /></div>
    <div class="col-md-6 info">
        <h4><?php echo html($data->title()) ?></h4>
        <p> <?php echo kirbytext($data->text()) ?></p>
    </div>
</div>

<?php else: ?>

<div class="row feature">
    <div class="col-md-6 col-md-push-6 image"><img src="<?php foreach($data->images() AS $img):if (startsWith($img->name(),"pic")){ echo $img->url();}; endforeach ?>" class="img-responsive" alt="feature1" /></div>
    <div class="col-md-6 col-md-pull-6 info">
        <h4><?php echo html($data->title()) ?></h4>
        <p> <?php echo kirbytext($data->text()) ?></p>
    </div>

</div>

<?php endif ?>