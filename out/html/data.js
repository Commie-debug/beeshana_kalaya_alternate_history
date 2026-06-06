const colourList = [{
        word: "Sri Lanka Armed Forces",
        style: "color: #002FA7; font-weight: bold;"
    },
    {
    word: "Buddhism",
    style: "color: #F5D033; font-weight: bold;"
    },
    {
    word: "Islam",
    style: "color: #007914; font-weight: bold;"
    },
    {
    word: "Hinduism",
    style: "color: #FF7722; font-weight: bold;"
    },
    {
    word: "Christianity",
    style: "color: #5054cf; font-weight: bold;"
    },
    {
        word: "Sri Lanka Police",
        style: "color: #454BF7; font-weight: bold;"
    },
    {
        word: "IPKF",
        style: "color: #FF4545; font-weight: bold;"
    },
    {
        word: "Left",
        style: "color: #A91101; font-weight: bold;"
    },
    {
        word: "Nationalists",
        style: "color: #0F52BA; font-weight: bold;"
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
        word: "Special Task Force",
        style: "color: #33A343; font-weight: bold;"
    },
    {
        word: "Home Guard",
        style: "color: #954535; font-weight: bold;"
    },
    {
        word: "Hostile",
        style: "color: #FF0000; font-weight: bold;"
    },
    {
        word: "Frigid",
        style: "color: #FF4500; font-weight: bold;"
    },
    {
        word: "Cold",
        style: "color: #FF8C00; font-weight: bold;"
    },
    {
        word: "Cool",
        style: "color: #FFA500; font-weight: bold;"
    },
    {
        word: "Neutral",
        style: "color: #FFD700; font-weight: bold;"
    },
    {
        word: "Warm",
        style: "color: #9ACD32; font-weight: bold;"
    },
    {
        word: "Friendly",
        style: "color: #32CD32; font-weight: bold;"
    },
    {
        word: "Very friendly",
        style: "color: #008000; font-weight: bold;"
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
        style: "color: #f98538; font-weight: bold;"
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
        word: "UCPF",
        style: "color: #9C1600; font-weight: bold;"
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
        word: "DUNF",
        style: "color: #128812; font-weight: bold;"
    },
    {
        word: "ULPP",
        style: "color: #DAEA67; font-weight: bold;"
    },
    {
        word: "INC",
        style: "color: #76D7EA; font-weight: bold;"
    },
    {
        word: "NF",
        style: "color: #FF4500; font-weight: bold;"
    },
    {
        word: "DJV",
        style: "color: #FF3131; font-weight: bold;"
    },
    {
        word: "EPDP",
        style: "color: #F0BC02; font-weight: bold;"
    },
    {
        word: "PRRA",
        style: "color: #B22222; font-weight: bold;"
    },
    {
        word: "Black Cats",
        style: "color: #808080; font-weight: bold;"
    },
    {
        word: "Eagles",
        style: "color: #808080; font-weight: bold;"
    },
    {
        word: "TNA",
        style: "color: #FF7B00; font-weight: bold;"
    },
    {
        word: "ENDLF",
        style: "color: #FF5E5E; font-weight: bold;"
    },
    {
        word: "Naxal",
        style: "color: #b20000; font-weight: bold;"
    },
    {
        word: "Naxalite",
        style: "color: #b20000; font-weight: bold;"
    },
    {
        word: "ITAK",
        style: "color: #ffd000; font-weight: bold;"
    },
];

const tooltipList = [{
    searchString: "Sri Lanka Armed Forces",
    explanationText: "<img src=img/logos/SLAF_Logo.png> Sri Lanka Armed Forces"
    },
    {
    searchString: "Buddhism",
    explanationText: "<img src=img/Temple_Of_The_Tooth.jpg> Sri Dalada Maligawa(Temple of the Tooth Relic), Kandy"
    },
    {
    searchString: "Islam",
    explanationText: "<img src=img/Red_Mosque.png> Jami Ul-Alfar Mosque(Red Mosque), Pettah, Colombo"
    },
    {
    searchString: "Hinduism",
    explanationText: "<img src=img/Nallur_Kandaswamy.jpg> Nallur Kandaswamy Temple, Nallur, Jaffna"
    },
    {
    searchString: "Christianity",
    explanationText: "<img src=img/St_Anthonys_Shrine.jpg> St. Anthony's Shrine, Kochchikade, Colombo"
    },
    {
    searchString: "Tourism",
    explanationText: "<img src=img/logos/Tourism_Logo.png> Galadari Meridien Hotel"
    },
    {
    searchString: "Mining",
    explanationText: "<img src=img/logos/Mining_Logo.png> Gem mining"
    },
    {
    searchString: "Tea",
    explanationText: "<img src=img/logos/Tea_Logo.png> Dilmah tea advertisment"
    },
    {
    searchString: "Agriculture",
    explanationText: "<img src=img/logos/Agriculture_Logo.png> Paddy(rice) farming"
    },
    {
    searchString: "Fishing",
    explanationText: "<img src=img/logos/Fishing_Logo.png> Fishermen departing"
    },
    {
    searchString: "Textile & apparel",
    explanationText: "<img src=img/logos/Textile_Logo.png> Apparel production workers"
    },
    {
    searchString: "Rubber",
    explanationText: "<img src=img/logos/Rubber_Logo.png> Rubber tapping plantation"
    },
    {
    searchString: "Sinhalese",
    explanationText: "<img src=img/logos/Sinhalese_Logo.png> Sinhalese <br> සිංහල"
    },
    {
    searchString: "Indian Tamil",
    explanationText: "<img src=img/logos/Indian_Tamil_Logo.png> Indian Tamil <br> மலையகத் தமிழர்"
    },
    {
    searchString: "Sri Lankan Tamil",
    explanationText: "<img src=img/logos/Sri_Lankan_Tamil_Logo.png> Sri Lankan Tamil <br> ஈழத் தமிழர்"
    },
    {
    searchString: "Tamil",
    explanationText: "<img src=img/logos/Sri_Lankan_Tamil_Logo.png> Sri Lankan Tamil <br> ஈழத் தமிழர் "
    },
    {
    searchString: "Muslims",
    explanationText: "<img src=img/logos/Muslim_Logo.png> Muslims <br> இலங்கைச் சோனகர்"
    },
    {
    searchString: "Kafirs",
    explanationText: "<img src=img/logos/kaffir.jpg> Sri Lankan Kaffirs"
    },
    {
    searchString: "Burghers",
    explanationText: "<img src=img/logos/burgher.jpg> Sri Lankan Burghers"
    },
    {
    searchString: "Vedda",
    explanationText: "<img src=img/logos/vedda.jpg> Vedda's"
    },
    {
    searchString: "SLFP",
    explanationText: "<img src=img/logos/SLFP_Logo.png> Sri Lanka Freedom Party"
    },
    {
    searchString: "Left",
    explanationText: "<img src=img/logos/SLFP_Left_Logo.png> Left(SLFP)"
    },
    {
    searchString: "Nationalists",
    explanationText: "<img src=img/logos/SLFP_Nationalists_Logo.png> Nationalists(SLFP)"
    },
    {
    searchString: "UNP",
    explanationText: "<img src=img/logos/UNP_Logo.png> United National Party "
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
    searchString: "ULPP",
    explanationText: "<img src=img/logos/ULPP_Logo.png> United Lanka <br> People's Party"
    },
    {
    searchString: "DUNF",
    explanationText: "<img src=img/logos/DUNF_Logo.png> Democratic United <br> National Front"
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
    searchString: "NF",
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
    },
    {
    searchString: "Central Province",
    explanationText: "<img src=img/logos/provinces/Central_Map.png> Central Province"
    },
    {
    searchString: "North Central Province",
    explanationText: "<img src=img/logos/provinces/North_Central_Map.png> North Central Province"
    },
    {
    searchString: "North Western Province",
    explanationText: "<img src=img/logos/provinces/North_Western_Map.png> North Western Province"
    },
    {
    searchString: "Southern Province",
    explanationText: "<img src=img/logos/provinces/Southern_Map.png> Southern Province"
    },
    {
    searchString: "Sabaragamuwa Province",
    explanationText: "<img src=img/logos/provinces/Sabaragamuwa_Map.png> Sabaragamuwa Province"
    },
    {
    searchString: "Uva Province",
    explanationText: "<img src=img/logos/provinces/Uva_Map.png> Uva Province"
    },
    {
    searchString: "North Eastern Province",
    explanationText: "<img src=img/logos/provinces/North_Eastern_Map.png> North Eastern Province"
    },
    {
    searchString: "Eastern Province",
    explanationText: "<img src=img/logos/provinces/Eastern_Map.png> Eastern Province"
    },
    {
    searchString: "Special Task Force",
    explanationText: "<img src=img/logos/STF_Logo.png> Special Task Force"
    },
    {
    searchString: "EPDP",
    explanationText: "<img src=img/logos/EPDP_Logo.png> Eelam Peoples Democratic Party"
    },
    {
    searchString: "DJV",
    explanationText: "<img src=img/logos/DJV_Logo.png> Deshapremi Janatha Vyaparaya <br> (Patriotic People's Movement)"
    },
    {
    searchString: "PRRA",
    explanationText: "<img src=img/WIP.jpg> Peoples Revolutionary <br> Red Army"
    },
    {
    searchString: "Eagles",
    explanationText: "<img src=img/WIP.jpg> Eagles Of The Central Highlands"
    },
    {
    searchString: "Black Cats",
    explanationText: "<img src=img/WIP.jpg> Black Cats"
    },
    {
    searchString: "TNA",
    explanationText: "<img src=img/logos/TNA_Logo.png> Tamil National Army"
    },
    {
    searchString: "ENDLF",
    explanationText: "<img src=img/logos/ENDLF_Logo.png> Eelam National Democratic <br> Liberation Front"
    },
    {
    searchString: "IPKF",
    explanationText: "<img src=img/logos/IPKF_Logo.png> Indian Peace <br> Keeping Force"
    },
    {
    searchString: "UCPF",
    explanationText: "<img src=img/logos/UCPF_Logo.png> Up Country <br> Peoples Front"
    },
    {
    searchString: "Naxal",
    explanationText: "<img src=img/logos/Naxal_Logo.png> Naxalite-Maoist(Indian Maoist insurgents)"
    },
    {
    searchString: "Naxalite",
    explanationText: "<img src=img/logos/Naxal_Logo.png> Naxalite-Maoist(Indian Maoist insurgents)"
    },

    //historical parties for election simulation 
    {
    searchString: "ITAK",
    explanationText: "<img src=img/logos/ITAK_Logo.png> Ilankai Tamil Arasu Kachchi <br> Sri Lanka Tamil Federal Party"
    },


    {
    searchString: "Non Alligned Movement",
    explanationText: "<img src=img/logos/NAM_Logo.png> Non Alligned Movement"
    },
    {
    searchString: "NAM",
    explanationText: "<img src=img/logos/NAM_Logo.png> Non Alligned Movement"
    },
    {
    searchString: "India",
    explanationText: "<img src=img/logos/India_Logo.png> Republic of India <br> भारत गणराज्य <br> இந்தியக் குடியரசு"
    },
    {
    searchString: "US",
    explanationText: "<img src=img/logos/USA_Logo.png> United States <br> of America"
    },
    {
    searchString: "United States",
    explanationText: "<img src=img/logos/USA_Logo.png> United States <br> of America"
    },
    {
    searchString: "American",
    explanationText: "<img src=img/logos/USA_Logo.png> United States <br> of America"
    },
    {
    searchString: "USA",
    explanationText: "<img src=img/logos/USA_Logo.png> United States <br> of America"
    },
    {
    searchString: "UK",
    explanationText: "<img src=img/logos/UK_Logo.png> United Kingdom of <br> Great Britian & <br> Northern Ireland"
    },
    {
    searchString: "United Kingdom",
    explanationText: "<img src=img/logos/UK_Logo.png> United Kingdom of <br> Great Britian & <br> Northern Ireland"
    },
    {
    searchString: "Britain",
    explanationText: "<img src=img/logos/UK_Logo.png> United Kingdom of <br> Great Britian & <br> Northern Ireland"
    },
    {
    searchString: "British",
    explanationText: "<img src=img/logos/UK_Logo.png> United Kingdom of <br> Great Britian & <br> Northern Ireland"
    },
    {
    searchString: "Israel",
    explanationText: "<img src=img/logos/Israel_Logo.png> State of Israel <br> מְדִינַת יִשְׂרָאֵל"
    },
    {
    searchString: "Israeli",
    explanationText: "<img src=img/logos/Israel_Logo.png> State of Israel <br> מְדִינַת יִשְׂרָאֵל"
    },
    {
    searchString: "Japan",
    explanationText: "<img src=img/logos/Japan_Logo.png> Japan <br> 日本"
    },
    {
    searchString: "Japanese",
    explanationText: "<img src=img/logos/Japan_Logo.png> Japan <br> 日本"
    },
    {
    searchString: "China",
    explanationText: "<img src=img/logos/China_Logo.png> Peoples Republic <br> of China <br> 中华人民共和国"
    },
    {
    searchString: "Chinese",
    explanationText: "<img src=img/logos/China_Logo.png> Peoples Republic <br> of China <br> 中华人民共和国"
    },
    {
    searchString: "Pakistan",
    explanationText: "<img src=img/logos/Pakistan_Logo.png> Islamic Republic <br> of Pakistan <br> اسلامی جمہوریہ پاكستان"
    },
    {
    searchString: "Pakistani",
    explanationText: "<img src=img/logos/Pakistan_Logo.png> Islamic Republic <br> of Pakistan <br> اسلامی جمہوریہ پاكستان"
    },
    {
    searchString: "USSR",
    explanationText: "<img src=img/logos/USSR_Logo.png> Union of Soviet <br> Socialist Republics <br> Союз Советских <br> Социалистических Республик"
    },
    {
    searchString: "Soviet Union",
    explanationText: "<img src=img/logos/USSR_Logo.png> Union of Soviet <br> Socialist Republics <br> Союз Советских <br> Социалистических Республик"
    },
    {
    searchString: "Soviet",
    explanationText: "<img src=img/logos/USSR_Logo.png> Union of Soviet <br> Socialist Republics <br> Союз Советских <br> Социалистических Республик"
    },
    {
    searchString: "SAARC",
    explanationText: "<img src=img/logos/SAARC_Logo.png> South Asian Association <br> for Regional Cooperation"
    },
    {
    searchString: "PLO",
    explanationText: "<img src=img/logos/PLO_Logo.png> Palestine Liberation Organization <br> منظمة التحرير الفلسطينية"
    },
    {
    searchString: "Palestinian",
    explanationText: "<img src=img/logos/PLO_Logo.png> Palestine Liberation Organization <br> منظمة التحرير الفلسطينية"
    },
    {
    searchString: "Palestine",
    explanationText: "<img src=img/logos/PLO_Logo.png> Palestine Liberation Organization <br> منظمة التحرير الفلسطينية"
    },
    {
    searchString: "IRA",
    explanationText: "<img src=img/logos/PIRA_Logo.png> Provisional Irish Republican Army <br> Óglaigh na hÉireann"
    },
    {
    searchString: "France",
    explanationText: "<img src=img/logos/France_Logo.png> French Republic <br> République française"
    },
    {
    searchString: "French",
    explanationText: "<img src=img/logos/France_Logo.png> French Republic <br> République française"
    },
    {
    searchString: "Lebanon",
    explanationText: "<img src=img/logos/Lebanon_Logo.png> Lebanese Republic <br> الجمهورية اللبنانية"
    },
    {
    searchString: "Lebanese",
    explanationText: "<img src=img/logos/Lebanon_Logo.png> Lebanese Republic <br> الجمهورية اللبنانية"
    },
    {
    searchString: "Argentina",
    explanationText: "<img src=img/logos/Argentina_Logo.png> Argentine Republic <br> República Argentina"
    },
    {
    searchString: "Argentine",
    explanationText: "<img src=img/logos/Argentina_Logo.png> Argentine Republic <br> República Argentina"
    },
    {
    searchString: "West Germany",
    explanationText: "<img src=img/logos/West_Germany.png> Federal Republic of Germany <br> Bundesrepublik Deutschland"
    },
    {
    searchString: "West German",
    explanationText: "<img src=img/logos/West_Germany.png> Federal Republic of Germany <br> Bundesrepublik Deutschland"
    },
    {
    searchString: "Poland",
    explanationText: "<img src=img/logos/Poland_Logo.png> Polish People's Republic <br> Polska Rzeczpospolita Ludowa"
    },
    {
    searchString: "Polish",
    explanationText: "<img src=img/logos/Poland_Logo.png> Polish People's Republic <br> Polska Rzeczpospolita Ludowa"
    },
    {
    searchString: "Philippine",
    explanationText: "<img src=img/logos/Philippines_Logo.png> Republic of the Philippines <br> Republika ng Pilipinas <br> República de Filipinas"
    },
    {
    searchString: "Philippines",
    explanationText: "<img src=img/logos/Philippines_Logo.png> Republic of the Philippines <br> Republika ng Pilipinas <br> República de Filipinas"
    },
    {
    searchString: "Libya",
    explanationText: "<img src=img/logos/Libya_Logo.png Great Socialist People's <br> Libyan Arab Jamahiriya <br> اَلْجَمَاهِيرِيَّة ٱلْعَرَبِيَّة ٱللِّيبِيَّة ٱلشَّعْبِيَّة ٱلْإِشْتِرَاكِيَّة ٱلْعُظْمَى"
    },
    {
    searchString: "Libyan",
    explanationText: "<img src=img/logos/Libya_Logo.png> Great Socialist People's <br> Libyan Arab Jamahiriya <br> اَلْجَمَاهِيرِيَّة ٱلْعَرَبِيَّة ٱللِّيبِيَّة ٱلشَّعْبِيَّة ٱلْإِشْتِرَاكِيَّة ٱلْعُظْمَى"
    },
    {
    searchString: "South Africa",
    explanationText: "<img src=img/logos/South_Africa_Logo.png> Republic of South Africa <br> Republiek van Suid-Afrika"
    },
    {
    searchString: "South African",
    explanationText: "<img src=img/logos/South_Africa_Logo.png> Republic of South Africa <br> Republiek van Suid-Afrika"
    },
    {
    searchString: "Ethiopia",
    explanationText: "<img src=img/logos/Ethiopia_Logo.png> Provisional Military Government of Socialist Ethiopia <br> የኅብረተሰብአዊት ፡ ኢትዮጵያ ፡ ጊዜያዊ ፡ ወታደራዊ ፡ መንግሥት"
    },
    {
    searchString: "Ethiopian",
    explanationText: "<img src=img/logos/Ethiopia_Logo.png> Provisional Military Government of Socialist Ethiopia <br> የኅብረተሰብአዊት ፡ ኢትዮጵያ ፡ ጊዜያዊ ፡ ወታደራዊ ፡ መንግሥት"
    },
    {
    searchString: "United Nations",
    explanationText: "<img src=img/logos/UN_Logo.png> United Nations <br> منظمة الأمم المتحدة <br> 联合国 <br> Organisation des Nations unies <br> Организация Объединённых Наций <br> Organización de las Naciones Unidas"
    },
    {
    searchString: "UN",
    explanationText: "<img src=img/logos/UN_Logo.png> United Nations <br> منظمة الأمم المتحدة <br> 联合国 <br> Organisation des Nations unies <br> Организация Объединённых Наций <br> Organización de las Naciones Unidas"
    },
    {
    searchString: "Iran",
    explanationText: "<img src=img/logos/Iran_Logo.png> Islamic Republic of Iran <br> جمهوری اسلامی ایران"
    },
    {
    searchString: "Iranian",
    explanationText: "<img src=img/logos/Iran_Logo.png> Islamic Republic of Iran <br> جمهوری اسلامی ایران"
    },
    {
    searchString: "Iraq",
    explanationText: "<img src=img/logos/Iraq_Logo.png> Iraqi Republic <br> الجمهورية العراقية"
    },
    {
    searchString: "Iraqi",
    explanationText: "<img src=img/logos/Iraq_Logo.png> Iraqi Republic <br> الجمهورية العراقية"
    },
    {
    searchString: "Armenia",
    explanationText: "<img src=img/logos/Armenia_Logo.png> Armenian Soviet Socialist Republic <br> Հայկական Սովետական Սոցիալիստական Հանրապետություն"
    },
    {
    searchString: "Armenian",
    explanationText: "<img src=img/logos/Armenia_Logo.png> Armenian Soviet Socialist Republic <br> Հայկական Սովետական Սոցիալիստական Հանրապետություն"
    },
    {
    searchString: "Azerbaijan",
    explanationText: "<img src=img/logos/Azerbaijan_Logo.png> Azerbaijan Soviet Socialist Republic <br> Азәрбајҹан Совет Сосиалист Республикасы"
    },
    {
    searchString: "Azeri",
    explanationText: "<img src=img/logos/Azerbaijan_Logo.png> Azerbaijan Soviet Socialist Republic <br> Азәрбајҹан Совет Сосиалист Республикасы"
    },
    {
    searchString: "Afghanistan",
    explanationText: "<img src=img/logos/Afghanistan_Logo.png> Democratic Republic of Afghanistan <br> د افغانستان ډموکراتيک جمهوريت <br> جمهورى دموکراتیک افغانستان"
    },
    {
    searchString: "Afghan",
    explanationText: "<img src=img/logos/Afghanistan_Logo.png> Democratic Republic of Afghanistan <br> د افغانستان ډموکراتيک جمهوريت <br> جمهورى دموکراتیک افغانستان"
    },
    {
    searchString: "Afghani",
    explanationText: "<img src=img/logos/Afghanistan_Logo.png> Democratic Republic of Afghanistan <br> د افغانستان ډموکراتيک جمهوريت <br> جمهورى دموکراتیک افغانستان"
    },
    {
    searchString: "Myanmar",
    explanationText: "<img src=img/logos/Myanmar_Logo.png> Socialist Republic of the Union of Burma <br> ပြည်ထောင်စု ဆိုရှယ်လစ်သမ္မတ မြန်မာနိုင်ငံတော် "
    },
    {
    searchString: "South Korea",
    explanationText: "<img src=img/logos/South_Korea_Logo.png> Republic of Korea <br> 대한민국 "
    },
    {
    searchString: "South Korean",
    explanationText: "<img src=img/logos/South_Korea_Logo.png> Republic of Korea <br> 대한민국 "
    },
    {
    searchString: "Hungary",
    explanationText: "<img src=img/logos/Hungary_Logo.png> Hungarian People's Republic <br> Magyar Népköztársaság "
    },
    {
    searchString: "East German",
    explanationText: "<img src=img/logos/East_Germany_Logo.png> German Democratic Republic <br> Deutsche Demokratische Republik "
    },
    {
    searchString: "East Germany",
    explanationText: "<img src=img/logos/East_Germany_Logo.png> German Democratic Republic <br> Deutsche Demokratische Republik "
    },
    {
    searchString: "Romania",
    explanationText: "<img src=img/logos/Romania_Logo.png> Socialist Republic of Romania <br> Republica Socialistă România "
    },
    {
    searchString: "Romanian",
    explanationText: "<img src=img/logos/Romania_Logo.png> Socialist Republic of Romania <br> Republica Socialistă România "
    },
    {
    searchString: "North Yemen",
    explanationText: "<img src=img/logos/North_Yemen_Logo.png> Yemen Arab Republic <br> الجمهورية العربية اليمنية"
    },
    {
    searchString: "South Yemen",
    explanationText: "<img src=img/logos/South_Yemen_Logo.png> People's Democratic Republic of Yemen <br> جمهورية اليمَنَ الدِّيمقراطية الشعبيّة "
    },
    {
    searchString: "Nicaragua",
    explanationText: "<img src=img/logos/Nicaragua_Logo.png> Republic of Nicaragua <br> República de Nicaragua "
    },
    {
    searchString: "Kuwait",
    explanationText: "<img src=img/logos/Kuwait_Logo.png> State of Kuwait <br> دَوْلَةُ الكويت "
    },
    {
    searchString: "Egypt",
    explanationText: "<img src=img/logos/Egypt_Logo.png> Arab Republic of Egypt <br> جمهورية مصر العربية "
    },
    {
    searchString: "Ireland",
    explanationText: "<img src=img/logos/Ireland_Logo.png> Ireland/Republic of Ireland <br> Éire/Poblacht na hÉireann "
    },
    {
    searchString: "Irish",
    explanationText: "<img src=img/logos/Ireland_Logo.png> Ireland/Republic of Ireland <br> Éire/Poblacht na hÉireann "
    },
    {
    searchString: "Northern Ireland",
    explanationText: "<img src=img/logos/UK_Logo.png> Northern Ireland <br> Tuaisceart Éireann <br> Norlin Airlann"
    },
    {
    searchString: "El Salvador",
    explanationText: "<img src=img/logos/El_Salvador_Logo.png> Republic of El Salvador <br> República de El Salvador"
    },
    {
    searchString: "Greece",
    explanationText: "<img src=img/logos/Greece_Logo.png> Hellenic Republic <br> Ελληνική Δημοκρατία"
    },
    {
    searchString: "Spain",
    explanationText: "<img src=img/logos/Spain_Logo.png> Kingdom of Spain <br> Reino de España"
    },
    {
    searchString: "Syrian",
    explanationText: "<img src=img/logos/Syria_Logo.png> Syrian Arab Republic <br> اَلْجُمْهُورِيَّةُ ٱلْعَرَبِيَّةُ ٱلْسُوْرِيَّة "
    },
    {
    searchString: "Mexico",
    explanationText: "<img src=img/logos/Mexico_Logo.png> United Mexican States <br> Estados Unidos Mexicanos"
    },
    {
    searchString: "Australia",
    explanationText: "<img src=img/logos/Australia_Logo.png> Commonwealth of Australia"
    },
    {
    searchString: "Palau",
    explanationText: "<img src=img/logos/Palau_Logo.png> Republic of Palau <br> Beluu er a Belau"
    },
    {
    searchString: "Finland",
    explanationText: "<img src=img/logos/Finland_Logo.png> Republic of Finland <br> Suomen tasavalta"
    },
    {
    searchString: "Antigua & Barbuda",
    explanationText: "<img src=img/logos/Antigua_and_Barbuda_Logo.png> Antigua and Barbuda <br> Aanteega an' Baabyuuda"
    },
    {
    searchString: "Grenada",
    explanationText: "<img src=img/logos/Grenada_Logo.png> People's Revolutionary Government of Grenada "
    },
    {
    searchString: "NATO",
    explanationText: "<img src=img/logos/NATO_Logo.png> North Atlantic Treaty Organization"
    },
    {
    searchString: "Northern Cyprus",
    explanationText: "<img src=img/logos/TRN_Cyprus_Logo.png> Turkish Republic of Northern Cyprus <br> Kuzey Kıbrıs Türk Cumhuriyeti "
    },
    {
    searchString: "Brunei",
    explanationText: "<img src=img/logos/Brunei_Logo.png> Brunei Darussalam <br> Negara Brunei Darussalam <br> نݢارا بروني دارالسلام "
    },
    {
    searchString: "Burkina Faso",
    explanationText: "<img src=img/logos/Burkina_Faso_Logo.png> Burkina Faso <br> 𞤄𞤵𞤪𞤳𞤭𞤲𞤢 𞤊𞤢𞤧𞤮𞥅 <br> ߓߙߎߞߌߣߊ߫ ߝߊ߬ߛߏ߫ "
    },
    {
    searchString: "Uganda",
    explanationText: "<img src=img/logos/Uganda_Logo.png> Republic of Uganda <br> Jamhuri ya Uganda"
    },
    {
    searchString: "Portugal",
    explanationText: "<img src=img/logos/Portugal_Logo.png> Portuguese Republic <br> República Portuguesa "
    },
    {
    searchString: "Sweden",
    explanationText: "<img src=img/logos/Sweden_Logo.png> Kingdom of Sweden <br> Konungariket Sverige "
    },
    {
    searchString: "Ukrainian SSR",
    explanationText: "<img src=img/logos/Ukraine_Logo.png> Ukrainian Soviet Socialist Republic <br> Українська Радянська Соціалістична Республіка  "
    },
    {
    searchString: "New Zealand",
    explanationText: "<img src=img/logos/New_Zealand_Logo.png> New Zealand <br> Aotearoa "
    },
    {
    searchString: "Iceland",
    explanationText: "<img src=img/logos/Iceland_Logo.png> Republic of Iceland <br> Lýðveldið Ísland "
    },
    {
    searchString: "Taiwan",
    explanationText: "<img src=img/logos/Taiwan_Logo.png> Republic of not China <br> 中華民國 "
    },
    {
    searchString: "Chile",
    explanationText: "<img src=img/logos/Chile_Logo.png> Republic of Chile <br> República de Chile "
    },
    {
    searchString: "Maldives",
    explanationText: "<img src=img/logos/Maldives_Logo.png> Republic of Maldives <br> ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ "
    },
    {
    searchString: "Austria",
    explanationText: "<img src=img/logos/Austria_Logo.png> Republic of Austria <br> Republik Österreich "
    },
    {
    searchString: "Lithuania",
    explanationText: "<img src=img/logos/Lithuania_Logo.png> Lithuanian Soviet Socialist Republic <br> Lietuvos Tarybų Socialistinė Respublika "
    },
    {
    searchString: "Estonia",
    explanationText: "<img src=img/logos/Estonia_Logo.png> Estonian Soviet Socialist Republic <br> Eesti Nõukogude Sotsialistlik Vabariik "
    },
    {
    searchString: "Latvia",
    explanationText: "<img src=img/logos/Latvia_Logo.png> Latvian Soviet Socialist Republic <br> Latvijas Padomju Sociālistiskā Republika "
    },
    {
    searchString: "Czechoslovakia",
    explanationText: "<img src=img/logos/Czechoslovakia_Logo.png> Czechoslovak Socialist Republic <br> Československá socialistická republika "
    },
    {
    searchString: "Panama",
    explanationText: "<img src=img/logos/Panama_Logo.png> Republic of Panama <br> República de Panamá "
    },
    {
    searchString: "Namibia",
    explanationText: "<img src=img/logos/Namibia_Logo.png> Republic of Namibia <br> Orepublika yaNamibia <br> Republiki Namibiab dib <br> Orepublika yaNamibia "
    },
    {
    searchString: "Cuba",
    explanationText: "<img src=img/logos/Cuba_Logo.png> Republic of Cuba <br> República de Cuba "
    },
    {
    searchString: "Saudi Arabia",
    explanationText: "<img src=img/logos/Saudi_Arabia_Logo.png> Kingdom of Saudi Arabia <br> المملكة العربية السعودية "
    },
    {
    searchString: "Turkey",
    explanationText: "<img src=img/logos/Turkey_Logo.png> Republic of Turkey <br> Türkiye Cumhuriyeti "
    },
    {
    searchString: "Cyprus",
    explanationText: "<img src=img/logos/Cyprus_Logo.png> Republic of Cyprus <br> Κυπριακή Δημοκρατία "
    },



    //portraits below
    {
    searchString: "JR Jayewardene",
    explanationText: "<img src=img/portraits/Jayewardene_JR.jpg> Junius Richard Jayewardene"
    },
    {
    searchString: "Jayewardene",
    explanationText: "<img src=img/portraits/Jayewardene_JR.jpg> Junius Richard Jayewardene"
    },
    {
    searchString: "Ranasinghe Premadasa",
    explanationText: "<img src=img/portraits/Premadasa_Ranasinghe.jpg> Ranasinghe Premadasa"
    },
    {
    searchString: "A. Amirthalingam",
    explanationText: "<img src=img/portraits/Amirthalingam_Appapillai.jpg> Appapillai Amirthalingam"
    },
    {
    searchString: "A Amirthalingam",
    explanationText: "<img src=img/portraits/Amirthalingam_Appapillai.jpg> Appapillai Amirthalingam"
    },
    {
    searchString: "Sirimavo Bandaranaike",
    explanationText: "<img src=img/portraits/BandaranaikeSirimavo.jpg> Sirima Ratwatte Dias Bandaranaike"
    },
    {
    searchString: "Sirimavo",
    explanationText: "<img src=img/portraits/BandaranaikeSirimavo.jpg> Sirima Ratwatte Dias Bandaranaike"
    },
    {
    searchString: "Mrs Bandaranaike",
    explanationText: "<img src=img/portraits/BandaranaikeSirimavo.jpg> Sirima Ratwatte Dias Bandaranaike"
    },
    {
    searchString: "Anura Bandaranaike",
    explanationText: "<img src=img/portraits/BandaranaikeAnura.jpg> Anura Priyadarshi Solomon Dias Bandaranaike"
    },
    {
    searchString: "Anura",
    explanationText: "<img src=img/portraits/BandaranaikeAnura.jpg> Anura Priyadarshi Solomon Dias Bandaranaike"
    },
    {
    searchString: "Chandrika",
    explanationText: "<img src=img/portraits/KumaratungeChandrika.jpg> Chandrika Bandaranaike Kumaratunga"
    },
    {
    searchString: "Chandrika Kumaranatunga",
    explanationText: "<img src=img/portraits/KumaranatungeChandrika.jpg> Chandrika Bandaranaike Kumaratunga"
    },
    {
    searchString: "Maithripala Senanayake",
    explanationText: "<img src=img/portraits/SenanayakeMaithripala.jpg> Maithripala Senanayake"
    },
    {
    searchString: "Rohana Wijeweera",
    explanationText: "<img src=img/portraits/Wijeweera_Rohana.jpg> Patabendi Don Jinadasa Nandasiri Wijeweera"
    },
    {
    searchString: "Rohana",
    explanationText: "<img src=img/portraits/Wijeweera_Rohana.jpg> Patabendi Don Jinadasa Nandasiri Wijeweera"
    },
    {
    searchString: "Wijeweera",
    explanationText: "<img src=img/portraits/Wijeweera_Rohana.jpg> Patabendi Don Jinadasa Nandasiri Wijeweera"
    },
    {
    searchString: "Hector Kobbekaduwa",
    explanationText: "<img src=img/portraits/Kobbekaduwa_Hector.jpg> Hector Senarath Rajakaruna Bandara Kobbekaduwa"
    },
    {
    searchString: "Kobbekaduwa",
    explanationText: "<img src=img/portraits/Kobbekaduwa_Hector.jpg> Hector Senarath Rajakaruna Bandara Kobbekaduwa"
    },
    {
    searchString: "Pieter Keuneman",
    explanationText: "<img src=img/portraits/Keuneman_Pieter.jpg> Pieter Gerald Bartholomeusz Keuneman"
    },
    {
    searchString: "Colvin R. de Silva",
    explanationText: "<img src=img/portraits/Colvin_de_Silva.jpg> Colvin Reginald de Silva"
    },
    {
    searchString: "Colvin R de Silva",
    explanationText: "<img src=img/portraits/Colvin_de_Silva.jpg> Colvin Reginald de Silva"
    },
    {
    searchString: "Vasudeva Nanayakkara",
    explanationText: "<img src=img/portraits/Nanayakkara_Vasudeva.jpg> Vasudeva Nanayakkara"
    },
    {
    searchString: "Kumar Ponnambalam",
    explanationText: "<img src=img/portraits/Ponnambalam_Kumar.jpg> Gaasinather Gangaser Ponnambalam"
    },
    {
    searchString: "Ponnambalam",
    explanationText: "<img src=img/portraits/Ponnambalam_Kumar.jpg> Gaasinather Gangaser Ponnambalam"
    },
    {
    searchString: "Savumiamoorthy Thondaman",
    explanationText: "<img src=img/portraits/Thondaman_Savumiamoorthy.jpg> Savumiamoorthy Thondaman"
    },
    {
    searchString: "Thondaman",
    explanationText: "<img src=img/portraits/Thondaman_Savumiamoorthy.jpg> Savumiamoorthy Thondaman"
    },
    {
    searchString: "Vijaya Kumaranatunga",
    explanationText: "<img src=img/portraits/Kumaranatunga_Vijaya.jpg> Kovilage Anton Vijaya Kumaranatunga"
    },
    {
    searchString: "Vijaya",
    explanationText: "<img src=img/portraits/Kumaranatunga_Vijaya.jpg> Kovilage Anton Vijaya Kumaranatunga"
    },
    {
    searchString: "Velupillai Prabhakaran",
    explanationText: "<img src=img/portraits/Prabhakran_Vellupillai.jpg> Velupillai Prabhakaran"
    },
    {
    searchString: "Prabhakaran",
    explanationText: "<img src=img/portraits/Prabhakran_Vellupillai.jpg> Velupillai Prabhakaran"
    },
    {
    searchString: "Uma Maheswaran",
    explanationText: "<img src=img/portraits/Maheswaran_Uma.jpg> Kadirgamapillai (Kathirkamar) Nallainathan"
    },
    {
    searchString: "Ossie Abeygunasekera",
    explanationText: "<img src=img/portraits/Abeygunasekera_Ossie.jpg> Kahangama Withanage Oswin Nandimithra Abeyagoonasekera"
    },
];



