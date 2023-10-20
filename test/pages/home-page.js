class HomePage {

    open(){
        return browser.url("/");
    }
    get btnGetStarted(){
        return $("#get-started");
    }

    get elementWidget(){

        return $(".elementor-widget-container h1");
    }
     
}

export default new HomePage();