export interface Product {
    name: string;
    title: string;
    description: string;
    mainImage: string;
    pdf: string;
    url: string;
}

export let products:Product[] = [
    {
        name:"TU Series Connectors",
        title: "Shielded Connectors in Bayonet Style",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage:"/standin/dum.png",
        pdf:"/pdf/crimp-tools.pdf",
        url:"/products/?id=0"
    }, 
    {
        name:"CA Series Connectors",
        title: "Shielded Connectors M23",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage:"/standin/dum.png",
        pdf:"/pdf/crimp-tools.pdf",
        url:"/products/?id=1"
    }, 
    {
        name:"RC Series Connectors",
        title: "Unshielded Connectors M23",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        mainImage:"/standin/dum.png",
        pdf:"/pdf/crimp-tools.pdf",
        url:"/products/?id=2"
    }, 
]