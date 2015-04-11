<!-- Sections are never used as visible pages at this point -->

<section class="promo promo-section promo-quote-section section section-on-bg bg-cover" style="background-image: url('<?php echo $data->files()->find(html($data->coverpic()))->url() ?>')">
    <div class="container text-center">
        <p class="quote">
            <?php echo html($data->quote()) ?>
        </p>
        <p class="quote-user">
            - <?php echo html($data->quoteuser()) ?>
        </p>
        <!-- <button type="button" class="play-trigger btn-link " data-toggle="modal" data-target="#modal-video"><i class="fa fa-youtube-play"></i> Watch the video</button> -->
    </div><!--//container-->
</section><!--//promo-->