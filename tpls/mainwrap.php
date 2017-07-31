<?php
defined('_JEXEC') or die;
?>
<?php
$menu = & JSite::getMenu();
if($menu->getActive() !== $menu->getDefault()) :
?>
<div id="mainwrap" class="clearfix">
  <div class="internal-container">
    <?php if ($this->countModules('left')) : ?>
      <div id="left">
        <jdoc:include type="modules" name="left" style="xhtml" />
      </div>
    <?php endif;?>

    <div id="main">
        <div id="maininner">
            <?php if ($this->countModules('abovemain')) : ?>
                <div id="abovemain">
                    <jdoc:include type="modules" name="abovemain" style="xhtml" />
                </div>
            <?php endif; ?>

            <div class="custom">
                    <?php if ($this->countModules('main')) : ?>
                        <jdoc:include type="modules" name="main" style="xhtml" />
                    <?php endif; ?>
                <jdoc:include type="component" />
            </div>
        </div>
    </div>

    <?php if ($this->countModules('right')) : ?>
        <div id="right">
            <div id="rightinner">
                <div class="custom">
                    <jdoc:include type="modules" name="right" style="xhtml" />
                </div>
            </div>
        </div>
    <?php endif;?>
  </div>
</div>

<?php endif;?>
