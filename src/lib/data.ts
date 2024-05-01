export interface Product {
    name: string;
    title: string;
    description: string;
    category: string;
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
    simple_title?: string;
}


export const products: Product[] = [
    {
        name: "CA Series Connectors",
        title: "Shielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/CA-series.pdf",
        url: "/products/ca-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 14.5mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Thermoplastic polyester (PBT), Polyamid (PA66),"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)" }, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "Solder cup, crimp type, screw type, dip solder"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FPM), or Perbunan (NBR) stiffened gaskets"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking/Speedcon"}, 
            {title: "Male receptacles", description: "M23 screw locking/Speedcon"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]


    },
    {
        name: "HC Series Connectors",
        title: "Shielded Connectors M27",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/HC-series.pdf",
        url: "/products/hc-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)" , simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)" , simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated" , simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 18 mm" , simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA66) UL 94 V0"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type, solder cup, DIP solder"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber FPM"}, 
            {title: "Gaskets", description: "Perbunan NBR or FPM"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M27 screw locking"}, 
            {title: "Male receptacles", description: "M27 screw locking"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]


    },
    {
        name: "RC Series Connectors",
        title: "Unshielded Connectors M23",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/RC-series.pdf",
        url: "/products/rc-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 18 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Thermoplastic polyester (PBT), Polyamid (PA66),"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "Solder cup, crimp type, screw type, dip solder"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FPM), or Perbunan (NBR) stiffened gaskets"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to +125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking"}, 
            {title: "Male receptacles", description: "M23 screw locking"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]


    },
    {
        name: "RF Series Connectors",
        title: "Shielded Connectors M23 crimp versions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/RF-series.pdf",
        url: "/products/rf-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn) or stainless steel 1.4305", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 13.2 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamid (PA66),"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FPM)"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 20 °C up to +125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 4 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking or Speedcon"}, 
            {title: "Male receptacles", description: "M23 screw locking or Speedcon"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]


    },
    {
        name: "SF Series Connectors",
        title: "Shielded Connectors M23 Power 630 Volt",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/SF-series.pdf",
        url: "/products/sf-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 19 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA66) UL 94 V0)"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FPM)"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 20 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 4 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "Standard min. 50"}, 
            {title: "Male receptacles", description: "M23 screw locking"},
            {title: "Mating cycles", description: "M23 screw locking"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]


    },
    {
        name: "SH Series Connectors",
        title: "Shielded Power Connectors M23 Circular Hybrid Connectors",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/SH-series.pdf",
        url: "/products/sh-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 18 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA66) UL 94 V0)"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FKM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FKM)"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to + 130°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 266 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking/Speedcon"}, 
            {title: "Male receptacles", description: "M23 screw locking/Speedcon"},
            {title: "Mating cycles", description: "Standard min. 100"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]


    },
    {
        name: "SL Series Connectors",
        title: "Shielded Power Connectors M58",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/SL-series.pdf",
        url: "/products/sl-connector",

        shell_mat: [   
            {title: "Machined components", description: "Aluminum, anodized", simple_title: "Machined"},
            {title: "Cable entry", description: "max. 36 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA66) UL 94 V0"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating and PE", description: "silver plated (Ag)"}, 
            {title: "Contact plating signal:", description: "gold plated (Au)"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FPM)"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 20 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 4 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M58 screw locking"}, 
            {title: "Male receptacles", description: "M58 screw locking"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]


    },
    {
        name: "SM Series Connectors",
        title: "Shielded Power Connectors M40",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/SM-series.pdf",
        url: "/products/sm-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 26.5 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA66) UL 94 V0"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FPM)"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 20 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 4 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M40 screw locking/Speedcon"}, 
            {title: "Male receptacles", description: "M40 screw locking/Speedcon"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]


        
    },
    {
        name: "SSR Series Connectors",
        title: "Unshielded Connectors M23 The Stainless Steel Program",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/SSR-series.pdf",
        url: "/products/ssr-connector",

        shell_mat: [   
            {title: "Machined components", description: "Stainless Steel", simple_title: "Machined"},  
            {title: "Cable entry", description: "max. 19 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Thermoplastic polyester (PBT), Polyamid (PA66),"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "Solder cup, crimp type, screw type, dip solder"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "(FKM) viton"}, 
            {title: "Gaskets", description: "(FKM) viton"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to +125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking"}, 
            {title: "Male receptacles", description: "M23 screw locking"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]

    },
    {
        name: "ST Series Connectors",
        title: "Shielded Connectors M17/Speedcon",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/ST-series.pdf",
        url: "/products/st-connector",
       
        shell_mat: [   
                    {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
                    {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
                    {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
                    {title: "Cable entry", description: "max. 12.5 mm", simple_title: "Entry"}
                ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamid (PA66),"}
        ],
        
        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FPM)"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 20 °C up to +125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 4 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M17, or M17 in Speedcon"}, 
            {title: "Male receptacles", description: "M17, or M17 in Speedcon"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]
        

    },
    {
        name: "TU Series Connectors",
        title: "Shielded Connectors in Bayonet Style",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/TU-series.pdf",
        url: "/products/tu-connector",
       
        shell_mat: [   
                    {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
                    {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
                    {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
                    {title: "Cable entry", description: "max. 14 mm", simple_title: "Entry"}
                ],

        insulator: [   
            {title: "Connector inserts", description: "Thermoplastic polyester (PBT), Polyamid (PA66),"}
        ],
        
        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "Solder cup, crimp type, screw type, dip solder"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FPM), or Perbunan (NBR) stiffened gaskets"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 20 °C up to +125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 4 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "bayonet type (ring nut) dia. 29.3 mm"}, 
            {title: "Male receptacles", description: "bayonet type (grooves)"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]
        

    },
    {
        name: "UC Series Connectors",
        title: "Shielded Connectors M23 The shielded and robust standard version",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/standin/dum.png",
        pdf: "/pdf/ST-series.pdf",
        url: "/products/st-connector",
       
        shell_mat: [   
                    {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
                    {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
                    {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
                    {title: "Cable entry", description: "max. 18 mm", simple_title: "Entry"}
                ],

        insulator: [   
            {title: "Connector inserts", description: "Thermoplastic polyester (PBT), Polyamid (PA66),"}
        ],
        
        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "Solder cup, crimp type, screw type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}, 
            {title: "Gaskets", description: "Fluor rubber (FPM), or Perbunan (NBR) stiffened gaskets"}, 
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "-40 °C up to +125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking"}, 
            {title: "Male receptacles", description: "M23 screw locking"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]
        

    }
];



export interface Employee {
    name: string;
    role: string;
    departments: string;
    email: string;
}

export let employees: Employee[] = [
    { name: 'Michael Klautky', role: 'President', departments: 'Inside Sales / Outside Sales / Operations', email: 'sales@rde-usa.com' },
    { name: 'Claudia Arteaga', role: 'Office Administrator', departments: 'Inside Sales / Customer Service / Order Processing', email: 'carteaga@rde-usa.com' },
    { name: 'Joe Surma', role: 'Technical Support', departments: 'Inside Sales / Customer Service / Order Processing', email: 'jsurma@rde-usa.com' },
    { name: 'Reinhard Derksen', role: 'Technical Support', departments: 'R & D', email: 'reinhard@rde-usa.com' },
    { name: 'Richard Chung', role: 'Support Engineer', departments: 'Product / Program Manager', email: 'rchung@rde-usa.com' },
    { name: 'James Smith', role: 'Support Engineer', departments: 'Production / QC Manager', email: 'jsmith@rde-usa.com' },
    { name: 'Angelika Derksen', role: 'Vice President', departments: 'Finance/Controlling/HR', email: 'accounting@rde-usa.com' },
];