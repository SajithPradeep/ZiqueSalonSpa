$(document).ready(function() {
    if($(window).width() > 768) {
        $(".servicesMenu").addClass("row-eq-height");
    }
});
//------------------------------------------------------------------//
// Function to Toggle the Whatsapp Number
function whatsappToggle(whatsapp) {
    var displayType = document.getElementById(whatsapp).style.display;
    if(displayType === "" || displayType === "none") {
       document.getElementById(whatsapp).style.display = "flex";
    }
    else {
       document.getElementById(whatsapp).style.display = "none"
    }
}
//-------------------------------------------------------------------//

//-------------------------------------------------------------------//
// Function to Trigger the Book an appointment overlay
function triggerOverlay(overlayID) {
    var displayType = document.getElementById(overlayID).style.display;
    if(displayType === "" || displayType === "none") {
       document.getElementById(overlayID).style.display = "flex";
    }
    else {
       document.getElementById(overlayID).style.display = "none"
    }
}

//--------------------------------------------------------------------//

//Facebook Pixel Code 
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '529071214150400'); // Insert your pixel ID here.
fbq('track', 'PageView');
// DO NOT MODIFY
//End Facebook Pixel Code 
fbq('track', 'Lead', {
value: 10.00,
currency: 'USD'
});

//---------------------------------------------------------------------//
// Function to check if the phone number entered is correct
function phonenumber()  
{  
  let telTemp = $("#tel-input").val();
  let tel = telTemp.toString();  
  let phoneno = /^\d{10}$/;  
  if(tel.match(phoneno))  
  {  
      document.getElementById("tel-input").style.border="2px solid black";
      return true;  
  }  
  else  
  {  
     alert("Not a valid Phone Number");  
     return false;  
  }  
}  
// ---------------------------------------------------------------------//


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
function nameValidation() {
    var name = $("#text-input").val();
    if (name) {
        document.getElementById("text-input").style.border="2px solid black";
    } 
}

function formValidation(name, tel) {
    if(name === "" && tel==="") {
        alert("Name and Telephone number cannot be left empty");
        document.getElementById("text-input").style.border="2px solid red";
        document.getElementById("tel-input").style.border="2px solid red";
    } else if (name === "") {
        alert("Name cannot be left empty");
        document.getElementById("text-input").style.border="2px solid red";
    } else if (tel === "") {
        alert("Telephone number cannot be left empty");
        document.getElementById("tel-input").style.border="2px solid red";
    }
    else {
        return true;
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
    let formValid = formValidation(name, tel);

    if(formValid) {
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
            alert("Appointment Booked Successfully");
        },
        error: function() {
            clearForm();
            triggerOverlay();
            alert("Appointment Booked Successfully");
        }    
    });
    }  
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
                        amount: 450
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
                        amount: 250 
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
                        name: "So pure natural colour",
                        stylist: "",
                        amount: "1750+" 
                    }, {
                        name: "Highlights  ",
                        stylist: "",
                        amount: "1950+" 
                    }, {
                        name: "Moustache Colour ",
                        stylist: "",
                        amount: 350
                    }, {
                        name: "Beard Colour ",
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
                        amount: "3550+" 
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
                        name: "Hair Spa ",
                        stylist: "",
                        amount: "1050+" 
                    }, {
                        name: "Tea Tree Scalp Treatment",
                        stylist: "",
                        amount: 1550 
                    }, {
                        name: "Dandruff treatment",
                        stylist: "",
                        amount: "1250+" 
                    }, {
                        name: "Head Oil Massage ",
                        stylist: "(30 Min) ",
                        amount: 550 
                    }
                ]
            }, {
                serviceID: "MenFive",
                serviceType: "Waxing Services",
                services: [
                    {
                        serviceSubType: "RICA-Men",
                        name: "Full front/ back ",
                        stylist: "",
                        amount: 1750 
                    },
                    {
                        name: "Chest & Abdomen ",
                        stylist: "",
                        amount: 1650 
                    }, {
                        name: "Under Arms ",
                        stylist: "",
                        amount: 350 
                    }, {
                        name: "Full Arms ",
                        stylist: "",
                        amount: 750 
                    },  {
                        name: "Half Arms ",
                        stylist: "",
                        amount: 450 
                    },  {
                        name: "Half Legs  ",
                        stylist: "",
                        amount: 750 
                    }
                ]
            }, {
                serviceID: "MenSix",
                serviceType: "Wedding Special",
                disclaimer: "Prices inclusive of consultation and Taxes.",
                onwards: "+ from the above mentioned price onwards.",
                services: [
                    {   
                        serviceSubType: "Groom",
                        name: "Modern Blush ",
                        stylist: "(Includes Kryolan Makeup and Romantic Wedding Hairstyle) ",
                        amount: 5000 
                    }, {
                        name: "Radiant Verve ",
                        stylist: "(Includes High Definition Makeup and Romantic Wedding Hairstyle) ",
                        amount: 8000 
                    }, {
                        name: "Epic Luxury ",
                        stylist: "(Includes Air Brush Makeup and Romantic Wedding Hairstyle) ",
                        amount: 10000,
                        outdoorCharges: "** Additional charges are applicable for outdoor services."
                    }, 
                ]
            },]
        }}, {
        person: {
            gender: "fa fa-venus",
            category: [{
                serviceID: "WomenOne",
                serviceType: "Hair Cut & Style",
                services: [
                    {
                        name: "HAIRCUT ",
                        stylist: "(Style Director)",
                        amount: 1750
                    }, {
                        name: "HAIRCUT ",
                        stylist: "(Top Stylist)",
                        amount: 1250
                    },
                    {
                        name: "HAIRCUT ",
                        stylist: "(Senior  Stylist)",
                        amount: 850
                    },  {
                        name: "Kids Haircut",
                        stylist: "(Below 10 years)",
                        amount: 550
                    }, {
                        name: "Hair Wash & Blast Dry ",
                        stylist: "",
                        amount: 550
                    }, {
                        name: "Hair Wash & Volume Blow Dry ",
                        stylist: "",
                        amount: 850
                    }, {
                        name: "Blow Dry ",
                        stylist: "",
                        amount: "650+"
                    }, {
                        name: "Tongs/Ironing",
                        stylist: "",
                        amount: "1050+"
                    }, {
                        name: "Up Styling",
                        stylist: "",
                        amount: "950+"
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
                        amount: "2550+" 
                     },  {
                        name: "Global Fashion Colour ",
                        stylist: "",
                        amount: "3550+" 
                    }, {
                        name: "Root Touch-up ",
                        stylist: "(Ammonia free)",
                        amount: "1750+" 
                    }, {
                        name: "Root Touch-up ",
                        stylist: "(So pure natural colour)",
                        amount: "2050+" 
                    }, {
                        serviceSubType: "Creative Colour",
                        name: "Colour Refresh",
                        stylist: "",
                        amount: "2050+" 
                    },{
                        name: "Balayage ",
                        stylist: "",
                        amount: "5750+" 
                    }, {
                        name: "Ombre ",
                        stylist: "",
                        amount: "5750+" 
                    }, {
                        name: "Full Head Highlights",
                        stylist: "",
                        amount: "6550+" 
                    }, {
                        name: "Single Streak ",
                        stylist: "",
                        amount: "450+" 
                    }
                 ]
            }, {
                serviceID: "WomenThree",
                serviceType: "Texture",
                services: [
                    {
                        name: "Keratin Treatment",
                        stylist: "(full)",
                        amount: "7050+" 
                    }, {
                        name: "Keratin Treatment",
                        stylist: "(partial)",
                        amount: "3550+" 
                    }, {
                        name: "Smoothening Treatment",
                        stylist: "(full)",
                        amount: "6550+" 
                    }, {
                        name: "Smoothening Treatment",
                        stylist: "(partial)",
                        amount: "2950+" 
                    }, {
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
                        name: "Tea tree Scalp Treatment ",
                        stylist: "",
                        amount: 2750 
                    }, {
                        name: "Hair Fall Treatment",
                        stylist: "",
                        amount: 2550 
                    }, {
                        name: "Deep Hair Repair Treatment ",
                        stylist: "",
                        amount: 2950 
                    }, {
                        name: "Head Oil Massage",
                        stylist: "",
                        amount: 850 
                    }, {
                        name: "Dandruff treatment",
                        stylist: "",
                        amount: "2050+" 
                    }]
            },  {
                serviceID: "WomenFive",
                serviceType: "Threading Services",
                services: [
                    {
                        name: "Eyebrow Shaping ",
                        stylist: "",
                        amount: 75 
                    }, {
                        name: "Chin/Forehead ",
                        stylist: "",
                        amount: 65 
                    },{
                        name: "Upper Lip ",
                        stylist: "",
                        amount: 65 
                    }, {
                        name: "Full Face ",
                        stylist: "",
                        amount: 150 
                    }, {
                        name: "Side Face ",
                        stylist: "",
                        amount: 100 
                    }]
            },  {
                serviceID: "WomenSix",
                serviceType: "Waxing Services",
                services: [
                    {
                        serviceSubType: "RICA-Women",
                        name: "Upper Lip ",
                        stylist: "",
                        amount: 95 
                    }, {
                        name: "Chin ",
                        stylist: "",
                        amount: 95
                    },{
                        name: "Upper Lip & Chin ",
                        stylist: "",
                        amount: 175
                    }, {
                        name: "Forehead ",
                        stylist: "",
                        amount: 95 
                    }, {
                        name: "Full Arms ",
                        stylist: "",
                        amount: 550 
                    }, {
                        name: "Half Arms ",
                        stylist: "",
                        amount: 350 
                    }, {
                        name: "Under Arms ",
                        stylist: "",
                        amount: 150 
                    }, {
                        name: "Full Legs ",
                        stylist: "",
                        amount: 750 
                    }, {
                        name: "Half Legs ",
                        stylist: "",
                        amount: 450 
                    }, {
                        name: "Bikini Line ",
                        stylist: "",
                        amount: 550 
                    }, {
                        name: "Stomach ",
                        stylist: "",
                        amount: 1050 
                    }, {
                        name: "Brazilian Wax ",
                        stylist: "(Bikini) ",
                        amount: 1950 
                    }, {
                        name: "Full face",
                        stylist: "",
                        amount: 650 
                    }, {
                        name: "Neck",
                        stylist: "",
                        amount: 150 
                    }, {
                        name: "Full Body ",
                        stylist: "(Face, neck, arms, underarms, legs, feet and front & back)",
                        amount: 2750 
                    }, {
                        name: "Half front/ Full Front ",
                        stylist: "",
                        amount: "550 / 750" 
                    }, {
                        name: "Half Back/ Full Back ",
                        stylist: "",
                        amount: "550 / 750" 
                    }]
            },  {
                serviceID: "WomenSeven",
                serviceType: "Wedding Special",
                disclaimer: "Prices inclusive of consultation and Taxes.",
                onwards: "+ from the above mentioned price onwards.",
                services: [
                    {   
                        serviceSubType: "BRIDE",
                        name: "Modern Blush ",
                        stylist: "(Includes Kryolan Makeup, Romantic Wedding Hairstyle and Saree Draping) ",
                        amount: 12000 
                    }, {
                        name: "Radiant Verve ",
                        stylist: "(Includes High Definition Makeup, Romantic Wedding Hairstyle and Saree Draping) ",
                        amount: 15000 
                    },{
                        name: "Epic Luxury ",
                        stylist: "(Includes Air Brush Makeup, Romantic Wedding Hairstyle and Saree Draping) ",
                        amount: 20000 
                    }, {
                        name: "Bridesmaid Makeup ",
                        stylist: "(Makeup & Hairdo) ",
                        amount: 5000,
                        outdoorCharges: "** Additional charges are applicable for outdoor services."
                    }]
            }]
        }},
        {
        person: {
            gender: "fa fa-intersex",
                category: [{
                    serviceID: "UnisexOne",
                    serviceType: "Manicures/ Pedicures",
                    services: [
                        {
                            name: "Classic Pedicure ",
                            stylist: "",
                            amount: 750 
                        }, {
                            name: "Classic Manicure  ",
                            stylist: "",
                            amount: 650 
                        }, {
                            name: "Spa Pedicure ",
                            stylist: "",
                            amount: 1050 
                        }, {
                            name: "Spa Manicure ",
                            stylist: "",
                            amount: 950 
                        }, {
                            name: "Signature Pedicure ",
                            stylist: "",
                            amount: 1450 
                        }, {
                            name: "Signature Manicure ",
                            stylist: "",
                            amount: 1250 
                        }]
                },  {
                    serviceID: "UnisexTwo",
                    serviceType: "Bleaching Services",
                    services: [
                    {
                        name: "Face & Neck ",
                        stylist: "",
                        amount: 550 
                    }, {
                        name: "Upper Lip ",
                        stylist: "",
                        amount: 85
                    }, {
                        name: "Chin",
                        stylist: "",
                        amount: 100
                    }, {
                        name: "Under Arms ",
                        stylist: "",
                        amount: 200
                    }, {
                        name: "Feet ",
                        stylist: "",
                        amount: 250 
                    }, {
                        name: "Half Arms ",
                        stylist: "",
                        amount: 350 
                    }, {
                        name: "Full Arms ",
                        stylist: "",
                        amount: 550 
                    }, {
                        name: "Half Back/Front ",
                        stylist: "",
                        amount: "450/450" 
                    }, {
                        name: "Full Back/Front ",
                        stylist: "",
                        amount: "750/750" 
                    }, {
                        name: "Half Legs ",
                        stylist: "",
                        amount: 450 
                    }, {
                        name: "Full Legs ",
                        stylist: "",
                        amount: 850 
                    }, {
                        name: "Full Body ",
                        stylist: "(Face, neck, arms, underarms, legs, feet and front & back) ",
                        amount: 3750
                    }]
            },  {
                    serviceID: "UnisexThree",
                    serviceType: "Makeover",
                    services: [
                        {
                            name: "Party Makeup ",
                            stylist: "",
                            amount: 2250 
                        }, {
                            name: "Eye Makeup ",
                            stylist: "",
                            amount: 1250 
                        }, {
                            name: "Trail Makeup",
                            stylist: "",
                            amount: 2050 
                        }]
            },  {
                    serviceID: "UnisexFour",
                    serviceType: "Hair Extensions",
                    services: [
                        {
                            name: "",
                            stylist: "",
                            outdoorCharges: "There is a hair extension for everyone! Whether you want to add length, volume or colour. Speak to your stylist for more details."
                        }, {
                            name: "",
                            stylist: "*Quotation on Consultation. ",
                            amount: "" 
                        }]
            },   {
                    serviceID: "UnisexFive",
                    serviceType: "Skin Services",
                    services: [
                    {
                        name: "Classic Clean Up",
                        stylist: "",
                        amount: 1050 
                    }, {
                        name: "Advanced Tan Removal Hydrating Clean up ",
                        stylist: "",
                        amount: 1450
                    },{
                        name: "Advanced Skin Lightening Clarifying Clean up ",
                        stylist: "",
                        amount: 1450
                    }, {
                        name: "Anti-Ageing Vitamin C Clean up ",
                        stylist: "",
                        amount: 1450 
                    }, {
                        name: "Golden Glow Facial ",
                        stylist: "",
                        amount: 1950 
                    }, {
                        name: "Skin Brightening Facial ",
                        stylist: "",
                        amount: 3250 
                    }, {
                        name: "Eye firm Treatment",
                        stylist: "",
                        amount: 1250
                    }, {
                        serviceSubType: "Dermalogica Treatments ",
                        name: "Eye Firm Treatment ",
                        stylist: "",
                        amount: 1250 
                    }, {
                        name: "Microzone Flash Exfoliation Treatment ",
                        stylist: "",
                        amount: 1650 
                    }, {
                        name: "Black Head Relief ",
                        stylist: "",
                        amount: 1650 
                    }, {
                        name: "Hydrating Treatment ",
                        stylist: "",
                        amount: 2850 
                    }, {
                        name: "Dry Skin Nourishment ",
                        stylist: "",
                        amount: 2850 
                    }, {
                        name: "Oil Control Treatment ",
                        stylist: "",
                        amount: 2850
                    }, {
                        name: "Ultra Calming Treatment ",
                        stylist: "",
                        amount: 3550
                    }, {
                        name: "Power Bright Treatment ",
                        stylist: "",
                        amount: 4250
                    }, {
                        name: "AGEsmart Treatment ",
                        stylist: "",
                        amount: 4550
                    }, {
                        name: "Dead Sea Mineral Facial ",
                        stylist: "",
                        amount: 2850
                    }, {
                        name: "Men's Skin Fitness ",
                        stylist: "",
                        amount: 3350
                    }]
            },  {
                    serviceID: "UnisexSix",
                    serviceType: "SPA Services",
                    disclaimer: "Prices inclusive of consultation and Taxes.",
                    services: [
                    {
                        name: "Traditional Thai Message ",
                        stylist: "(60 Min/90 Min) ",
                        amount: "1450 / 1750"
                    }, {
                        name: "Sense of Thai Aroma Therapy ",
                        stylist: "60 Min/90 Min",
                        amount: "1650 / 1850"
                    },{
                        name: "Thai Signature Therapy ",
                        stylist: "(90 Min) ",
                        amount: 2250
                    }, {
                        name: "Deep Tissue Massage ",
                        stylist: "60 Min/90 Min",
                        amount: "2350 / 2650"
                    }, {
                        name: "Swedish Massage ",
                        stylist: "(60 Min/90 Min) ",
                        amount: "2350 / 2650"
                    }, {
                        name: "Javanese Royal Body ",
                        stylist: "(60 Min/90 Min)",
                        amount: 2650
                    }, {
                        name: "Hawaiian Lomi Lomi Massage ",
                        stylist: "(60 Min/90 Min) ",
                        amount: 2650
                    }, {
                        name: "Head-to-Toe Relaxation Massage ",
                        stylist: "120 Min",
                        amount: 3250 
                    }, {
                        name: "Head, Neck & Shoulder Massage  ",
                        stylist: "(30 Min) Dry/ Oil ",
                        amount: "850 / 1050" 
                    }, {
                        name: "Reflexology ",
                        stylist: "(Hands & Feet) (30 Min/60 Min) ",
                        amount: "850 / 1050"
                    }, {
                        name: "Body Polish Ritual " ,
                        stylist: "(120 Min (Massage+Polish)) ",
                        amount: 3750
                    }, {
                        name: "Brightening Body Scrub & Wrap  ",
                        stylist: "120 Min",
                        amount: 4450
                    }]
            }]
            }  
        }
    ]
}   

$('body').append(template(data));
//--------------------------------------------------------------------//