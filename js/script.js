
function whatsappToggle() {
    var displayType = document.getElementById("whatsapp").style.display;
    if(displayType === "" || displayType === "none") {
       document.getElementById("whatsapp").style.display = "flex";
    }
    else {
       document.getElementById("whatsapp").style.display = "none"
    }
}
function triggerOverlay() {
    var displayType = document.getElementById("google-form").style.display;
    if(displayType === "" || displayType === "none") {
       document.getElementById("google-form").style.display = "flex";
    }
    else {
       document.getElementById("google-form").style.display = "none"
    }
}

var source = $("#some-template").html(); 
var template = Handlebars.compile(source); 

var data = { 
    users: [ {
        person: {
            gender: "fa fa-mars",
            category: [{
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
                serviceType: "Hair Cut & Style",
                services: [
                    {
                        name: "HAIRCUT ",
                        stylist: "Style Director",
                        amount: 950
                    }, {
                        name: "HAIRCUT ",
                        stylist: "Top Stylist",
                        amount: 650
                    },
                    {
                        name: "HAIRCUT ",
                        stylist: "Top Stylist",
                        amount: 650
                    }
                ]
            }]
        }}
    ]
}  

$('body').append(template(data));