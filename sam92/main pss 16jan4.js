  



$puts(buttons,%ps_user_profile_path%\sam92\images\buttons\)
$puts(set.path,%ps_user_profile_path%\sam92\settings\)







$puts(ColorScheme,$replace($findfile($get(set.path)\ColorScheme\*),%ps_user_profile_path%\sam92\settings\\ColorScheme\,))
$puts(textColorScheme,$replace($findfile($get(set.path)\textColorScheme\*),%ps_user_profile_path%\sam92\settings\\textColorScheme\,))
$puts(backColorScheme,$replace($findfile($get(set.path)\backColorSchemeText\*),%ps_user_profile_path%\sam92\settings\\backColorSchemeText\,))
$puts(backColor,$replace($findfile($get(set.path)\backColor\*),%ps_user_profile_path%\sam92\settings\\backColor\,))
$puts(colorSchemeDark,$replace($findfile($get(set.path)\colorSchemeDark\*),%ps_user_profile_path%\sam92\settings\\colorSchemeDark\,))
$puts(colorSchemeLight,$replace($findfile($get(set.path)\colorSchemeLight\*),%ps_user_profile_path%\sam92\settings\\colorSchemeLight\,))
$puts(DarkPanelBack,$replace($findfile($get(set.path)\DarkPanelBack\*),%ps_user_profile_path%\sam92\settings\\DarkPanelBack\,))
$puts(LightPanelBack,$replace($findfile($get(set.path)\LightPanelBack\*),%ps_user_profile_path%\sam92\settings\\LightPanelBack\,))

$set_ps_global(ColorScheme,$get(ColorScheme))
$set_ps_global(textColorScheme,$get(textColorScheme))
$set_ps_global(backColorScheme,$get(backColorScheme))
$set_ps_global(backColor,$get(backColor))
$set_ps_global(btnColor,$get(btnColor))
$set_ps_global(colorSchemeDark,$get(colorSchemeDark))
$set_ps_global(colorSchemeLight,$get(colorSchemeLight))
$set_ps_global(DarkPanelBack,$get(DarkPanelBack))
$set_ps_global(LightPanelBack,$get(LightPanelBack))


$put(btnColor,%colorSchemeLight%)


//fill backgoround
$drawrect(0,0,%_width%,%_height%,%colorSchemeLight%,%colorSchemeLight%)

//middle shades 
$gradientrect($add(%leftBarW%,%leftPanelW%),0,5,$sub(%_height%,%botBarH%),%colorSchemeDark%,%colorSchemeLight%,horizontal)
$gradientrect($sub($add($add(%leftBarW%,%leftPanelW%),%midPanelW%),5),0,5,$sub(%_height%,%botBarH%),%colorSchemeLight%,%colorSchemeDark%,horizontal)



$drawrect(0,0,%_width%,$sub(%topBarH%,0),$blendcolour(%colorSchemeLight%,1,%colorSchemeDark%,2),$blendcolour(%colorSchemeLight%,1,%colorSchemeDark%,2))





//$gradientrect(0,$div(%topBarH%,2),%_width%,$div(%topBarH%,2),$blendcolour($get(ColorScheme),10,0-0-0,22),$blendcolour($get(textColorScheme),10,0-0-0,22),vertical)
//$gradientrect(0,0,%_width%,$div(%topBarH%,2),$blendcolour($get(textColorScheme),10,0-0-0,22),$blendcolour($get(ColorScheme),10,0-0-0,22),vertical)




//////////////////////////////////////////////////////////////////////////////////////////////////

  $movepanel_c(menu,0,0,%topBarH%,%topBarH%)

$movepanel_c(seekbar,%topBarH%,0,%leftPanelW%,%topBarH%)
$movepanel_c(search,$sub(%ps_width%,%rightPanelW%),7,$sub($sub(%rightPanelW%,$mul(%topBarH%,6)),15),%topBarH%)


$set_ps_global(L0,$char(61883))
$set_ps_global(L1,$char(61642))
  $set_ps_global(L2,$char(61504))
  $set_ps_global(L3,$char(61616))
  $set_ps_global(L4,$char(61494))
  $set_ps_global(L5,$char(61463))
  $set_ps_global(L6,$char(61442))
  $set_ps_global(L7,$char(61483))
  $set_ps_global(L8,$char(61447))
$set_ps_global(L9,$char(61778))
$set_ps_global(L10,$char(61484))
$set_ps_global(L11,$char(61443))
$set_ps_global(L12,$char(61443))

$set_ps_global(M0,$char(61764))
$set_ps_global(M1,$char(61477))
$set_ps_global(M2,$char(61802)) //youtube
$set_ps_global(M3,$char(61616))
$set_ps_global(M4,$char(61616))

  $set_ps_global(BX,0)
  $set_ps_global(BY,100)

  $set_ps_global(MBX,$sub($sub(%_width%,%rightPanelW%),$mul(%topBarH%,5)))
  $set_ps_global(MBY,2)

  $set_ps_global(BW,25)
  $set_ps_global(TOG,0)
  $init_ps_global(LEFT,L15)
  $init_ps_global(BOT,B0)
  $set_ps_global(BSC,255-255-255)
$set_ps_global(TBSC,255-255-255)
  $set_ps_global(BNC,%colorSchemeDark%)
$set_ps_global(TBNC,%colorSchemeLight%)


  $set_ps_global(leftBarW,30)
  $set_ps_global(topBarH,35)
  $set_ps_global(botBarH,50)

  


   $init_ps_global(topPanelH,$mul($div($sub(%_height%,%topBarH%),5),4))

  $set_ps_global(leftPanelW,$mul($div($sub(%_width%,%leftBarW%),10),2))
  $set_ps_global(leftPanelH,$mul($div($sub(%_height%,%topBarH%),5),4))

  $set_ps_global(midPanelW,$mul($div($sub(%_width%,%leftBarW%),10),5))
  $set_ps_global(midPanelH,$mul($div($sub(%_height%,%topBarH%),5),4))

  $set_ps_global(rightPanelW,$mul($div($sub(%_width%,%leftBarW%),10),3))
  $set_ps_global(rightPanelH,$mul($div($sub(%_height%,%topBarH%),5),4))

  $set_ps_global(botPanelW,$sub(%_width%,%leftBarW%))
  $set_ps_global(botPanelH,$mul($div($sub(%_height%,%topBarH%),5),1))
  $font(FontAwesome,17,)
$set_ps_global(BW,28)
  //left buttons


  $set_ps_global(BSC,$blendcolour(0-0-0,1,%colorSchemeDark%,2))

  $textbutton(%BX%,$add(%BY%,$mul(0,%BW%)),%BW%,%BW%,%L0%,%L0%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L0;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L0),1,%BSC%,%BNC%),fontcolor:%BSC%)
  $textbutton(%BX%,$add(%BY%,$mul(1,%BW%)),%BW%,%BW%,%L1%,%L1%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L1;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L1),1,%BSC%,%BNC%),fontcolor:%BSC%)
  $textbutton(%BX%,$add(%BY%,$mul(2,%BW%)),%BW%,%BW%,%L2%,%L2%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L2;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L2),1,%BSC%,%BNC%),fontcolor:%BSC%)
  $textbutton(%BX%,$add(%BY%,$mul(3,%BW%)),%BW%,%BW%,%L3%,%L3%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L3;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L3),1,%BSC%,%BNC%),fontcolor:%BSC%)
  $textbutton(%BX%,$add(%BY%,$mul(4,%BW%)),%BW%,%BW%,%L4%,%L4%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L4;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L4),1,%BSC%,%BNC%),fontcolor:%BSC%)

  $textbutton(%BX%,$add(%BY%,$mul(5,%BW%)),%BW%,%BW%,%L5%,%L5%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L5;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L5),1,%BSC%,%BNC%),fontcolor:%BSC%)
  $textbutton(%BX%,$add(%BY%,$mul(6,%BW%)),%BW%,%BW%,%L6%,%L6%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L6;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L6),1,%BSC%,%BNC%),fontcolor:%BSC%)
$textbutton(%BX%,$add(%BY%,$mul(7,%BW%)),%BW%,%BW%,%L7%,%L7%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L7;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L7),1,%BSC%,%BNC%),fontcolor:%BSC%)

 $textbutton(%BX%,$add(%BY%,$mul(8,%BW%)),%BW%,%BW%,%L8%,%L8%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L8;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L8),1,%BSC%,%BNC%),fontcolor:%BSC%)
  $textbutton(%BX%,$add(%BY%,$mul(9,%BW%)),%BW%,%BW%,%L9%,%L9%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L9;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L9),1,%BSC%,%BNC%),fontcolor:%BSC%)

  $textbutton(%BX%,$add(%BY%,$mul(10,%BW%)),%BW%,%BW%,%L10%,%L10%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L10;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L10),1,%BSC%,%BNC%),fontcolor:%BSC%)
  $textbutton(%BX%,$add(%BY%,$mul(11,%BW%)),%BW%,%BW%,%L11%,%L11%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L11;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L11),1,%BSC%,%BNC%),fontcolor:%BSC%)
$textbutton(%BX%,$add(%BY%,$mul(12,%BW%)),%BW%,%BW%,%L12%,%L12%,SETGLOBAL:TOG:1;SETGLOBAL:LEFT:L12;REFRESH,fontcolor:$ifequal($strcmp(%LEFT%,L11),1,%BSC%,%BNC%),fontcolor:%BSC%)




 $font(FontAwesome,18,)

  $showpanel_c(L0,$ifequal($strcmp(%LEFT%,L0),1,1,0))
  $showpanel_c(L1,$ifequal($strcmp(%LEFT%,L1),1,1,0))
  $showpanel_c(L2,$ifequal($strcmp(%LEFT%,L2),1,1,0))
$showpanel_c(L3,$ifequal($strcmp(%LEFT%,L3),1,1,0))
  $showpanel_c(L4,$ifequal($strcmp(%LEFT%,L4),1,1,0))
$showpanel_c(L5,$ifequal($strcmp(%LEFT%,L5),1,1,0))
  $showpanel_c(L6,$ifequal($strcmp(%LEFT%,L6),1,1,0))
  $showpanel_c(L7,$ifequal($strcmp(%LEFT%,L7),1,1,0))
  $showpanel_c(L8,$ifequal($strcmp(%LEFT%,L8),1,1,0))
$showpanel_c(L9,$ifequal($strcmp(%LEFT%,L9),1,1,0))
  $showpanel_c(L10,$ifequal($strcmp(%LEFT%,L10),1,1,0))
  $showpanel_c(L11,$ifequal($strcmp(%LEFT%,L11),1,1,0))
  $showpanel_c(L12,$ifequal($strcmp(%LEFT%,L12),1,1,0))

  







  $showpanel_c(M0,$ifequal($strcmp(%MID%,M0),1,1,0))
  $showpanel_c(M1,$ifequal($strcmp(%MID%,M1),1,1,0))
  $showpanel_c(M2,$ifequal($strcmp(%MID%,M2),1,1,0))
  $showpanel_c(M3,$ifequal($strcmp(%MID%,M3),1,1,0))

  $showpanel_c(M4,$ifequal($strcmp(%MID%,M4),1,1,0))
  $showpanel_c(M5,$ifequal($strcmp(%MID%,M5),1,1,0))


$showpanel_c(MR0,$ifequal($strcmp(%MIDRIGHT%,MR0),1,1,0))
  


$showpanel_c(R0,$ifequal($strcmp(%RIGHT%,R0),1,1,0))

 $showpanel_c(B0,$ifequal($strcmp(%BOT%,B0),1,1,0))
 $showpanel_c(B1,$ifequal($strcmp(%BOT%,B1),1,1,0))
 $showpanel_c(B2,$ifequal($strcmp(%BOT%,B2),1,1,0))




$ifequal(%bTog%,1,





////////////////////////////bot vizualise on

$set_ps_global(topPanelH,$mul($div($sub(%_height%,%topBarH%),5),4))

$gradientrect(0,$sub($add(%topBarH%,%topPanelH%),5),%_width%,5,0-0-0-0,%colorSchemeDark%,vertical)

//bottom up gradiant
$gradientrect(0,$add($add(%topBarH%,%topPanelH%),0),%_width%,$sub(%_height%,$add(%topBarH%,%topPanelH%)),%colorSchemeLight%,%colorSchemeDark%,vertical)

$movepanel_c(%BOT%,0,$add($add(%topBarH%,%topPanelH%),0),%_width%,$add(%botPanelH%,3))


,///////////////////////////bot vizualise oFF

//left shade
//$gradientrect($sub(%leftBarW%,0),%topBarH%,5,%_height%,%colorSchemeDark%,0-0-0-0,horizontal)




$set_ps_global(topPanelH,$sub($sub(%_height%,%topBarH%),%botBarH%))
$movepanel_c(%BOT%,130,$add($add(%topBarH%,%topPanelH%),0),$sub(%_width%,200),$sub(%botBarH%,0))



  ////////////  playback buttons  / /////////////////////////////////////
  $puts(buttony,$sub(%ps_height%,40))
  $puts(buttonsize,30)
  $puts(buttond,$add($get(buttonsize),10))

  $puts(x,-25)

$set_ps_global(BSC,$blendcolour(%colorSchemeLight%,1,%colorSchemeDark%,2))

$font(FontAwesome,13,)
//  $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61517),$char(61517),COMMAND:'Playback/Stop',fontcolor:%colorSchemeDark%,fontcolor:%BSC%)
  $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61513),$char(61513),COMMAND:'Playback/Previous',fontcolor:%colorSchemeDark%,fontcolor:%BSC%)

$font(FontAwesome,20,)
  
$if($or($not(%ps_isplaying%),%ps_ispause%),
  $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61515),$char(61515),COMMAND:'Playback/Play or pause',fontcolor:%colorSchemeDark%,fontcolor:%BSC%),
  $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61516),$char(61516),COMMAND:'Playback/Play or pause',fontcolor:%colorSchemeDark%,fontcolor:%BSC%)
  )

$font(FontAwesome,13,)
  $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61520),$char(61520),COMMAND:'Playback/Next',fontcolor:%colorSchemeDark%,fontcolor:%BSC%)

  $puts(x,$sub(%ps_width%,110))

//  $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61676),$char(61676),COMMAND:'Playback/Random',fontcolor:%colorSchemeDark%,fontcolor:%BSC%)

  $if($stricmp($left(%ps_playback_order%,6),'Repeat'),
    $if($stricmp($left(%ps_playback_order%,10),'Repeat (tr'),
      $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61470),$char(61470),COMMAND:'Playback/Order/Shuffle (tracks)';REFRESH,fontcolor:%colorSchemeDark%,fontcolor:%BSC%)
      ,
      $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61473),$char(61473),COMMAND:'Playback/Order/Repeat (track)';REFRESH,fontcolor:%colorSchemeDark%,fontcolor:%BSC%)
      )
    ,
    $if($stricmp($left(%ps_playback_order%,7),'Shuffle'),
      $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61556),$char(61556),COMMAND:'Playback/Order/Default';REFRESH,fontcolor:%colorSchemeDark%,fontcolor:%BSC%)
      ,
      $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61816),$char(61816),COMMAND:'Playback/Order/Repeat (playlist)';REFRESH,fontcolor:%colorSchemeDark%,fontcolor:%BSC%)
      )
  )
$font(FontAwesome,15,)
  $textbutton($put(x,$add($get(x),$get(buttond))),$get(buttony),$get(buttonsize),$get(buttonsize),$char(61459),$char(61459),COMMAND:'File/Preferences',fontcolor:%colorSchemeDark%,fontcolor:%BSC%)

  ////////////  playback buttons end  / /////////////////////////////////////


)

//left panel gradiants
$gradientrect(%leftBarW%,%topBarH%,%leftPanelW%,$add($div(%topPanelH%,2),1),%colorSchemeLight%,$blendcolour(%colorSchemeLight%,2,%colorSchemeDark%,1),vertical nonlinear aa,-50)
$gradientrect(%leftBarW%,$sub($add(%topBarH%,$div(%topPanelH%,2)),0),%leftPanelW%,$sub($div(%topPanelH%,2),0),$blendcolour(%colorSchemeLight%,2,%colorSchemeDark%,1),$blendcolour(%colorSchemeLight%,1,%colorSchemeDark%,1),vertical nonlinear aa,40)



$ifequal($strcmp(%MID%,M3),1,



//right panel gradiants
$gradientrect($add(%leftBarW%,%leftPanelW%,5),%topBarH%,$sub(%_width%,$add(%leftBarW%,%leftPanelW%)),$add($div(%topPanelH%,2),1),%LightPanelBack%,$blendcolour(%LightPanelBack%,2,%DarkPanelBack%,1),vertical nonlinear aa,-50)
$gradientrect($add(%leftBarW%,%leftPanelW%,5),$sub($add(%topBarH%,$div(%topPanelH%,2)),0),$sub(%_width%,$add(%leftBarW%,%leftPanelW%)),$sub($div(%topPanelH%,2),0),$blendcolour(%LightPanelBack%,2,%DarkPanelBack%,1),$blendcolour(%LightPanelBack%,1,%DarkPanelBack%,1),vertical nonlinear aa,40)
,
//right panel gradiants
$gradientrect($add($sub(%_width%,%rightPanelW%),-6),%topBarH%,$add(%rightPanelW%,5),$add($div(%topPanelH%,2),1),%LightPanelBack%,$blendcolour(%LightPanelBack%,2,%DarkPanelBack%,1),vertical nonlinear aa,-50)
$gradientrect($add($sub(%_width%,%rightPanelW%),-6),$sub($add(%topBarH%,$div(%topPanelH%,2)),0),$add(%rightPanelW%,5),$sub($div(%topPanelH%,2),0),$blendcolour(%LightPanelBack%,2,%DarkPanelBack%,1),$blendcolour(%LightPanelBack%,1,%DarkPanelBack%,1),vertical nonlinear aa,40)


)



//left side shades
$gradientrect($sub(%leftBarW%,0),%topBarH%,5,%topPanelH%,%colorSchemeDark%,0-0-0-0,horizontal)

//bottom up shade
$gradientrect(0,$sub($add(%topPanelH%,%topBarH%),5),%_width%,5,0-0-0-0,%colorSchemeDark%,vertical)


$gradientrect(0,$sub(%topBarH%,0),%_width%,5,%colorSchemeDark%,0-0-0-0,vertical)
//botoom gradiants





 $movepanel_c(%LEFT%,%leftBarW%,%topBarH%,%leftPanelW%,%topPanelH%)
///////////////////////////////////

////////////////   mid


 $ifequal($strcmp(%MID%,M0),1,
$movepanel_c(%MID%,$add(%leftBarW%,%leftPanelW%),$sub(%topBarH%,0),%midPanelW%,$add(%topPanelH%,0))
,
$movepanel_c(%MID%,$add($add(%leftBarW%,%leftPanelW%),0),%topBarH%,$sub(%midPanelW%,0),%topPanelH%)


)
 $movepanel_c(%MIDRIGHT%,$add(%leftBarW%,%leftPanelW%),%topBarH%,$sub(%_width%,$add(%leftBarW%,%leftPanelW%)),%topPanelH%)

$movepanel_c(%RIGHT%,$add($add(%leftBarW%,%leftPanelW%),%midPanelW%),%topBarH%,$add(%rightPanelW%,6),%topPanelH%)






  // Top Bar
  $puts(topBarH,50)
  $puts(topBarHh,25)




////////////////   right
$font(FontAwesome,13,)
$textbutton($sub(%ps_width%,%topBarH%),0,%topBarH%,%topBarH%,$char(61453),$char(61453),COMMAND:'File/Exit',fontcolor:$get(btnColor),fontcolor:%colorSchemeLight% brushcolor:214-73-55)

$textbutton($sub(%ps_width%,$mul(%topBarH%,2)),0,%topBarH%,%topBarH%,$char(61541),$char(61541),COMMAND:'View/Maximize/Restore';REFRESH,fontcolor:$get(btnColor),fontcolor:%colorSchemeLight% brushcolor:220-220-220)
$textbutton($sub(%ps_width%,$mul(%topBarH%,3)),0,%topBarH%,%topBarH%,$char(61544),$char(61544),COMMAND:'View/Hide';REFRESH,fontcolor:$get(btnColor),fontcolor:%colorSchemeLight% brushcolor:220-220-220)

$font(FontAwesome,15,)
$textbutton($sub(%ps_width%,$mul(%topBarH%,4)),1,30,%topBarH%,$char(61459),$char(61459),COMMAND:'File/Preferences',fontcolor:$get(btnColor),fontcolor:%BSC%)
$textbutton($sub(%ps_width%,$mul(%topBarH%,5)),1,30,%topBarH%,$char(61597),$char(61597),COMMAND:'View/Console',fontcolor:$get(btnColor),fontcolor:%BSC%)

$textbutton($sub(%ps_width%,$mul(%topBarH%,6)),1,30,%topBarH%,$char(61616),$char(61616),COMMAND:'Library/Facets',fontcolor:$get(btnColor),fontcolor:%BSC%)


// Frame Title






$set_ps_global(global_font_bold,InputMonoCondensed Medium)
$set_ps_global(global_font_bold,InputMonoCondensed)
$puts(lwidth,$max($min($div(%ps_width%,4),450),350))
$puts(rwidth,$max($min($div(%ps_width%,4),450),350))

$if(%ps_isplaying%,


$font(Source Han Sans Medium,12,)
$puts(t1,%title%)
$puts(w1,$gettextwidth($get(t1)))

$font(FontAwesome,12,)
$puts(t2,[$char(61447) %artist%[ ft. %feat%]])
$puts(w2,$gettextwidth($get(t2)))

$font(FontAwesome,12,)
$puts(t3,[$char(61778) %album%])
$puts(w3,$gettextwidth($get(t3)))
$font(Digital-7,10,)
$puts(t4,[%play_count%] / %codec% $pad_right(%bitrate%,4)k / $div(%samplerate%,1000)$if(%__bitspersample%,x%__bitspersample%,kHz))
$puts(w4,$gettextwidth($get(t4)))

$puts(w,$add(%ps_width%,$get(lwidth),-$get(rwidth)))




$puts(xoffset,$add(%topBarH%,2))
$puts(w,$sub($get(lwidth),125))
$puts(yoffset,0)
$font(Source Han Sans Medium,12,)
$textbutton($get(xoffset),$get(yoffset),$add($get(w1),10),%topBarH%,$get(t1),$get(t1),COMMAND:'View/Show now playing in playlist';SETGLOBAL:LEFT:L4;REFRESH,fontcolor:%colorSchemeLight%,brushcolor:%colorSchemeDark%-00)
$puts(yoffset,1)
$font(FontAwesome,12,)
$puts(xoffset,$add($get(xoffset),$add($get(w1),10)))
$textbutton($get(xoffset),$get(yoffset),$add($get(w2),10),%topBarH%,$get(t2),$get(t2),CONTEXT:'Quicksearch for same/Artist';SETGLOBAL:LEFT:L8;REFRESH,fontcolor:%colorSchemeLight%,brushcolor:40-40-40-00)

$font(FontAwesome,12,)
$puts(xoffset,$add($get(xoffset),$add($get(w2),10)))
$textbutton($get(xoffset),$get(yoffset),$add($get(w3),10),%topBarH%,$get(t3),$get(t3),CONTEXT:'Quicksearch for same/Album';SETGLOBAL:LEFT:L9;REFRESH,fontcolor:%colorSchemeLight%,brushcolor:40-40-40-00)
$puts(yoffset,10)
$font(Digital-7,10,)
$puts(xoffset,$add($get(xoffset),$add($get(w3),10)))
$textbutton($get(xoffset),2,$add($get(w4),10),%topBarH%,$get(t4),$get(t4),CONTEXT:'Properties',fontcolor:%colorSchemeLight%,brushcolor:40-40-40-00)



,
$font(KG Defying Gravity,27,)
$drawtextex(foobar2000,20,1,200,%topBarH%,%colorSchemeLight%,hcenter vcenter)
)




///////////  //mid buttons
$set_ps_global(BSC,255-255-255)

 $font(FontAwesome,23,)
$set_ps_global(BW,32)
  $textbutton($add(%MBX%,$mul(0,%BW%)),%MBY%,%BW%,%BW%,%M0%,%M0%,SETGLOBAL:MIDRIGHT:MR;SETGLOBAL:MID:M0;SETGLOBAL:RIGHT:R0;SETGLOBAL:bTog:1;SETGLOBAL:BOT:B0;SETGLOBAL:LEFT:L4;REFRESH,fontcolor:$ifequal($strcmp(%MID%,M0),1,%TBSC%,%TBNC%),fontcolor:%BSC%)
  $textbutton($add(%MBX%,$mul(1,%BW%)),%MBY%,%BW%,%BW%,%M1%,%M1%,SETGLOBAL:MIDRIGHT:MR;SETGLOBAL:MID:M1;SETGLOBAL:RIGHT:R0;SETGLOBAL:bTog:0;SETGLOBAL:BOT:B2;SETGLOBAL:LEFT:L1;REFRESH,fontcolor:$ifequal($strcmp(%MID%,M1),1,%TBSC%,%TBNC%),fontcolor:%TBSC%)
  $textbutton($add(%MBX%,$mul(2,%BW%)),%MBY%,%BW%,%BW%,%M2%,%M2%,SETGLOBAL:MIDRIGHT:MR;SETGLOBAL:MID:M2;SETGLOBAL:RIGHT:R0;SETGLOBAL:bTog:0;SETGLOBAL:BOT:B2;REFRESH,fontcolor:$ifequal($strcmp(%MID%,M2),1,%TBSC%,%TBNC%),fontcolor:%TBSC%)
  $textbutton($add(%MBX%,$mul(3,%BW%)),%MBY%,%BW%,%BW%,%M3%,%M3%,SETGLOBAL:MIDRIGHT:MR0;SETGLOBAL:MID:M3;SETGLOBAL:RIGHT:R;SETGLOBAL:bTog:0;SETGLOBAL:BOT:B2;SETGLOBAL:LEFT:L0;REFRESH,fontcolor:$ifequal($strcmp(%MID%,M3),1,%TBSC%,%TBNC%),fontcolor:%TBSC%)
  $textbutton($add(%MBX%,$mul(4,%BW%)),%MBY%,%BW%,%BW%,%M4%,%M4%,SETGLOBAL:MIDRIGHT:MR;SETGLOBAL:MID:M4;SETGLOBAL:RIGHT:R0;SETGLOBAL:bTog:0;SETGLOBAL:BOT:B2;SETGLOBAL:LEFT:L0;REFRESH,fontcolor:$ifequal($strcmp(%MID%,M3),1,%TBSC%,%TBNC%),fontcolor:%TBSC%)

$set_ps_global(BW,25)