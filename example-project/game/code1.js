gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDEdaObjects1= [];
gdjs.GameCode.GDEdaObjects2= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEdaObjects1Objects = Hashtable.newFrom({"Eda": gdjs.GameCode.GDEdaObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEdaObjects1Objects = Hashtable.newFrom({"Eda": gdjs.GameCode.GDEdaObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameCode.GDNewSpriteObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) > (( gdjs.GameCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDNewSpriteObjects1[0].getPointX("Center")));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].addForce(450, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < (( gdjs.GameCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDNewSpriteObjects1[0].getPointX("Center")));
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].addForce(-(450), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "t") >= 1;
if (isConditionTrue_0) {
gdjs.GameCode.GDEdaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEdaObjects1Objects, gdjs.random(720), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "t");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Eda"), gdjs.GameCode.GDEdaObjects1);
{for(var i = 0, len = gdjs.GameCode.GDEdaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEdaObjects1[i].addForce(0, 700, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Eda"), gdjs.GameCode.GDEdaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEdaObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNewSpriteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDEdaObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDEdaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDEdaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "t");
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDEdaObjects1.length = 0;
gdjs.GameCode.GDEdaObjects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDEdaObjects1.length = 0;
gdjs.GameCode.GDEdaObjects2.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
