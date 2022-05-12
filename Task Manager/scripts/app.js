const iconImportant = "iImportant fas fa-star";
const iconNonImportant = "iImportant far fa-star";
var important = false;
var panelVisible = true;
var total = 0;

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
        $("#btnTogglePanel").text("< Show Form");
    }else{
        $("#form").show();
        panelVisible = true;
        $("#btnTogglePanel").text("Hide Form >");
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


    //create an object
    let task = new Task(important,title,desc,dueDate,location,invites,color,frequency,status);
    

    //for encoding, there are two main methods: JSON and XML

    $.ajax({ //asynchronous javascript xml
        type: "post", //we're using a post because we want to save data
        url: "https://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(task), //data must be a string, a value, or a boolean
        contentType: "application/json",
        success: function(successDetails){
            console.log("Task Saved", successDetails);
            displayTask(task);
            clearForm();
            total += 1;
            $("#headCount").text("You have " + total + " tasks");
        },
        error: function(errorDetails){
            console.error("Save Failed", errorDetails);
        }

    });
}

function clearForm(){
    $("#txtTitle").val(""); //.val is to read, .val with a parameter is to write
    $("#txtDesc").val("");
    $("#selDate").val("");
    $("#txtLocation").val("");
    $("#txtInvites").val("");
    $("#selColor").val("#000000");
    $("#selFrequency").val("0");
    $("#selStatus").val("1");
    important = true;
    toggleImportance(); //as its set on true, this function will automatically get it back to not-important when it clears
}

function getStatusText(status){
    switch(status){
        case "1":
            return "Pending";
        case "2":
            return "In progress";
        case "3":
            return "Paused";
        case "4":
            return "Completed";
        case "5":
            return "Abandoned";

        default:
            return "Other"; //if status doesn't match any of the available status above.
    }
}

function getFrequencyText(frequency){
    switch(frequency){
        case "0":
            return "-One Time-";
        case "1":
            return "Daily";
        case "2":
            return "Weekly";
        case "3":
            return "Monthly";
        default:
            return "Other";
    }
}

function displayTask(task){

    let iconClass = iconNonImportant;
    if(task.important){
        iconClass = iconImportant;
    }
    let syntax = `
    <div class="task-item" style="border: 3px solid ${task.color};">
        <div class="info-2">
            <i class ="${iconClass}"></i>
        </div>
        <div class="info-1">
            <h5>${task.title}</h5>
            <p>${task.desc}</p>
        </div>
        <div class="info-2">
            <label>${task.dueDate}</label>
            <label>${task.location}</label>
        </div>
        <div class="info-3">
            <p>${task.invites}</p>
        </div>
        <div class="info-2">
            <label>${getStatusText(task.status)}</label>
            <label>${getFrequencyText(task.frequency)}</label>
        </div>
    </div>`
    
    $("#tasks").append(syntax);
}


function fetchTasks(){
    $.ajax({
        type: "get",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",
        success: function(successDetails){
            let data = JSON.parse(successDetails); //we have to decode from string to object in this function
            console.log(data); 

            //create a total variable
            total = 0;
            for(let i=0;i<data.length;i++){
                let task = data[i];
                if(task.name == "Seth"){
                    total+= 1;
                    displayTask(task);
                }
            }
            //travel the array
            //if the task is yours, increase the total by 1

            //for loop over data
            //get every element inside the array
            //send the element to the display function
            
            
            //send the text (counter) to the heading #headCount
            $("#headCount").text("You have " + total + " tasks");
        },
        error: function(errorDetails){
            console.error("Error retrieving data", errorDetails);
        }
    });
}

//DELETE request
// /api/products/clear/Seth
function deleteTasks(){
    $.ajax({
        type: "delete",
        url: "https://fsdiapi.azurewebsites.net/api/tasks/clear/Seth",
        success: function(){
            //reload the page
            location.reload();
        },
        error: function(err){
            console.log("Error clearing tasks", err)
        }
    })
}

function init(){

    //assign events
    $("#iImportant").click(toggleImportance);
    $("#btnTogglePanel").click(togglePanel);
    $("#saveTask").click(saveTask);
    $("#btnDeleteTasks").click(deleteTasks);

    //load data
    fetchTasks();

}


window.onload = init;