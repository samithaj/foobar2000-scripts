$init_ps_global(showpanel,5)
$init_ps_global(tog,2)
$puts(skin.path,%ps_user_profile_path%\sam92\images\)
$puts(buttons,%ps_user_profile_path%\sam92\images\buttons\)
$puts(set.path,%ps_user_profile_path%\sam92\settings\)
$puts(ColorScheme,$replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\ColorScheme\,))
$puts(textColorScheme,$replace($findfile($get(set.path)\textColorScheme\*),%ps_user_profile_path%\sam92\settings\\textColorScheme\,))


$puts(ColorScheme,$get(ColorScheme))
$puts(btnSel,255-255-255)
//$drawblurrect(-5,25,$add(%_width%,10),%_height%,$get(ColorScheme))


//$drawrect(5,0,%_width%,500,$findfile($get(set.path)/ColorScheme/*),,aa)


//$drawrect(0,0,%_width%,29,$blendcolour($get(ColorScheme),10,0-0-0,22),)

$gradientrect(0,15,%_width%,15,$blendcolour($get(ColorScheme),10,0-0-0,22),$blendcolour($get(textColorScheme),10,0-0-0,22),vertical)
$gradientrect(0,0,%_width%,15,$blendcolour($get(textColorScheme),10,0-0-0,22),$blendcolour($get(ColorScheme),10,0-0-0,22),vertical)




$gradientrect(15,30,15,%_height%,$blendcolour($get(ColorScheme),10,0-0-0,22),$blendcolour($get(textColorScheme),10,0-0-0,22),horizontal)
$gradientrect(0,30,15,%_height%,$blendcolour($get(textColorScheme),10,0-0-0,22),$blendcolour($get(ColorScheme),10,0-0-0,22),horizontal)

//$gradientrect(X,Y,WIDTH,HEIGHT,COLOR1 R-G-B,COLOR2 R-G-B,ARGUMENTS)
//$drawrect(X,Y,WIDTH,HEIGHT,FILLING R-G-B-OPACITY,BORDER R-G-B-OPACITY,ARGUMENTS)


$movepanel_c(seekVol,132,0,$div($sub(%_width%,700),2),21)
$movepanel_c(playbackButtons,$sub(%_width%,520),-2,170,30)
$movepanel_c(plbc,$sub(%_width%,345),0,40,25)
$movepanel_c(love,$sub(%_width%,545),0,25,25)
$movepanel_c(yt,$sub(%_width%,570),2,25,25)

//$set_ps_global(showpanel,$right($findfile($get(set.path)/panel/*),1))




//$ifequal($get_ps_global(showpanel),4,
//$showpanel_c(Other,1)$showpanel_c(Browser,0)
//$puts(OthButton,20-90-200),
//$showpanel_c(Other,0)
//$puts(OthButton,20-60-100))

//$set_ps_global(showpanel,$right($findfile($get(set.path)/panel/*),1))

//$showpanel(1,1);REFRESH
//$movepanel(1,0,0,,,) 


$ifequal($get_ps_global(showpanel),1,
$showpanel_c(NowPlaying,1)$showpanel_c(side,1)$showpanel_c(Browser,0)$showpanel_c(fil,1)
$puts(NowButton,%ps_user_profile_path%/sam92/images/nowPlayingh.png),
$showpanel_c(NowPlaying,0)
$puts(NowButton,%ps_user_profile_path%/sam92/images/nowPlaying.png))

$ifequal($get_ps_global(showpanel),2,
$showpanel_c(fil,1)$showpanel_c(artAlb,1)$showpanel_c(side,1)$showpanel_c(Video,0)
$puts(AlbButton,%ps_user_profile_path%/sam92/images/libraryh.png),
$showpanel_c(artAlb,0)
$puts(AlbButton,%ps_user_profile_path%/sam92/images/library.png))

$ifequal($get_ps_global(showpanel),3,
$showpanel_c(Browser,1)$showpanel_c(fil,1)$showpanel_c(side,0)
$puts(BroButton,%ps_user_profile_path%/sam92/images/playlisth.png),
$showpanel_c(Browser,0)
$puts(BroButton,%ps_user_profile_path%/sam92/images/playlist.png))

$ifequal($get_ps_global(showpanel),4,
$showpanel_c(Video,1)$showpanel_c(side,1)
$puts(VidButton,%ps_user_profile_path%/sam92/images/videoh.png),
$showpanel_c(Video,0)
$puts(VidButton,%ps_user_profile_path%/sam92/images/video.png))






//$sub(%_width%,$add(500,%w%)
//$set_ps_global(w,$gettextwidth(%artist% - %title%))











//$drawstring(%artist% - %title%,$sub(%_width%,$add(520,$div(%_width%,5))),-2,$div(%_width%,5),30,255-255-255,hcenter vcenter,glow:5:$replace($findfile($get(set.path)\ColorScheme\*),F:\Music\foobar2000m\sam92\settings\\ColorScheme\,):1)


$drawstring(%artist% - %title%,$add($div($sub(%_width%,700),2),132),-2,$div($sub(%_width%,700),2),30,255-255-255,hcenter vcenter,glow:5:$replace($findfile($get(set.path)\ColorScheme\*),F:\Music\foobar2000m\sam92\settings\\ColorScheme\,):1)


//$drawstring($div($info(samplerate),1000),$sub(%_width%,$add(520,$div(%_width%,5))),-2,$div(%_width%,5),30,255-255-255,hcenter vcenter,glow:5:$replace($findfile($get(set.path)\ColorScheme\*),F:\Music\foobar2000m\sam92\settings\\ColorScheme\,):1)
//$replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\Video\,)

//$drawstring($measurestring(%artist% - %title%,0,2,,,255-255-255-255),$sub(%_width%,600))
//$measurestring(%artist% - %title%,0,2,,,255-255-255-255)








////////////////////////////////////

$puts(font,255-255-255)

//$puts(selCol,$blendcolour($get(ColorScheme),10,0-0-0,22))



//$puts(LibButton,$get(selCol))
$ifequal($get_ps_global(brwPanel),1,
$puts(btn1,$get(btnSel)),
$puts(btn1,$get(textColorScheme)))

$ifequal($get_ps_global(brwPanel),2,
$puts(btn2,$get(btnSel)),
$puts(btn2,$get(textColorScheme)))

$ifequal($get_ps_global(brwPanel),3,
$puts(btn3,$get(btnSel)),
$puts(btn3,$get(textColorScheme)))


$ifequal($get_ps_global(brwPanel),4,
$puts(btn4,$get(btnSel)),
$puts(btn4,$get(textColorScheme)))


$ifequal($get_ps_global(brwPanel),5,
$puts(btn5,$get(btnSel)),
$puts(btn5,$get(textColorScheme)))


$ifequal($get_ps_global(brwPanel),6,
$puts(btn6,$get(btnSel)),
$puts(btn6,$get(textColorScheme)))


$ifequal($get_ps_global(brwPanel),7,
$puts(btn7,$get(btnSel)),
$puts(btn7,$get(textColorScheme)))

$ifequal($get_ps_global(brwPanel),8,
$puts(btn8,$get(btnSel)),
$puts(btn8,$get(textColorScheme)))


$ifequal($get_ps_global(brwPanel),9,
$puts(btn9,$get(btnSel)),
$puts(btn9,$get(textColorScheme)))


$ifequal($get_ps_global(brwPanel),10,
$puts(btn10,$get(btnSel)),
$puts(btn10,$get(textColorScheme)))

$ifequal($get_ps_global(brwPanel),11,
$puts(btn11,$get(btnSel)),
$puts(btn11,$get(textColorScheme)))




//////////////////







//
//--------> Buttons
//--> Window
// exit buttons
//$font(FontAwesome,15,)
//$textbutton($sub(%ps_width%,50),-10,50,50,$char(61453),$char(61453),COMMAND:'File/Exit',fontcolor:255-255-255,fontcolor:0-0-0 brushcolor:214-73-55)

$imagebutton($sub(%ps_width%,43),0,,,$get(skin.path)buttons\exit.png,$get(skin.path)buttons\exit_h.png,COMMAND:File/Exit)
$imagebutton($sub(%_width%,71),0,,,$get(skin.path)buttons\btmaximize.png,$get(skin.path)buttons\btmaximize_h.png,COMMAND:View/Maximize/Restore)
$imagebutton($sub(%ps_width%,99),0,,,$get(skin.path)buttons\minimize.png,$get(skin.path)buttons\minimize_h.png,COMMAND:View/Hide)


//$textbutton($sub(%_width%,330),0,70,22,NowPlaying,NowPlaying,SETGLOBAL:showpanel:1;REFRESH,fontcolor:$get(NowButton),fontcolor:20-90-200)
//$textbutton($sub(%_width%,260),0,55,22,Albums,Albums,SETGLOBAL:showpanel:2;REFRESH,fontcolor:$get(AlbButton),fontcolor:20-90-200)
//$textbutton($sub(%_width%,210),0,50,22,Browser,Browser,SETGLOBAL:showpanel:3;REFRESH,fontcolor:$get(BroButton),fontcolor:20-90-200)
//$textbutton($sub(%_width%,160),0,30,22,Other,Other,COMMAND: View / Visualizations / Youtube Videor;SETGLOBAL:showpanel:4;REFRESH,fontcolor:$get(OthButton),fontcolor:20-90-200)

$imagebutton(0,0,38,28,$get(NowButton),%ps_user_profile_path%/sam92/images/nowPlayingh.png,SETGLOBAL:showpanel:1;SETGLOBAL:showsidepanel:1;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
$imagebutton(35,-2,30,30,$get(AlbButton),%ps_user_profile_path%/sam92/images/libraryh.png,SETGLOBAL:showpanel:2;SETGLOBAL:showsidepanel:1;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
$imagebutton(70,-1,27,27,$get(BroButton),%ps_user_profile_path%/sam92/images/playlisth.png,SETGLOBAL:showpanel:3;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
$imagebutton(98,0,33,25,$get(VidButton),%ps_user_profile_path%/sam92/images/videoh.png,SETGLOBAL:showpanel:4;SETGLOBAL:showsidepanel:5;SETGLOBAL:tog:0;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)



//$imagebutton(0,55,23,23,$get(btn1),$get(buttons)treeh.png,SETGLOBAL:tog:1;SETGLOBAL:brwPanel:1;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
//$imagebutton(0,80,23,23,$get(btn2),$get(buttons)poh.png,SETGLOBAL:tog:1;SETGLOBAL:brwPanel:2;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
//$imagebutton(0,110,23,23,$get(btn3),$get(buttons)hish.png,SETGLOBAL:tog:1;SETGLOBAL:brwPanel:3;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
//$imagebutton(0,140,23,23,$get(btn4),$get(buttons)wshh.png,SETGLOBAL:tog:1;SETGLOBAL:brwPanel:4;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
//$imagebutton(0,170,23,23,$get(btn5),$get(buttons)filth.png,SETGLOBAL:tog:1;SETGLOBAL:brwPanel:5;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
//$imagebutton(0,190,23,23,$get(btn6),$get(buttons)pssh.png,SETGLOBAL:tog:1;SETGLOBAL:brwPanel:6;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)
$font(FontAwesome,15,)


$textbutton(0,55,25,25,$char(61883),$char(61883),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:1;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn1),fontcolor:$get(btnSel))
$textbutton(0,80,25,25,$char(61616),$char(61616),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:2;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn2),fontcolor:$get(btnSel))
$textbutton(0,105,25,25,$char(61484),$char(61484),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:3;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn3),fontcolor:$get(btnSel))
$textbutton(0,130,25,25,$char(61483),$char(61483),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:4;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn4),fontcolor:$get(btnSel))
$textbutton(0,155,25,25,$char(61642),$char(61642),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:5;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn5),fontcolor:$get(btnSel))
$textbutton(0,180,25,25,$char(61463),$char(61463),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:6;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn6),fontcolor:$get(btnSel))



$textbutton(0,213,25,25,$char(61442),$char(61442),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:7;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn7),fontcolor:$get(btnSel))
$textbutton(0,240,25,25,$char(61441),$char(61441),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:8;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn8),fontcolor:$get(btnSel))
$textbutton(0,265,25,25,$char(61443),$char(61443),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:9;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn9),fontcolor:$get(btnSel))
$textbutton(0,290,25,25,$char(61444),$char(61444),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:10;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn10),fontcolor:$get(btnSel))
$textbutton(0,315,25,25,$char(61445),$char(61445),SETGLOBAL:tog:1;SETGLOBAL:brwPanel:11;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause,fontcolor:$get(btn11),fontcolor:$get(btnSel))

$ifequal($get_ps_global(tog),1,

$drawrect(0,30,%_width%,%_height%,$get(ColorScheme))





$imagebutton(0,30,23,23,$get(buttons)l.png,$get(buttons)lh.png,SETGLOBAL:tog:0;SETGLOBAL:brwPanel:7;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)


$movepanel_c(fil,25,28,$sub($mul($div(%_width%,7),5),695),$mul($div($sub(%_height%,30),5),4))
$movepanel_c(Browser,$sub($mul($div(%_width%,7),5),665),28,$sub(%_width%,$sub($mul($div(%_width%,7),5),665)),$mul($div($sub(%_height%,28),5),4))

$movepanel_c(artAlb,$sub($mul($div(%_width%,7),5),670),28,670,$mul($div($sub(%_height%,28),5),4))
$movepanel_c(NowPlaying,$sub($mul($div(%_width%,7),5),665),28,665,$mul($div($sub(%_height%,30),5),4))
,


$imagebutton(0,30,23,23,$get(buttons)r.png,$get(buttons)rh.png,SETGLOBAL:tog:1;SETGLOBAL:brwPanel:1;COMMAND:Playback/Play or pause;COMMAND:Playback/Play or pause)

$movepanel_c(fil,0,0,00,0)
$movepanel_c(Browser,25,28,$sub(%_width%,25),$mul($div($sub(%_height%,28),5),4))
$movepanel_c(artAlb,25,28,$sub($mul($div(%_width%,7),5),25),$mul($div($sub(%_height%,28),5),4))
$movepanel_c(NowPlaying,25,28,$sub($mul($div(%_width%,7),5),25),$mul($div($sub(%_height%,30),5),4))



)



$puts(set.path,%ps_user_profile_path%\sam92\settings\)





$puts(backColorScheme,$blendcolour($replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\ColorScheme\,),10,0-0-0,22))


$drawrect(25,28,%_width%,%_height%,$get(ColorScheme),$get(ColorScheme))


