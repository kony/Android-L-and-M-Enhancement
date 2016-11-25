/*
*************************************************************************************
Method Name: clip
Function : to show the clipping funtion on a image

*************************************************************************************  
*/
function clip()
{
  kony.print("\n**********in clip*******\n");
  //"clipView" : View Clipping enables to change the shape of a view. 
  //This feature can change the shape of the view to something like circular or rounded rectangle irrespective of shape of the background.
  // Supported shapes to clipping a view are rectangle, rounded rectangle & circle.
  //The below is the view clipping code.
  frmClipView.flxClip.clipView = { 
                                   shape: constants.VIEW_CLIP_SHAPE_CIRCLE,
                                   bounds: [10,20,30,15], 
                                   radius: 40
                                 };
} 
/*
*************************************************************************************
Method Name: clipBack
Function : to reset the clipped view to normal view

*************************************************************************************  
*/
function clipBack()
{
  kony.print("**********in clipBack*******");
  frmHome.show();
  frmClipView.flxClip.clipView = { 
                                   shape: constants.VIEW_CLIP_SHAPE_RECTANGLE,
                                   bounds: [-10,-20,-30,-15], 
                                   radius: 240

                                 };
}
/*
*************************************************************************************
Method Name:
Function : to enable the ripple function for the flex Container

*************************************************************************************  
*/
function ripple()
{
  kony.print("\n**********in ripple*******\n");
  //"rippleBackground" : Defines the ripple background for a widget. 
  //If both rippleBackground & normal/focus skins are set through constructor then rippleBackground will take priority.  
  //If skin/focusSkins/pressedSkins/disabledSkins skins are set dynamically the skin/focusSkins/pressedSkins/disabledSkins will take priority.
  //We set the ripple color property also for coloered ripples.
  frmRipple.flxRipple1.rippleBackground ={
                                           rippleColor:"5a65e000",
  	                                       contentLayers:[
                                                           {
                                                             background:"9e9e9e00",
                                                             backgroundType:constants.RIPPLE_CONTENT_LAYER_COLOR
                                                           }
                                                         ]
                                         };
}
/*
*************************************************************************************
Method Name: rippleback
Function : to navigate back to the home form

*************************************************************************************  
*/
function rippleback()
{
  kony.print("\n**********in rippleback*******\n");
    frmHome.show();
}

/*
*************************************************************************************
Method Name: shadowExp
Function : to show the shadow function for the widget

*************************************************************************************  
*/

function shadowExp()
{
  kony.print("\n**********in shadowExp*******\n");
  frmShodowView.flxShadow.shadowDepth = 30;
  frmShodowView.flxShadow.shadowType = constants.VIEW_BOUNDS_SHADOW;
}
/*
*************************************************************************************
Method Name: backShadowExp
Function : to reset the widget from the shadow view

*************************************************************************************  
*/
function backShadowExp()
{
  kony.print("\n**********in backShadowExp*******\n");
  frmHome.show();
  //"shadowDepth" : Represents the depth of the shadow in terms of dp.
  //As the shadow depth increases, widget appears to be elevated from the screen and the casted shadow becomes soft
  frmShodowView.flxShadow.shadowDepth = 0;
  //"shadowType" : Specifies the shape of the widget shadow that is being casted. By default, widget shadow takes the shape of the widget background.
  frmShodowView.flxShadow.shadowType = constants.VIEW_BOUNDS_SHADOW;
}