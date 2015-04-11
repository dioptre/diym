<div class="row item">
    <figure class="figure col-md-7 col-sm-12 col-xs-12">
        <img class="img-responsive" src="<?php echo $data->files()->find(html($data->figure()))->url() ?>" alt="" />
        <figcaption class="figure-caption"><?php echo html($data->caption()) ?></figcaption>
    </figure>

    <!-- col-md-offset-1 col-sm-offset-0 col-xs-offset-0 -->
    <div class="content col-md-5 col-sm-12 col-xs-12 ">
        <h3 class="title"><?php echo html($data->title()) ?></h3>
        <div class="desc">
            <?php echo kirbytext($data->desc()) ?>
        </div>
        <div class="quote">
<!--             <div class="quote-profile">
                <img class="img-responsive img-circle" src="<?php echo $data->files()->find(html($data->testimonialauthorpic()))->url() ?>" alt="" />
            </div><!--//profile-->
            <div class="quote-content">
                <blockquote><p>
                    <?php echo kirbytext($data->testimonial()) ?>
                </p></blockquote>
                <p class="source">
                    <?php echo html($data->testimonialauthor()) ?>
                </p>
            </div><!--//quote-content-->
        </div><!--//quote-->
    </div><!--//content-->
</div><!--//item-->