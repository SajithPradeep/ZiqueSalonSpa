//------------------------------------------------------------------//
// Function to Toggle the Whatsapp Number
function whatsappToggle() {
    var displayType = document.getElementById("whatsapp").style.display;
    if(displayType === "" || displayType === "none") {
       document.getElementById("whatsapp").style.display = "flex";
    }
    else {
       document.getElementById("whatsapp").style.display = "none"
    }
}
//-------------------------------------------------------------------//

//-------------------------------------------------------------------//
// Function to Trigger the Book an appointment overlay
function triggerOverlay() {
    var displayType = document.getElementById("google-form").style.display;
    if(displayType === "" || displayType === "none") {
       document.getElementById("google-form").style.display = "flex";
    }
    else {
       document.getElementById("google-form").style.display = "none"
    }
}
//--------------------------------------------------------------------//

//----------------------------------------------------------------------//
// function to clear the book an appointment form after submitting the values.
function clearForm() {
    $("#text-input").val("");
    $("#email-input").val("");
    $("#tel-input").val("");
    $("#date-input").val("");
    $("#time-input").val("");
}
//--------------------------------------------------------------------//

function formValidation(name, tel) {
    if(name === "") {
        alert("Name cannot be left empty");
        $("#email-input").val("");
        $("#tel-input").val("");
        $("#date-input").val("");
        $("#time-input").val("");
    }
}
//-------------------------------------------------------------------//
// Function to submit the response to google form
function postToGoogle() {
    let name = $("#text-input").val();
    let email = $("#email-input").val();
    let tel = $("#tel-input").val();
    let date = $("#date-input").val();
    let tempDate = date.split("-");
    let time = $("#time-input").val();
    let tempTime = time.split(":");
    formValidation(name, tel);

    $.ajaxSetup({ cache: false });
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSezeWkcIyiqtADR-7DH8ERWu7K5leVDIbd40jUtS80sEnzJbg/formResponse",
        crossDomain: true,
        data: {
            "entry.1802730727": name,
            "entry.1071256230": email,
            "entry.993040394": tel,
            "entry.15896639_month": tempDate[1],
            "entry.15896639_day": tempDate[2],
            "entry.15896639_year": tempDate[0],
            "entry.416657952_hour": tempTime[0],
            "entry.416657952_minute": tempTime[1]
        },
        type: "GET",
        dataType: "jsonp",
        success: function () {
            clearForm();
            triggerOverlay();
        },
        error: function() {
             clearForm();
            triggerOverlay();
        }    
    });
}
//--------------------------------------------------------------------//


//--------------------------------------------------------------------//
// This is the database section where the list of services are stored
var source = $("#some-template").html(); 
var template = Handlebars.compile(source); 

var data = { 
    users: [ {
        person: {
            gender: "fa fa-mars",
            category: [{
                serviceID: "MenOne",
                serviceType: "Hair Cut & Style",
                services: [
                    {
                        name: "HAIRCUT ",
                        stylist: "(Style Director)",
                        amount: 950
                    }, {
                        name: "HAIRCUT ",
                        stylist: "(Top Stylist)",
                        amount: 650
                    },
                    {
                        name: "HAIRCUT ",
                        stylist: "(Senior Stylist )",
                        amount: 350
                    },
                    {
                        name: "Hair Wash & Styling",
                        stylist: "",
                        amount: 350
                    },{
                        name: "Kids Haircut",
                        stylist: "(Below 10 years)",
                        amount: 350
                    }, {
                        name: "Beard Trim",
                        stylist: "",
                        amount: 150
                    }, {
                        name: "Beard Design",
                        stylist: "",
                        amount: 350 
                    }, {
                        name: "Shave",
                        stylist: "",
                        amount: 250 
                    }
                ]
            }, {
                serviceID: "MenTwo",
                serviceType: "Colour Bar Services",
                services: [
                    {
                        name: "Global Colour",
                        stylist: "",
                        amount: 1550 
                    }, {
                        name: "Highlights  ",
                        stylist: "",
                        amount: 1950 
                    },
                    {
                        name: "Moustache Colour ",
                        stylist: "",
                        amount: 450
                    },
                    {
                        name: "Beard & Moustache Colour",
                        stylist: "",
                        amount: 650
                    }
                ]
            }, {
                serviceID: "MenThree",
                serviceType: "Texture",
                services: [
                    {
                        name: "Keratin Hair Treatment",
                        stylist: "",
                        amount: "3550 onwards" 
                    }, {
                        name: "Smoothening Hair Treatment",
                        stylist: "",
                        amount: 3050 
                    }
                ]
            }, {
                serviceID: "MenFour",
                serviceType: "Washhouse Services",
                services: [
                    {
                        name: "Luxury Hair Spa ",
                        stylist: "",
                        amount: 1250 
                    }, {
                        name: "Tea Tree Scalp Treatment ",
                        stylist: "",
                        amount: 1550 
                    }, {
                        name: "Head Oil Massage ",
                        stylist: "(30 Min) ",
                        amount: 550 
                    }
                ]
            }]
        }}, {
        person: {
            gender: "fa fa-venus",
            category: [{
                serviceID: "WomenOne",
                serviceType: "Hair Cut & Style",
                services: [
                    {
                        name: "HAIRCUT ",
                        stylist: "Style Director",
                        amount: 1750
                    }, {
                        name: "HAIRCUT ",
                        stylist: "Top Stylist",
                        amount: 1250
                    },
                    {
                        name: "HAIRCUT ",
                        stylist: "Senior  Stylist",
                        amount: 850
                    },  {
                        name: "Kids Haircut",
                        stylist: "(Below 10 years)",
                        amount: 450
                    }, {
                        name: "Hair Wash & Blast Dry ",
                        stylist: "",
                        amount: 550
                    }, {
                        name: "Blow Dry ",
                        stylist: "",
                        amount: "650 Onwards"
                    }, {
                        name: "Tongs",
                        stylist: "",
                        amount: "950 Onwards"
                    },{
                        name: "Ironing",
                        stylist: "",
                        amount: "850 Onwards"
                    }, {
                        name: "Up Styling",
                        stylist: "",
                        amount: 950
                    }
                ]
            }, {
                 serviceID: "WomenTwo",
                 serviceType: "Colour Bar Services",
                 services : [
                     {  
                        serviceSubType: "Absolute Colour",
                        name: "Global Base Colour ",
                        stylist: "",
                        amount: "2550 Onwards" 
                     },  {
                        name: "Global Fashion Colour ",
                        stylist: "",
                        amount: "3550 Onwards" 
                    }, {
                        name: "Root Touch-up ",
                        stylist: "",
                        amount: "1550 Onwards" 
                    }, {  
                        serviceSubType: "Creative Colour",
                        name: "Root Touch-up",
                        stylist: "",
                        amount: "1750 Onwards" 
                     }, {
                        name: "Colour Refresh",
                        stylist: "",
                        amount: "2050 Onwards" 
                    },{
                        name: "Balayage ",
                        stylist: "",
                        amount: "4550 Onwards" 
                    }, {
                        name: "Ombre ",
                        stylist: "",
                        amount: "4550 Onwards" 
                    }, {
                        name: "Full Head Highlights",
                        stylist: "",
                        amount: "5050 Onwards" 
                    }, {
                        name: "Single Streak ",
                        stylist: "",
                        amount: "450 Onwards" 
                    }
                 ]
            }, {
                serviceID: "WomenThree",
                serviceType: "Texture",
                services: [
                    {
                        name: "Keratin Treatment",
                        stylist: "",
                        amount: "7050 Onwards" 
                    }, {
                        name: "Smoothening Treatment",
                        stylist: "",
                        amount: "6050 Onwards" 
                    },{
                        name: "Smoothening Fringe",
                        stylist: "",
                        amount: 2050 
                    }]
            }, {
                serviceID: "WomenFour",
                serviceType: "Washhouse Services",
                services: [
                    {
                        name: "Hair Wash & Deep Conditioning ",
                        stylist: "",
                        amount: 1350 
                    }, {
                        name: "Classic Hair Spa",
                        stylist: "",
                        amount: 1550 
                    },{
                        name: "Luxury Hair Spa",
                        stylist: "",
                        amount: 2050 
                    }, {
                        name: "Scalp Treatment ",
                        stylist: "",
                        amount: 2550 
                    }, {
                        name: "Hair Fall Treatment",
                        stylist: "",
                        amount: 2550 
                    }, {
                        name: "Deep Hair Repair Treatment ",
                        stylist: "",
                        amount: 2850 
                    }, {
                        name: "Head Oil Massage",
                        stylist: "",
                        amount: 750 
                    }]
            }]
        }}
    ]
}   

$('body').append(template(data));
//--------------------------------------------------------------------//