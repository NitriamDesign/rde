export interface Product {
    name: string;
    title: string;
    description: string;
    category: string;
    mainImage: string;
    thumbnail?: string;
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
        description: "This signal connector series is intended as a more budget friendly, high-volume alternative to machine turned versions, with improved user-friendly shielding to an IP67 sealing standard.  Utilizes all of the RC contact inserts to cover a broad applications range.",
        category: 'connector',
        mainImage: "/images/connectors/ca-blue-lg.jpg",
        thumbnail: "/images/connectors/ca-blue.jpg",
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
        description: " This is our high-density signal series connector system for up to 28-pol. conductor configurations, 8A at 150V, 0.15-1mm^2 (26-18AWG), with broad configuration and strain relief capabilities up to IP68 sealing standard.  A very robust machine turned connector system where high reliability in harsh environment performance is required.",
        category: 'connector',
        mainImage: "/images/connectors/hc-blue-lg.jpg",
        thumbnail: "/images/connectors/hc-blue.jpg",
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
        description: "Our most popular, customizable and diverse Legacy series that covers a broad applications spectrum, ranging from signal to power, from 6-pol. to 19-pol., in shielded and unshielded configurations, utilizing solder or crimp contact insert options.  This series offers the greatest diversity in cable strain relief applications, including up to IP68 sealing with full cable glands.  Primary material is CuZn machine turned components for unmatched quality and robustness in the field.  Stainless steel versions for marine applications in our SSR series are also available.",
        category: 'connector',
        mainImage: "/images/connectors/rc-cable-blue-lg.jpg",
        thumbnail: "/images/connectors/rc-cable-blue.jpg",
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
        description: "Our die cast M23 signal connector equivalents for 12, 16, and 17-pol. crimp insert applications, allowing for our Speedcon (1/2 turn), as well as standard locking applications.  Improved universal shielding assembly for faster field installations.",
        category: 'connector',
        mainImage: "/images/connectors/rf-blue-lg.jpg",
        thumbnail: "/images/connectors/rf-blue.jpg",
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
        description: "This is our power connector series combining power and feedback, covering contact configurations from 6 – 8-pol., up to 3.6mm^2 (12AWG) and up to 30A/630V for various industrial applications, including motors and drive systems.  Very robust and flexible design in comparison to our competitors, as well as user friendly shielding components that simplify assembly for field applications.",
        category: 'connector',
        mainImage: "/images/connectors/sf-blue-lg.jpg",
        thumbnail: "/images/connectors/sf-blue.jpg",
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
        description: "The evolution of our SF power series lead to the development of our Hybrid M23 to cover applications requiring everything that our SF series does, plus the addition of CAT5/6 insert to handle smart signal applications in one combined package, including separate noise shielding between the power and signal inserts, with quick lock or standard mating as needed.",
        category: 'connector',
        mainImage: "/images/connectors/sh-blue-lg.jpg",
        thumbnail: "/images/connectors/sh-blue.jpg",
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
        description: "Finishing out our program is the MOA (Mother-of-All) power connectors for heavy duty power applications requiring up to 150A/630V, handling conductors up to 8mm^2 (8AWG), for large motor and spindle deployments.  In our field of industrial automation, this is about as heavy duty as it gets.  Offers all of the electro-mechanical advantages in design and robustness that our customer are used to.",
        category: 'connector',
        mainImage: "/images/connectors/sl-blue-lg.jpg",
        thumbnail: "/images/connectors/sl-blue.jpg",
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
        description: " Designed with a larger footprint for those applications needing up to 65A/630V power with shielded feedback applications.  Designed for heavy duty industrial applications in 6-8pol., straight to angled (receptacle) configurations.",
        category: 'connector',
        mainImage: "/images/connectors/sm-blue-lg.jpg",
        thumbnail: "/images/connectors/sm-blue.jpg",
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
        description: " In essence this is a selection of the most popular RC/UC series configurations in a stainless steel offering for super duty performance in caustic and marine environments.",
        category: 'connector',
        mainImage: "/images/connectors/ssr-blue-lg.jpg",
        thumbnail: "/images/connectors/ssr-blue.jpg",
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
        description: "Our Speedcon (1/2 turn) shielded connector series – the smaller brother to our M23 class - where a smaller footprint is required for applications ranging from 3.6A/60V for signal (up to 17-pol.) and up to 25A/630V for power (up to 8-pol.) configurations.  Primary material is zinc die-cast with some machine turned (C&C) components.  Also available with standard screw-on mating to IP67 sealing standard.",
        category: 'connector',
        mainImage: "/images/connectors/st-blue-lg.jpg",
        thumbnail: "/images/connectors/st-blue.jpg",
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
        description: " Our program would not be complete without our robust fast locking bayonet series, deployed in the most demanding applications where superior quality and performance is an absolute must.  The TU series offers all of the RC inserts for signal and power applications ranging from 8-20A, including customizable cable strain relief systems up to IP68 sealing standard, and universal shielding.",
        category: 'connector',
        mainImage: "/images/connectors/tu-blue-lg.jpg",
        thumbnail: "/images/connectors/tu-blue.jpg",
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
        description: "This series offers the most popular configurations of the RC Legacy program utilizing a more user-friendly universal shielding system.  Many of the RC components are interchangeable, allowing for customizations as needed for just about any application within its performance range.",
        category: 'connector',
        mainImage: "/images/connectors/uc-blue-lg.jpg",
        thumbnail: "/images/connectors/uc-blue.jpg",
        pdf: "/pdf/UC-series.pdf",
        url: "/products/uc-connector",
       
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
        

    },
    {
        name: "PCA Series Connectors",
        title: "Shielded Power/Signal Connectors M23 / one click Series PCA",
        description: " Our customers asked us to develop a connector system that would provide retro-mating compatibility with some of our competitor’s IT/Intercontec connector products of the same class, as well as a fast locking alternative to standard screw-on mating mechanisms.  Not only were we able to deliver this for our customers, but went beyond their requirements to develop a complete power and signal series in our PRO Series, providing an improved one-click mating feature with audible feedback for fast mating/un-mating during maintenance or modular reconfigurations. This series also features further improvements in shielding, making assembly faster and even more user-friendly.",
        category: 'connector',
        mainImage: "/images/connectors/pca-blue-lg.jpg",
        thumbnail: "/images/connectors/pca-blue.jpg",
        pdf: "/pdf/M23-PRO-Series.pdf",
        url: "/products/pca-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 15 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA6.6)"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber (FPM)"}
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking, or one click"}, 
            {title: "Male receptacles", description: "M23 screw locking, or one click"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]

    },
    {
        name: "PSF Series Connectors",
        title: "Shielded Power/Signal Connectors M23 / one click Series PSF",
        description: "The natural conclusion in our development rounds out this series for power applications up to 30A, 3.6mm^2 (12AWG) for 6-8pol. crimp inserts, with all the same mechanical advantages of our PRO series design.",
        category: 'connector',
        mainImage: "/images/connectors/psf-blue-lg.jpg",
        thumbnail: "/images/connectors/psf-blue.jpg",
        pdf: "/pdf/M23-PRO-Series.pdf",
        url: "/products/psf-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 17 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA6.6)"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber FKM"}
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking, or one click"}, 
            {title: "Male receptacles", description: "M23 screw locking, or one click"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]

    },
    {
        name: "Adaptors Compressed",
        title: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/images/connectors/adaptors-compressed-blue-lg.jpg",
        thumbnail: "/images/connectors/adaptors-compressed-blue.jpg",
        pdf: "/pdf/",
        url: "/products/adaptors-compressed",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 17 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA6.6)"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber FKM"}
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking, or one click"}, 
            {title: "Male receptacles", description: "M23 screw locking, or one click"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]

    },
    {
        name: "PC-SF Connectors",
        title: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/images/connectors/pc-sf-blue-lg.jpg",
        thumbnail: "/images/connectors/pc-sf-blue.jpg",
        pdf: "/pdf/M23-PRO-Series.pdf",
        url: "/products/PC-SF",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 17 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA6.6)"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber FKM"}
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking, or one click"}, 
            {title: "Male receptacles", description: "M23 screw locking, or one click"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]

    },
    {
        name: "SS Stainless",
        title: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/images/connectors/ss-stainless-blue-lg.jpg",
        thumbnail: "/images/connectors/ss-stainless-blue.jpg",
        pdf: "/pdf/",
        url: "/products/SS-Stainless",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 17 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA6.6)"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber FKM"}
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking, or one click"}, 
            {title: "Male receptacles", description: "M23 screw locking, or one click"},
            {title: "Mating cycles", description: "Standard min. 50"}
        ],

        protection: [   
            {title: "Protection class", description: "IP 67 (mated) depends on which cable gland is used"}
        ]

    },
    {
        name: "SAMPLE",
        title: "SAMPLE LAYOUT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: 'connector',
        mainImage: "/images/connectors/SAMPLE-blue-lg.jpg",
        thumbnail: "/images/connectors/SAMPLE-blue.jpg",
        pdf: "/pdf/SAMPLE.pdf",
        url: "/products/SAMPLE-connector",

        shell_mat: [   
            {title: "Machined components", description: "Copper-Zinc alloy (CuZn)", simple_title: "Machined"}, 
            {title: "Die-Cast components", description: "Zinc (GD-Zn)", simple_title: "Die-Cast"}, 
            {title: "Shell plating", description: "Nickel (Ni) plated", simple_title: "Shell Plating"}, 
            {title: "Cable entry", description: "max. 17 mm", simple_title: "Entry"}
        ],

        insulator: [   
            {title: "Connector inserts", description: "Polyamide (PA6.6)"}
        ],

        contacts: [   
            {title: "Contact material", description: "Copper-Zinc alloy (CuZn)"}, 
            {title: "Contact plating", description: "Nickel (Ni) with gold (Au) passivated"}, 
            {title: "Contact termination", description: "crimp type"}, 
        ],

        sealing: [   
            {title: "Sealing rings", description: "Fluor rubber FKM"}
        ],

        temperature: [   
            {title: "Temperature (long term) Celsius", description: "- 40 °C up to + 125°C"}, 
            {title: "Temperature (long term) Fahrenheit", description: "- 40 °F up to + 257 °F"}, 
        ],

        mating: [   
            {title: "Female coupling nuts", description: "M23 screw locking, or one click"}, 
            {title: "Male receptacles", description: "M23 screw locking, or one click"},
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
    imageEmail?: string;
}

export let employees: Employee[] = [
    { name: 'Michael Klautky', role: 'President', departments: 'Inside Sales / Outside Sales / Operations', email: 'sales@rde-usa.com', imageEmail:'/emails/president.png'  },
    { name: 'Claudia Arteaga', role: 'Office Administrator', departments: 'Inside Sales / Customer Service / Order Processing', email: 'carteaga@rde-usa.com', imageEmail:'/emails/admin.png' },
    { name: 'Joe Surma', role: 'Technical Support', departments: 'Inside Sales / Customer Service / Order Processing', email: 'jsurma@rde-usa.com', imageEmail:'/emails/tech.png' },
    { name: 'Reinhard Derksen', role: 'Technical Support', departments: 'R & D', email: 'reinhard@rde-usa.com', imageEmail:'/emails/tech2.png' },
    { name: 'James Smith', role: 'Support Engineer', departments: 'Production / QC Manager', email: 'jsmith@rde-usa.com', imageEmail:'/emails/engineer.png' },
    { name: 'Angelika Derksen', role: 'Vice President', departments: 'Finance/Controlling/HR', email: 'accounting@rde-usa.com', imageEmail:'/emails/vp.png' },
];



export interface QuickConnectorData {
    connectorImage: string;
    series: string[];
    locking: string[];
    positions: string[];
    voltAmpMax: string[];
    cableDiameter: string[];
    awg: string[];
    contactsDiameter: string[];
    material: string[];
    shield: string[];
    ul: string[];
    links: PageAndPDFLink[];
}

export interface PageAndPDFLink {
    pageUrl?: string
    pdfRef?: string
}


export let connectorsQuickData: QuickConnectorData[] = [
    {
        connectorImage: "static/images/catalog/ca-crimp.jpg",
        series: ["CA crimp", "CA crimp", "CA RC-Inserts", "CA RC-Inserts"],
        locking: ["Speedcon", "M23", "Speedcon", "M23"],
        positions: ["12/17", "12/17", "6-19", "6-19"],
        voltAmpMax: ["150/8", "150/8", "300/20", "300/20"],
        cableDiameter: ["14.5mm", "14.5mm", "14.5mm", "14.5mm"],
        awg: ["28-17", "28-17", "26-14", "26-14"],
        contactsDiameter: ["1.0 mm", "1.0 mm", "1/1.5/2.0", "1/1.5/2.0"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ca-connector', pdfRef: 'C-L-00'}]
    },
    {
        connectorImage: "/images/catalog/hc-series.jpg",
        series: ["HC"],
        locking: ["M27"],
        positions: ["26/28"],
        voltAmpMax: ["150/8"],
        cableDiameter: ["max.18"],
        awg: ["28-17"],
        contactsDiameter: ["2.0/3.6"],
        material: ["Brass", "Zinc", "Nickel"],
        shield: ["Yes"],
        ul: ["No"],
        links: [{pageUrl: '/products/HC-Series-Connector', pdfRef: 'C-P_00'}]
    },
    {
        connectorImage: "/images/catalog/rc-rm-series.jpg",
        series: ["RC/RM"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["18.0 mm"],
        awg: ["26-14"],
        contactsDiameter: ["1/1.5/2.0"],
        material: ["Cu-Zn"],
        shield: ["No"],
        ul: ["Yes"],
        links: [{pageUrl: '/products/RC-RM', pdfRef: 'C-F-00'}]
      },
      {
        connectorImage: "/images/catalog/rf-crimps.jpg",
        series: ["RF Crimp", "RF Crimp"],
        locking: ["Speedcon", "M23"],
        positions: ["12/16/17", "12/16/17"],
        voltAmpMax: ["150/8", "150/8"],
        cableDiameter: ["13.2mm", "13.2mm"],
        awg: ["28-20", "28-20"],
        contactsDiameter: ["1.0 mm", "1.0 mm"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes"],
        ul: ["Yes", "Yes"],
        links: [{pageUrl: '/products/RF-Crimp', pdfRef: 'C-E-00'}]
      },
      {
        connectorImage: "/images/catalog/sf-power-series.jpg",
        series: ["SF Crimp", "SF Crimp"],
        locking: ["Speedcon", "M23"],
        positions: ["6/8", "6/8"],
        voltAmpMax: ["630/30", "630/30"],
        cableDiameter: ["18.0mm", "18.0mm"],
        awg: ["24-12", "24-12"],
        contactsDiameter: ["1.0/2.0 mm", "1.0/2.0 mm"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes"],
        ul: ["Yes", "Yes"],
        links: [{pageUrl: '/products/SF-Crimp', pdfRef: 'C-K-00'}]
      },
      {
        connectorImage: "/images/catalog/sh-hybrid-series.jpg",
        series: ["SH Hybrid", "SH Hybrid"],
        locking: ["Speedcon", "M23"],
        positions: ["4+4+4+PE", "4+4+4+PE"],
        voltAmpMax: ["850/50", "850/50"],
        cableDiameter: ["18.0mm", "18.0mm"],
        awg: ["28-10", "28-10"],
        contactsDiameter: ["0.8/1.0/2.0 mm", "0.8/1.0/2.0 mm"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes"],
        ul: ["No", "No"],
        links: [{pageUrl: '/products/SH-Hybrid', pdfRef: 'C-T-00'}]
      },
      {
        connectorImage: "/images/catalog/sl-power-series.jpg",
        series: ["SL Power"],
        locking: ["M58"],
        positions: ["6/8"],
        voltAmpMax: ["630/150"],
        cableDiameter: ["36.0 mm"],
        awg: ["16-1"],
        contactsDiameter: ["1.6/10.0 mm"],
        material: ["Aluminum anod."],
        shield: ["Yes"],
        ul: ["No"],
        links: [{pageUrl: '/products/SL-Power', pdfRef: 'C-R-00'}]
      },
      {
        connectorImage: "/images/catalog/sm-power-series.jpg",
        series: ["SM power", "SM Power"],
        locking: ["Speedcon", "M40"],
        positions: ["6/8", "6/8"],
        voltAmpMax: ["630/70","630/70"],
        cableDiameter: ["26.5 mm", "26.5 mm"],
        awg: ["26-8", "26-8"],
        contactsDiameter: ["2.0/3.6 mm", "2.0/3.6 mm"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes"],
        ul: ["Yes", "Yes"],
        links: [{pageUrl: '/products/SM-Power', pdfRef: 'C-Q-00'}]
      },
      {
        connectorImage: "/images/catalog/ssr-series.jpg",
        series: ["SSR"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["19.0 mm"],
        awg: ["26-14"],
        contactsDiameter: ["1.0/1.5/2.0 mm"],
        material: ["stainl.steel"],
        shield: ["No"],
        ul: ["No"],
        links: [{pageUrl: '/products/SSR-Series-Connector', pdfRef: 'C-H-00'}]
      },
      {
        connectorImage: "/images/catalog/st-signal-power-series.jpg",
        series: ["ST Signal", "ST Signal","ST Power","ST Power"],
        locking: ["Speedcon", "M17","Speedcon", "M17"],
        positions: ["8/17", "8/17","4/9", "4/9"],
        voltAmpMax: ["60/3.6","60/3.6","630/14","630/14"],
        cableDiameter: ["10.0 mm", "10.0 mm", "10.0 mm", "10.0 mm"],
        awg: ["28-17", "28-17", "28-14", "28-14"],
        contactsDiameter: ["0.6 mm", "0.6 mm", "0.6/1.0/2.0 mm", "0.6/1.0/2.0 mm"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ST-Signal-Power-Series', pdfRef: 'C-D-00'}]
      },
      {
        connectorImage: "/images/catalog/tu-series.jpg",
        series: ["TU"],
        locking: ["Bayonet"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["18.0 mm"],
        awg: ["26-14"],
        contactsDiameter: ["1.0/1.5/2.0 mm"],
        material: ["Cu-Zn"],
        shield: ["Yes"],
        ul: ["No"],
        links: [{pageUrl: '/products/TU-Series', pdfRef: 'C-A-00'}]
      },
      {
        connectorImage: "/images/catalog/uc-series.jpg",
        series: ["UC"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["18.0 mm"],
        awg: ["26-14"],
        contactsDiameter: ["1.0/1.5/2.0 mm"],
        material: ["Cu-Zn"],
        shield: ["Yes"],
        ul: ["No"],
        links: [{pageUrl: '/products/UC-Series', pdfRef: 'C-G-00'}]
      }

  ];


export let othersQuickData: QuickConnectorData[] = [
    {
        connectorImage: "/images/catalog/connector-inserts-for-rc-rf-solder-tu-uc-ssr-ca.jpg",
        series: ["Connector Inserts for the Series RC, RF-solder, TU, UC, SSR, CA"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["14.5mm", "14.5mm", "14.5mm", "14.5mm"],
        awg: ["28-17", "28-17", "26-14", "26-14"],
        contactsDiameter: ["1.0 mm", "1.0 mm", "1/1.5/2.0", "1/1.5/2.0"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ca-connector', pdfRef: 'C-L-00'}]
      },
      {
        connectorImage: "/images/catalog/connector-inserts-for-hc-st-rf.jpg",
        series: ["Connector Inserts for the Series HC, ST, RF"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["14.5mm", "14.5mm", "14.5mm", "14.5mm"],
        awg: ["28-17", "28-17", "26-14", "26-14"],
        contactsDiameter: ["1.0 mm", "1.0 mm", "1/1.5/2.0", "1/1.5/2.0"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ca-connector', pdfRef: 'C-L-00'}]
      },
      {
        connectorImage: "/images/catalog/crimp-tools.jpg",
        series: ["Crimp Tools"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["14.5mm", "14.5mm", "14.5mm", "14.5mm"],
        awg: ["28-17", "28-17", "26-14", "26-14"],
        contactsDiameter: ["1.0 mm", "1.0 mm", "1/1.5/2.0", "1/1.5/2.0"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ca-connector', pdfRef: 'C-L-00'}]
      },
      {
        connectorImage: "/images/catalog/crimp-contacts.jpg",
        series: ["Crimp Contacts"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["14.5mm", "14.5mm", "14.5mm", "14.5mm"],
        awg: ["28-17", "28-17", "26-14", "26-14"],
        contactsDiameter: ["1.0 mm", "1.0 mm", "1/1.5/2.0", "1/1.5/2.0"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ca-connector', pdfRef: 'C-L-00'}]
      },
      {
        connectorImage: "/images/catalog/assembly-instructions.jpg",
        series: ["Assembly Instructions"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["14.5mm", "14.5mm", "14.5mm", "14.5mm"],
        awg: ["28-17", "28-17", "26-14", "26-14"],
        contactsDiameter: ["1.0 mm", "1.0 mm", "1/1.5/2.0", "1/1.5/2.0"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ca-connector', pdfRef: 'C-L-00'}]
      },
      {
        connectorImage: "/images/catalog/mounting-tools.jpg",
        series: ["Mounting Tools"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["14.5mm", "14.5mm", "14.5mm", "14.5mm"],
        awg: ["28-17", "28-17", "26-14", "26-14"],
        contactsDiameter: ["1.0 mm", "1.0 mm", "1/1.5/2.0", "1/1.5/2.0"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ca-connector', pdfRef: 'C-L-00'}]
      },
      {
        connectorImage: "/images/catalog/layouts-pin-configurations.jpg",
        series: ["Layouts (Pin Configurations)"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["14.5mm", "14.5mm", "14.5mm", "14.5mm"],
        awg: ["28-17", "28-17", "26-14", "26-14"],
        contactsDiameter: ["1.0 mm", "1.0 mm", "1/1.5/2.0", "1/1.5/2.0"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ca-connector', pdfRef: 'C-L-00'}]
      },
      {
        connectorImage: "/images/catalog/caps-and-accessories.jpg",
        series: ["Caps and Accessories"],
        locking: ["M23"],
        positions: ["6-19"],
        voltAmpMax: ["250/20"],
        cableDiameter: ["14.5mm", "14.5mm", "14.5mm", "14.5mm"],
        awg: ["28-17", "28-17", "26-14", "26-14"],
        contactsDiameter: ["1.0 mm", "1.0 mm", "1/1.5/2.0", "1/1.5/2.0"],
        material: ["Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn", "Cu-Zn GD-Zn"],
        shield: ["Yes", "Yes", "Yes", "Yes"],
        ul: ["No", "No", "No", "No"],
        links: [{pageUrl: '/products/ca-connector', pdfRef: 'C-L-00'}]
      }

];