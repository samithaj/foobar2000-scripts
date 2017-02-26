$puts(set.path,%ps_user_profile_path%\sam92\settings\)


$puts(buttons,%ps_user_profile_path%\sam92\images\buttons\)
//$puts(font,$blendcolour($replace($findfile($get(set.path)\textColorScheme\*),%ps_user_profile_path%\sam92\settings\\textColorScheme\,)))
$puts(font,255-255-255)
$puts(selCol,$blendcolour($replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\ColorScheme\,),10,0-0-0,22))
//$drawblurrect(-5,-5,$add(%_width%,10),50,$replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\ColorScheme\,))


$movepanel_c(wsh,0,0,%_width%,%_height%)

$puts(set.path,%ps_user_profile_path%\sam92\settings\)
//$gradientrect(0,0,%_width%,5,$blendcolour($replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\ColorScheme\,),10,0-0-0,22),41-41-41,vertical)


$puts(ColorScheme,$replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\ColorScheme\,))


//$gradientrect(0,0,%_width%,5,$blendcolour($replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\ColorScheme\,),10,0-0-0,22),41-41-41,vertical)



$puts(backColorScheme,$blendcolour($replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\ColorScheme\,),10,0-0-0,22))

$drawrect(0,0,%_width%,%_height%,$get(ColorScheme),$get(ColorScheme))










$init_ps_global(brwPanel,13)

$puts(LibButton,$get(selCol))
$ifequal($get_ps_global(brwPanel),01,
$showpanel_c(01,1)
$puts(LibButton,$get(selCol)),
$showpanel_c(01,0)
$puts(LibButton,100-100-100-0))

$ifequal($get_ps_global(brwPanel),02,
$showpanel_c(02,1)
$puts(PlsButton,$get(selCol)),
$showpanel_c(02,0)
$puts(PlsButton,100-100-100-0))

$ifequal($get_ps_global(brwPanel),03,
$showpanel_c(03,1)
$puts(VizButton,$get(selCol)),
$showpanel_c(03,0)
$puts(VizButton,100-100-100-0))


$ifequal($get_ps_global(brwPanel),04,
$showpanel_c(04,1)
$puts(wshButton,$get(selCol)),
$showpanel_c(04,0)
$puts(wshButton,100-100-100-0))


$ifequal($get_ps_global(brwPanel),05,
$showpanel_c(05,1)
$puts(PSButton,$get(selCol)),
$showpanel_c(05,0)
$puts(PSButton,100-100-100-0))


$ifequal($get_ps_global(brwPanel),06,
$showpanel_c(06,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(06,0)
$puts(PSSButton,100-100-100-0))


$ifequal($get_ps_global(brwPanel),07,
$showpanel_c(07,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(07,0)
$puts(PSSButton,100-100-100-0))
$ifequal($get_ps_global(brwPanel),08,
$showpanel_c(08,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(08,0)
$puts(PSSButton,100-100-100-0))
$ifequal($get_ps_global(brwPanel),09,
$showpanel_c(09,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(09,0)
$puts(PSSButton,100-100-100-0))

$ifequal($get_ps_global(brwPanel),10,
$showpanel_c(10,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(10,0)
$puts(PSSButton,100-100-100-0))

$ifequal($get_ps_global(brwPanel),11,
$showpanel_c(11,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(11,0)
$puts(PSSButton,100-100-100-0))


$ifequal($get_ps_global(brwPanel),12,
$showpanel_c(12,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(12,0)
$puts(PSSButton,100-100-100-0))


$ifequal($get_ps_global(brwPanel),13,
$showpanel_c(13,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(13,0)
$puts(PSSButton,100-100-100-0))


$ifequal($get_ps_global(brwPanel),14,
$showpanel_c(14,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(14,0)
$puts(PSSButton,100-100-100-0))
$ifequal($get_ps_global(brwPanel),15,
$showpanel_c(15,1)
$puts(PSSButton,$get(selCol)),
$showpanel_c(15,0)
$puts(PSSButton,100-100-100-0))


//$imagebutton($sub(%_width%,25),0,23,23,$get(buttons)l.png,$get(buttons)lh.png,SETGLOBAL:tog:0;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
//$textbutton(0,0,25,22,Tree,Tree,SETGLOBAL:brwPanel:1;REFRESH;,fontcolor:$get(font) brushcolor:$get(LibButton),fontcolor:255-255-255 brushcolor:$get(selCol))
//$textbutton(25,0,25,22,PO,PO,SETGLOBAL:brwPanel:2;REFRESH;,fontcolor:$get(font) brushcolor:$get(PlsButton),fontcolor:255-255-255 brushcolor:$get(selCol))
//$textbutton(50,0,25,22,His,His,SETGLOBAL:brwPanel:3;REFRESH;,fontcolor:$get(font) brushcolor:$get(VizButton),fontcolor:255-255-255 brushcolor:$get(selCol))
//$textbutton(75,0,25,22,wsh,wsh,SETGLOBAL:brwPanel:4;REFRESH;,fontcolor:$get(font) brushcolor:$get(wshButton),fontcolor:255-255-255 brushcolor:$get(selCol))
//$textbutton(100,0,25,22,Fil,Fil,SETGLOBAL:brwPanel:5;REFRESH;,fontcolor:$get(font) brushcolor:$get(PSButton),fontcolor:255-255-255 brushcolor:$get(selCol))
//$textbutton(125,0,25,22,PSS,PSS,SETGLOBAL:brwPanel:6;REFRESH;,fontcolor:$get(font) brushcolor:$get(PSSButton),fontcolor:255-255-255 brushcolor:$get(selCol))







