if ((typeof cmsGGI2138944 !== 'undefined') && (cmsGGI2138944 != null) && (typeof cmsGGI2138944.Destroy !== 'undefined')){cmsGGI2138944.Destroy();}function comSlider2138944() { 
var self = this; 
var g_HostRoot = "";
var jssor_slider2138944 = null;cmsGGI2138944 = this;this.Destroy = function(){ if (self.jssor_slider2138944 != null) { self.jssor_slider2138944.$Destroy(); self.jssor_slider2138944 = null;} };  	this.jssor_slider2138944_starter = function (containerId) { 
            var _SlideshowTransitions = [ 
{$Duration:800,$Delay:300,$Cols:8,$Rows:4,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationCross,$Easing:$Jease$.$OutQuad}
,{$Duration:1200,x:4,$Cols:2,$Zoom:11,$SlideOut:true,$Assembly:2049,$ChessMode:{$Column:15},$Easing:{$Left:$Jease$.$InExpo,$Zoom:$Jease$.$InExpo,$Opacity:$Jease$.$Linear},$Opacity:2}
,{$Duration:1000,$Zoom:1,$Rotate:1,$SlideOut:true,$Easing:{$Opacity:$Jease$.$Linear},$Opacity:2,$Round:{$Rotate:0.5}}
,{$Duration:1400,x:0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InSine},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:1400,x:-0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InSine},$Opacity:2,$ZIndex:-10}}
,{$Duration:1200,$Zoom:11,$Rotate:1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Brother:{$Duration:1200,$Zoom:11,$Rotate:-1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Shift:600}}
,{$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}];
			
					var options = {
										$AutoPlay: true,                                   //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
										$Idle: 0,
										$LazyLoading: 1,
										$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
										$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
										$FillMode: 5,										//[Optional] The way to fill image in slide, 0: stretch, 1: contain (keep aspect ratio and put all inside slide), 2: cover (keep aspect ratio and cover whole slide), 4: actual size, 5: contain for large image and actual size for small image, default value is 0 
										$Loop: 1,										//[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1 
										$PauseOnHover: 0, 							//[Optional] Whether to pause when mouse over if a slider is auto playing, 0: no pause, 1: pause for desktop, 2: pause for touch device, 3: pause for desktop and touch device, 4: freeze for desktop, 8: freeze for touch device, 12: freeze for desktop and touch device, default value is 1 
										$StartIndex: 0,	//[Optional] Index of slide to display when initialize, default value is 0 
 
									$SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
										$Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
										$Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
										$TransitionsOrder: 0,       //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
									}										
									
					, $ArrowNavigatorOptions: {
						$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
						$ChanceToShow: 1       //[Required] 0 Never, 1 Mouse Over, 2 Always
					}
				, $ThumbnailNavigatorOptions: {
						$Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
						$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

						$ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
						$AutoCenter: 0,                                 //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
						$Rows: 1,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
						$SpacingX: 8,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
						$SpacingY: 8,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
						$Cols: 12,                              //[Optional] Number of pieces to display, default value is 1
						$ParkingPosition: 300,                          //[Optional] The offset position to park thumbnail
						$Orientation: 2,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
						$NoDrag: false                            //[Optional] Disable drag or not, default value is false
					}						
									};

									self.jssor_slider2138944 = new $JssorSlider$(containerId, options);										
									
										}; 
							
									//responsive code begin
									//you can remove responsive code if you do not want the slider scales while window resizes
									this.ScaleSlider = function() {		
										var  parentWidth = jqCS2138944("#comSContainer2138944_").parent().width();
										if (parentWidth) {
											self.jssor_slider2138944.$ScaleWidth(Math.min(parentWidth, 1408));
										}
										else
											window.setTimeout(self.ScaleSlider, 30);											
									};
				
					this.scriptLoaded = function(options)
					{
				   jqCS2138944 = jQuery2138944.noConflict(false);jqCS2138944("#comslider_in_point_2138944").html('<div id="comSContainer2138944_" name="comSContainer2138944_" style="display: inline-block; text-align: left; background:#000000; border:0px; width:1408px; height:743px; position: relative; top: 0px; left: 0px;"><div data-u="slides" style="position: absolute; left: 0px; top: 0px; width:1320px; height:743px; overflow: hidden;"><div idle="5000" id="imgidle_2138944_1290262"><img class="cmskb_image_0" data-u="image" imgw="1000" imgh="667" src="comslider2138944/img/201005123102101.jpg?ot=1601893872"></img><img data-u="thumb" src="comslider2138944/imgnav/201005123102101.jpg?timstamp=1601893930"></img></div><div idle="5000" id="imgidle_2138944_1290263"><img class="cmskb_image_1" data-u="image" imgw="1320" imgh="743" src="comslider2138944/img/201005123102102.jpg?ot=1601893872"></img><img data-u="thumb" src="comslider2138944/imgnav/201005123102102.jpg?timstamp=1601893930"></img></div><div idle="5000" id="imgidle_2138944_1290265"><img class="cmskb_image_2" data-u="image" imgw="1112" imgh="743" src="comslider2138944/img/201005123205104.jpg"></img><img data-u="thumb" src="comslider2138944/imgnav/201005123205104.jpg?timstamp=1601893930"></img></div><div data-u="any" class="cmspu" style="display:block; position:absolute; bottom:10px; left:10px;"><a target="_blank" href="https://www.comslider.com" title="Powered by comSlider &#013;&#013;Use premium version to remove this watermark."><img alt="powered by comSlider" src="comslider2138944/imgstatic/cmswatermark.png?v=6"/></a></div></div>                <!-- ThumbnailNavigator Skin Begin -->    <div data-u="thumbnavigator" class="jssort2138944" style="position: absolute; width: 72px; height: 172px; top: 8px; right: 8px; ">        <!-- Thumbnail Item Skin Begin -->        <style>           /* jssor slider thumbnail navigator skin 2138944 css */            /*            .jssort2138944 .p            (normal)            .jssort2138944 .p:hover      (normal mouseover)            .jssort2138944 .pav          (active)            .jssort2138944 .pav:hover    (active mouseover)            .jssort2138944 .pdn          (mousedown)            */            .jssort2138944 .w            {                position: absolute;                width: 70px;                height: 50px;                box-sizing:content-box;            }            .jssort2138944 .wsub            {                position: absolute;                width: 72px;                height: 52px;            }            .jssort2138944 .pav .wsub, .jssort2138944 .p:hover .wsub            {                position: absolute;                width: 72px;                height: 52px;                top: 0px;                left: 0px;            }            .jssort2138944 .w            {                margin: 0px !important;                border: #FFFFFF 1px solid;            }            .jssort2138944 .p:hover .w,            .jssort2138944 .pav .w, .jssort2138944 .pav:hover .w            {                border: #FFFFFF 1px solid !important;                margin: 0px !important;            }            .jssort2138944 .c            {                width: 72px;                height: 52px;                filter: alpha(opacity=40);                opacity: 0.4;                -moz-transition: opacity .6s;                -webkit-transition: opacity .6s;                -o-transition: opacity .6s;                margin: 0px !important;                background-color: #000000;            }            .jssort2138944 .p:hover .c,            .jssort2138944 .pav .c, .jssort2138944 .pav:hover .c            {                 filter: alpha(opacity=0);                 opacity: 0;                 background-color: #000000;             }            .jssort2138944 .pav .c            {                margin: 0px !important;            }                         .jssort2138944 .p:hover .c            {                transition: none;                -moz-transition: none;                -webkit-transition: none;                -o-transition: none;                margin: 0px !important;            }        </style>        <div data-u="slides" style="right: 0px; top: 0px;">            <div data-u="prototype" class="p" style="position: absolute; width: 72px; height: 52px; top: 0; left: 0;">                <div class="w">                    <thumbnailtemplate style="width: 70px; height: 50px; border: none; position: absolute; top: 0; left: 0;"></thumbnailtemplate>                </div>                <div class="wsub" style="overflow:hidden;">                	<div class="c" style="position: absolute; top: 0; left: 0"></div>                </div>            </div>        </div>        <!-- Thumbnail Item Skin End -->   </div><!-- Arrow Navigator Skin Begin --><style>/* jssor slider arrow navigator skin 02 css *//*.jssora2138944l              (normal).jssora2138944r              (normal).jssora2138944l:hover        (normal mouseover).jssora2138944r:hover        (normal mouseover).jssora2138944ldn            (mousedown).jssora2138944rdn            (mousedown)*/.jssora2138944l, .jssora2138944r, .jssora2138944ldn, .jssora2138944rdn{	position: absolute;	cursor: pointer;	display: block;    overflow:hidden;}.jssora_back_2138944 { filter: alpha(opacity=100);opacity: 1; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("comslider2138944/imgnavctl/defback.png?1601893881");}.jssora_back_2138944:hover {cursor:pointer;  filter: alpha(opacity=100);opacity: 1; background-image: url("comslider2138944/imgnavctl/defbackhover.png?1601893881");}.jssora_forward_2138944 { filter: alpha(opacity=100);opacity: 1; background-repeat: no-repeat;  background-position: center; position:absolute; background-image: url("comslider2138944/imgnavctl/defforward.png?1601893881");}.jssora_forward_2138944:hover {cursor:pointer;  filter: alpha(opacity=100);opacity: 1; background-image: url("comslider2138944/imgnavctl/defforwardhover.png?1601893881");} </style><!-- Arrow Left --><div data-u="arrowleft" class="jssora_back_2138944" style="width:44px;height:48px;top:0px;left:0px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div><!-- Arrow Right --><div data-u="arrowright" class="jssora_forward_2138944" style="width:44px;height:48px;top:0px;right:88px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75"></div></div>');
                    jqCS2138944("#comslider_in_point_2138944 a").bind('click',  function() { if ((this.name.length > 0) && (isNaN(this.name) == false)) {  self.switchToFrame(parseInt(this.name)); return false;} });
                
					self.jssor_slider2138944_starter("comSContainer2138944_");
							
						self.ScaleSlider();
						jqCS2138944(document).ready(function() {				
							self.ScaleSlider();
						});
						jqCS2138944(window).bind("load", self.ScaleSlider);
						jqCS2138944(window).bind("resize", self.ScaleSlider);
						jqCS2138944(window).bind("orientationchange", self.ScaleSlider);						
					
}
var g_CSIncludes = new Array();
var g_CSLoading = false;
var g_CSCurrIdx = 0; 
 this.include = function(src, last) 
                {
                    if (src != '')
                    {				
                            var tmpInclude = Array();
                            tmpInclude[0] = src;
                            tmpInclude[1] = last;					
                            //
                            g_CSIncludes[g_CSIncludes.length] = tmpInclude;
                    }            
                    if ((g_CSLoading == false) && (g_CSCurrIdx < g_CSIncludes.length))
                    {


                            var oScript = null;
                            if (g_CSIncludes[g_CSCurrIdx][0].split('.').pop().substring(0,3) == 'css')
                            {
                                oScript = document.createElement('link');
                                oScript.href = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/css';
                                oScript.rel = 'stylesheet';

                                oScript.onloadDone = true; 
                                g_CSLoading = false;
                                g_CSCurrIdx++;								
                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                        self.scriptLoaded(); 
                                else
                                        self.include('', false);
                            }
                            else
                            {
                                oScript = document.createElement('script');
                                oScript.src = g_CSIncludes[g_CSCurrIdx][0];
                                oScript.type = 'text/javascript';

                                //oScript.onload = scriptLoaded;
                                oScript.onload = function() 
                                { 
                                        if ( ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true; 
                                                g_CSLoading = false;
                                                g_CSCurrIdx++;								
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                };
                                oScript.onreadystatechange = function() 
                                { 
                                        if ( ( "loaded" === oScript.readyState || "complete" === oScript.readyState ) && ! oScript.onloadDone ) 
                                        {
                                                oScript.onloadDone = true;
                                                g_CSLoading = false;	
                                                g_CSCurrIdx++;
                                                if (g_CSIncludes[g_CSCurrIdx-1][1] == true) 
                                                        self.scriptLoaded(); 
                                                else
                                                        self.include('', false);
                                        }
                                }
                                
                            }
                            //
                            document.getElementsByTagName("head").item(0).appendChild(oScript);
                            //
                            g_CSLoading = true;
                    }

                }
                

}
objcomSlider2138944 = new comSlider2138944();
objcomSlider2138944.include('comslider2138944/js/jquery-1.10.1.js?ts=1601893931', false);
objcomSlider2138944.include('comslider2138944/js/jquery-ui-1.10.3.effects.js?ts=1601893931', false);
objcomSlider2138944.include('comslider2138944/js/jssor.slider.min_27_5_0.js?ts=1601893931', false);
objcomSlider2138944.include('comslider2138944/js/jssorcap.min.js?ts=1601893931', true);
