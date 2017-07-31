<?php
defined('_JEXEC') or die;
?>
<div id="abovewrap"  class="clearfix">
  <div class="internal-container">
    <?php if ($this->countModules('above')) : ?>
      <div id="above">
        <jdoc:include type="modules" name="above" style="xhtml" />
      </div>
    <?php endif;?>
  </div>
</div>
