<?php
defined('_JEXEC') or die;
?>
<div id="belowwrap"  class="clearfix">
  <div class="internal-container">
    <?php if ($this->countModules('below')) : ?>
      <div id="below">
        <jdoc:include type="modules" name="below" style="xhtml" />
      </div>
    <?php endif;?>
  </div>
</div>
