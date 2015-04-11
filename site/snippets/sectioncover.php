<!-- Sections are never used as visible pages at this point -->

<section class="promo promo-section section section-on-bg bg-cover" style="background-image: url('<?php echo $data->files()->find(html($data->coverpic()))->url() ?>')">
    <div class="container text-center">
        <h2 class="title">
            <?php echo html($data->title()) ?>
        </h2>
        <p class="intro">
            <?php echo html($data->coversubtitle()) ?>
        </p>
        <p><a class="btn btn-cta btn-cta-primary" href="<?php echo html($data->coverbtnlink()) ?>">
            <?php echo html($data->coverbtn()) ?>
        </a></p>
        <!-- <button type="button" class="play-trigger btn-link " data-toggle="modal" data-target="#modal-video"><i class="fa fa-youtube-play"></i> Watch the video</button> -->
    </div><!--//container-->
</section><!--//promo-->