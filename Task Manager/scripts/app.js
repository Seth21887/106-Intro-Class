const iconImportant = "iImportant fas fa-star";
const iconNonImportant = "iImportant far fa-star";
var important = false;
var panelVisible = true;

function toggleImportance(){
    console.log("Clicked");
    if(important){
        //from important to not important
        $("#iImportant").removeClass(iconImportant).addClass(iconNonImportant);
        important = false;
    }else{
        //not important to important
        $("#iImportant").removeClass(iconNonImportant).addClass(iconImportant);
        important = true;
    }
}

function togglePanel(){
    if(panelVisible){
        $("#form").hide();
        panelVisible = false;
    }else{
        $("#form").show();
        panelVisible = true;
    }
}

function saveTask(){
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val();
    let dueDate = $("#selDate").val();
    let location = $("#txtLocation").val();
    let invites = $("#txtInvites").val();
    let color = $("#selColor").val();
    let frequency = $("#selFrequency").val();
    let status = $("#selStatus").val();


    console.log(title,desc,dueDate,location,invites,color,frequency,status);
}
function init(){

    //assign events
    $("#iImportant").click(toggleImportance);
    $("#btnTogglePanel").click(togglePanel);
    $("#saveTask").click(saveTask);
    //load data

}

window.onload = init;