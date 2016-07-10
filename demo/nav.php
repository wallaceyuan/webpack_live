<div class="topBar">
  <div class="box topBarBox clearfix">
    <div class="logoBox left"> <a href="http://www.kankanews.com" class="logo">看看新闻网</a> </div>
    <!--start 搜索-->
    <div class="searchBox right">
      <form action="http://www.kankanews.com/search/" id="all_search" method="get" target="_blank">
      <input type="text" placeholder="请输入关键字" class="searchTxt" value="" name="q" />
      <input type="submit" class="searchBtn" value="" />
      </form>
    </div>
    <!--end 搜索--> 
  </div>
</div>
<!--start 导航-->
<div class="mainNav">
  <div class="area-wrapper clearfix">
      <ul class="left clearfix">
        <?php
          $list = user_getOutLink(8126,10);
          foreach($list as $key=>$value){
            if($classid==''&&$key==0) $classname='class="cur"';
            else if($classid!=''&&$classid==$value['keyboard']) $classname='class="cur"';
            else if($value['ftitle']!='') $classname='class="'.$value['ftitle'].'"';
else  $classname='';
         ?>
                <li  <?=$classname?>><a href="<?=$value['link']?>"><?=$value['title']?></a><?=$value['id']==653409?'<i></i>':''?></li>
        <?php
                }
        ?>
      </ul>
      <ul class="snav left clearfix">
        <?php
      $list = user_getOutLink(8131,30);
          for($i=0;$i<9;$i++){
if($list[$i]['ftitle']!='') $classname='class="'.$list[$i]['ftitle'].'"';
else  $classname='';
        ?>
           <li <?=$classname?>><a href="<?=$list[$i]['link']?>"><?=$list[$i]['title']?></a></li>
        <?php
          }
        ?>
      </ul>
      <ul class="appnav right clearfix">
        <li><a href="http://www.kankanews.com/m/kankanxinwen.html" target="_blank">看看新闻</a></li>
        <li><a href="http://www.kankanews.com/m/jianghu.html" target="_blank">江湖视频</a></li>
      </ul>
  </div>
</div>
<div class="dropDiv clearfix">
  <div class="box">
    <?php
      foreach($list as $key=>$value){
     ?>
           <a href="<?=$value['link']?>" target="_blank"><?=$value['title']?></a>
    <?php
    if($key==15) break;
      }
    ?>
  </div>
</div>
<!--end 导航--> 