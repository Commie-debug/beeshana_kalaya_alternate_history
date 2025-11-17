const colourList = [{
        word: "Sri Lanka Armed Forces",
        style: "color: #002FA7; font-weight: bold;"
    },
    {
        word: "Sri Lanka Police",
        style: "color: #454BF7; font-weight: bold;"
    },
    {
        word: "JSS",
        style: "color: #006400; font-weight: bold;"
    },
    {
        word: "Civil Security",
        style: "color: #954535; font-weight: bold;"
    },
    {
        word: "Home Guard",
        style: "color: #954535; font-weight: bold;"
    },
    {
        word: "SLFP",
        style: "color: #00008B; font-weight: bold;"
    },
    {
        word: "UNP",
        style: "color: #006400; font-weight: bold;"
    },
    {
        word: "TULF",
        style: "color: #F7D917; font-weight: bold;"
    },
    {
        word: "CWC",
        style: "color: #E52B50; font-weight: bold;"
    },
    {
        word: "ACTC",
        style: "color: #FDCC01; font-weight: bold;"
    },
    {
        word: "CPSL",
        style: "color: #65000B; font-weight: bold;"
    },
    {
        word: "SLPP",
        style: "color: #E52B50; font-weight: bold;"
    },
    {
        word: "DPLF",
        style: "color: #CE2029; font-weight: bold;"
    },
    {
        word: "PFLT",
        style: "color: #DC143C; font-weight: bold;"
    },
    {
        word: "SLMC",
        style: "color: #2DCF3E; font-weight: bold;"
    },
    {
        word: "NPP",
        style: "color: #9F005D; font-weight: bold;"
    },
    {
        word: "JVP",
        style: "color: #FF2226; font-weight: bold;"
    },
    {
        word: "LSSP",
        style: "color: #A91101; font-weight: bold;"
    },
    {
        word: "NSSP",
        style: "color: #FF8080; font-weight: bold;"
    },
    {
        word: "MEP",
        style: "color: #FF3915; font-weight: bold;"
    },
    {
        word: "EROS",
        style: "color: #FF2400; font-weight: bold;"
    },
    {
        word: "SLMP",
        style: "color: #663399; font-weight: bold;"
    },
    {
        word: "PLOTE",
        style: "color: #CE2029; font-weight: bold;"
    },
    {
        word: "TELO",
        style: "color: #893F45; font-weight: bold;"
    },
    {
        word: "LTTE",
        style: "color: #DC143C; font-weight: bold;"
    },
    {
        word: "EPRLF",
        style: "color: #FF4500; font-weight: bold;"
    },
    {
        word: "INC",
        style: "color: #76D7EA; font-weight: bold;"
    },
    {
        word: "NF(India)",
        style: "color: #FF4500; font-weight: bold;"
    }
];

const tooltipList = [{
    searchString: "Sri Lanka Armed Forces",
    explanationText: "<img src=img/logos/SLAF_Logo.png> Sri Lanka Armed Forces"
    },
    {
    searchString: "SLFP",
    explanationText: "<img src=img/logos/SLFP_Logo.png> Sri Lanka Freedom Party"
    },
    {
    searchString: "UNP",
    explanationText: "<img src=img/logos/UNP_Logo.png> United National Party"
    },
    {
    searchString: "TULF",
    explanationText: "<img src=img/logos/TULF_Logo.png> Tamil United Liberation Front"
    },
    {
    searchString: "CWC",
    explanationText: "<img src=img/logos/CWC_Logo.png> Ceylon Workers Congress"
    },
    {
    searchString: "ACTC",
    explanationText: "<img src=img/logos/ACTC_Logo.png> All Ceylon Tamil Congress"
    },
    {
    searchString: "CPSL",
    explanationText: "<img src=img/logos/CPSL_Logo.png> Communist Party Of Sri Lanka"
    },
    {
    searchString: "SLPP",
    explanationText: "<img src=img/logos/SLPP_Logo.png> Sri Lanka Podujana Peramuna <br> (Sri Lanka Peoples Front)"
    },
    {
    searchString: "DPLF",
    explanationText: "<img src=img/logos/DPLF_Logo.png> Democratic Peoples Liberation Front"
    },
    {
    searchString: "PFLT",
    explanationText: "<img src=img/logos/PFLT_Logo.png> Peoples Front Of Liberation Tigers"
    },
    {
    searchString: "SLMC",
    explanationText: "<img src=img/logos/SLMC_Logo.png> Sri Lanka Muslim Congress"
    },
    {
    searchString: "NPP",
    explanationText: "<img src=img/logos/NPP_Logo.png> National Peoples Power"
    },
    {
    searchString: "JVP",
    explanationText: "<img src=img/logos/JVP_Logo.png> Janatha Vimukthi Peramuna <br> (Peoples Liberation Front)"
    },
    {
    searchString: "LSSP",
    explanationText: "<img src=img/logos/LSSP_Logo.png> Lanka Sama Samaja Party <br> (Lanka Equal Society Party)"
    },
    {
    searchString: "NSSP",
    explanationText: "<img src=img/logos/NSSP_Logo.png> Nava Sama Samaja Party <br> (New Equal Society Party)"
    },
    {
    searchString: "MEP",
    explanationText: "<img src=img/logos/MEP_Logo.png> Mahajana Eksath Peramuna <br> (Peoples United Front)"
    },
    {
    searchString: "EROS",
    explanationText: "<img src=img/logos/EROS_Logo.png> Eelam Revolutionary <br> Organisation Of Students"
    },
    {
    searchString: "SLMP",
    explanationText: "<img src=img/logos/SLMP_Logo.png> Sri Lanka Mahajana Pakshaya <br> (Sri Lanka Peoples Party)"
    },
    {
    searchString: "LTTE",
    explanationText: "<img src=img/logos/LTTE_Logo.png> Liberation Tigers <br> Of Tamil Eelam"
    },
    {
    searchString: "EPRLF",
    explanationText: "<img src=img/logos/EPRLF_Logo.png> Eelam Peoples Revolutionary <br> Liberation Front"
    },
    {
    searchString: "TELO",
    explanationText: "<img src=img/logos/TELO_Logo.png> Tamil Eelam <br> Liberation Organisation"
    },
    {
    searchString: "PLOTE",
    explanationText: "<img src=img/logos/PLOTE_Logo.png> Peoples Liberation <br> Organisation Of Tamil Eelam"
    },
    {
    searchString: "INC",
    explanationText: "<img src=img/logos/INC_Logo.png> Indian National Congress"
    },
    {
    searchString: "NF(India)",
    explanationText: "<img src=img/logos/India_NF_Logo.png> National Front (India)"
    },
    {
    searchString: "Sri Lanka Police",
    explanationText: "<img src=img/logos/Sri_Lanka_Police_Logo.png> Sri Lanka Police"
    },
    {
    searchString: "JSS",
    explanationText: "<img src=img/logos/JSS_Logo.png> Jathika Sevaka Sangamaya"
    },
    {
    searchString: "Civil Security",
    explanationText: "<img src=img/logos/Civil_Security_Logo.png> Civil Security"
    },
    {
    searchString: "Home Guard",
    explanationText: "<img src=img/logos/Home_Guard_Logo.png> Home Guard"
    },
    {
    searchString: "Northern Province",
    explanationText: "<img src=img/logos/provinces/Northern_Map.png> Northern Province"
    },
    {
    searchString: "Western Province",
    explanationText: "<img src=img/logos/provinces/Western_Map.png> Western Province"
    }
];





