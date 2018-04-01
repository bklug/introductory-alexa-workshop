var bloodWorkRanges = [
    {
        "group":"arterialBloodGas", 
        "display": "Arterial Blood Gas",
        "speak": "arterial blood gas results",
        "ph" : {
            "display": "pH",
            "speak": "p H",
            "normal": ""
        },
        "CO2": {
            "display": "CO2",
            "speak": "C o 2",
            "normal": ""
        },
        "O2":
        {
            "display": "O2",
            "speak": "o 2",
            "normal": ""
        },
        "HCO3":
        {
            "display": "HCO3",
            "speak": "H C o 3",
            "normal": "22-26"
        },
        "Sat":
        {
            "display": "Sat",
            "speak": "saturation",
            "normal": ""
        },
        "ScVO2":
        {
            "display": "ScVO2",
            "speak": "S c V o 2",
            "normal": ">75"
        },
        "Lactate":
        {
            "display": "Lactate",
            "speak": "Lactate",
            "normal": "<1.0"
        }
    },
    {
        "group": "hematology",
        "display": "Hematology",
        "speak": "hematology results",
        "WBC":
        {
            "display": "WBC",
            "speak": "W B C",
            "normal": "5,000-12,000"
        },
        "HGB":
        {
            "display": "HGB",
            "speak": "hemoglobin",
            "normal": "130-155"
         },
        "PLTS":
        {
            "display": "PLTS",
            "speak": "platelets",
            "normal": "250,000-550,000"
        },
        "HCT":
        {
            "display": "HCT",
            "speak": "hematocrit",
            "normal": ""
        }
    },
    {
        "group":"electrolytes",
        "display": "Electrolytes",
        "speak": "lights results",
        "Na":
        {
            "display": "Na",
            "speak": "sodium",
            "normal": "135-145"
        },
        "K":
        {
            "display": "K+",
            "speak": "postassium",
            "normal": "3-5.5"
        },
        "Cl":
        {
            "display": "Cl",
            "speak": "chloride",
            "normal": "90-110"
        },
        "Glucose":
        {
            "display": "Glucose",
            "speak": "glucose",
            "normal": "3.5-5.0"
        },
        "BUN":
        {
            "display": "BUN",
            "speak": "B U N",
            "normal": "2-8"
        },
        "CR":
        {
            "display": "CR",
            "speak": "Creatinine",
            "normal": "40-120"
        },
        "HCO3":
        {
            "display": "HCO3",
            "speak": "bicarbonate",
            "normal": ""
        },
        "ABG":
        {
            "display": "ABG",
            "speak": "A B G",
            "normal": ""
        },
        "PaCO2":
        {
            "display": "PaCO2",
            "speak": "P a C o 2",
            "normal": ""
        },
        "PaO2":
        {
            "display": "PaO2",
            "speak": "P a o 2",
            "normal": ""
        },
        "Sa02":
        {
            "display": "Sa02",
            "speak": "S a o 2",
            "normal": "Settings .45 Fi02 / PEEP 5"
        }
    }
];

module.exports = bloodWorkRanges;
