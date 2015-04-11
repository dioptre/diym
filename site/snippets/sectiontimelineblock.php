<div class="node  <?php ecco($data->postion() == 'left', ' left') ?>">
    <div class="marker"></div>
    <div class="entry" style="background-image: url('<?php
                    if ($coverpix = html($data->pic())){
                        if ($coverpixx = $data->files()->find($coverpix)){
                            echo $coverpixx->url();
                        }
                    }
                ?>');">
        <div class="intro">
            <h4><?php echo html($data->title()) ?></h4>
            <p>
                <?php echo kirbytext($data->desc()) ?>
            </p>
        </div>
    </div>
</div>