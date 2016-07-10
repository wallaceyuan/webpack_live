<div class="header">
	<div class="header-bg"></div>
	<div class="header-content">
		<div class="logo">
			<a href="http://www.kankanews.com/" target="_blank">
				<img src="http://skin.kankanews.com/v6/index/images/livelogo.png">
			</a>
		</div>
		<div class='menu'>
        <?php
          $list = user_getOutLink(8126,10);
          foreach($list as $key=>$value){
          	if($classid!='' && $value['keyboard'] == 8680) $classname='class="cur"';
          	else  $classname='';
		?>
			<a <?=$classname?> href="<?=$value['link']?>" target="_blank"><?=$value['title']?><?=$value['id']==653409?'<i></i>':''?></a>
        <?php
			}
        ?>
			<div id='more'>
				<a href="javascript:void(0);">更多</a>
				<div class="subnav" style="display: none;"><b></b>
					<div class="box clearfix">
						<?php
							$list = user_getOutLink(8131,30);
      						foreach($list as $key=>$value){
							?>
								<a href="<?=$value['link']?>" target="_blank"><?=$value['title']?></a>
							<?php
							if($key==15) break;
								}
							?>
					</div>
				</div>
			</div>
		</div>
		<!--start 搜索-->
		<div class="searchBox right">
			<form action="http://www.kankanews.com/search/" id="all_search" method="get" target="_blank" class="clearfix">
				<input type="text" class="searchTxt" value="" name="q" />
				<input type="submit" class="searchBtn" value="" />
			</form>
		</div>
		<!--end 搜索-->
		<!--start 天气 -->
		<div class="weatherBox right"></div>
		<!--end 搜索-->
	</div>
</div>