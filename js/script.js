
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