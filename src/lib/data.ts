export interface Product {
    name: string;
    title: string;
    description: string;
    mainImage: string;
    pdf: string;
    url: string;
    shell_mat?: Entry[];
    insulator?: Entry[];
    contacts?: Entry[];
    sealing?: Entry[];
    temperature?:Entry[];
    mating?: Entry[];
    protection?:Entry[];
}

export interface Entry {
    title: string;
    description: string;
}


export const products: Product[] = [
    {
        name: "TU Series Connectors",
        title: "Shielded Connectors in Bayonet Style",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/tu-connector",
       
            shell_mat: [   
                        {title: "Machined components", description: "Copper-Zinc alloy (CuZn)"}, 
                        {title: "Die-Cast components", description: "Zinc (GD-Zn)"}, 
                        {title: "Shell plating", description: "Nickel (Ni) plated"}, 
                        {title: "Cable entry", description: "max. 19 mm"}
                    ],

            insulator: [   
                {title: "Connector inserts", description: "Copper-Zinc alloy (CuZn)"}
            ],
            
            contacts: [   
                {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
                {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
                {title: "Contact termination", description: "crimp type"}, 
            ],

            sealing: [   
                {title: "Sealing rings", description: "Fluor rubber FPM"}, 
                {title: "Gaskets", description: "Fluor rubber FPM"}, 
            ],

            temperature: [   
                {title: "Temperature (long term) Celsius", description: "- 20 °C up to + 125°C"}, 
                {title: "Temperature (long term) Fahrenheit", description: "- 4 °F up to + 257 °F"}, 
            ],

            mating: [   
                {title: "Mating cycles", description: "Standard min. 50"}, 
                {title: "Female coupling nuts", description: "M23 screw locking"},
                {title: "Male receptacles", description: "M23 screw locking"}
            ],

            protection: [   
                {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
            ]
        

    },
    {
        name: "CA Series Connectors",
        title: "Shielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/ca-connector"
    },
    {
        name: "RC Series Connectors",
        title: "Unshielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/rc-connector"
    },
    {
        name: "DA Series Connectors",
        title: "Shielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/da-connector"
    },
    {
        name: "CB Series Connectors",
        title: "Shielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/cb-connector"
    },
    {
        name: "RD Series Connectors",
        title: "Shielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/rd-connector"
    },
    {
        name: "AD Series Connectors",
        title: "Shielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/ad-connector"
    },
    {
        name: "TB Series Connectors",
        title: "Shielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/tb-connector"
    },
    {
        name: "CA Series Connectors II",
        title: "Shielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/ca-connector-ii"
    },
    {
        name: "TU Series Connectors II",
        title: "Shielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage: "/standin/dum.png",
        pdf: "/pdf/crimp-tools.pdf",
        url: "/products/tu-connector-ii"
    }
];