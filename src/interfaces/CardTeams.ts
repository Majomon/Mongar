export interface CardTeams{
    img: string;
    name: string;
    profession: string;
    networks: listNetworks[];
}

interface listNetworks{
    icon: string;
    name: string;
    url: string;
}