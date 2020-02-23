/**
 * @description web page interactive
 * @date 2020.2.21
 * @author 杯c咔+
 */


/**
 * @description init function for web page interative
 * @main
 *     it will be go to do some functions
 */

function interactiveInit() {
    oneKeyExpansionMenuBar();
}
interactiveInit();

/**
 * @description One key expansion menu bar
 * @main
 *     if the menu bar was show it will be hide
 *     else it will be shown
 *     and it will be changed the expansionButton backgroundImage depend on the statuis of menu bar 
 */
function oneKeyExpansionMenuBar() {
    document.getElementById("TelescopicButton").addEventListener("click", function () {
        if (document.getElementById("menu")) {
            if (document.getElementById("menu").style.width == "240px") {
                document.getElementById("menu").style.width = "60px";
                document.getElementById("TelescopicButton").setAttribute('src', "./assets/img/展开 (1).png");
            } else {
                document.getElementById("menu").style.width = "240px";
                document.getElementById("TelescopicButton").setAttribute('src', "./assets/img/收缩.png");

            }
        }

    })
}
