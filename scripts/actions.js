function Actions(){
    var _this = this;
    this.onHeadButtonClick = function(evt){
        pagesManager.changePage(globalMemory.headButtonTarget, {path:globalMemory.headButtonTargetPath});
    };
    //-------------------------------------------------------------------------------------
    //page actions on load
    //-------------------------------------------------------------------------------------
    this.onPageLoad = {};
	  this.onPageLoad.welcome = function(){};
    //-------------------------------------------------------------------------------------
    //page actions on display
    //-------------------------------------------------------------------------------------
    this.onPageDisplay = {};
    this.onPageDisplay.error = function(){
        errorStatusCode.innerText = globalMemory.error.code;
        errorClientMsg.innerText = globalMemory.error.msg;
    };
    
    //page action on ANY page display
    this.onAnyPageDisplay = function({pageName = false, pageConfig = false}){
        //title
        webTitle.textContent = (pageConfig.webTitle || "");
        //menu select
        document.querySelectorAll("header [data-selected_when]").forEach(elem => {
            if(elem.dataset.selected_when == pageName){
                elem.classList.add("selected");
            }else{
                elem.classList.remove("selected");
            }
        })
    }

    //-------------------------------------------------------------------------------------
    //page actions on data
    //-------------------------------------------------------------------------------------
    this.onPageData = {};
    this.onPageData.welcome = function(){
        
    }
    
    //-------------------------------------------------------------------------------------
    //page specific methods
    //-------------------------------------------------------------------------------------
    this.pageMethods = {};
    this.pageMethods.welcome = function(){

    };

    //-------------------------------------------------------------------------------------
    //other actions
    //-------------------------------------------------------------------------------------
    this.onBeforeBoot = function () {

    };
    this.onAfterBoot = function () {

    };
    this.onWebsocketConnection = function () {
        
    };
}