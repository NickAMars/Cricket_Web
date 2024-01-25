import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navigation } from '@src/interface/Navigation';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const NAV_ITEMS: Navigation [] = [ 
    {text: "Español", Icon: undefined, Dropdown: false},
    {text: 'Find a Store', Icon: undefined, Dropdown: false},
    {text: 'Coverage', Icon: undefined, Dropdown: false},
    {text: 'Quick Pay', Icon: undefined, Dropdown: false},
    {text: 'Activate', Icon: undefined, Dropdown: false},
    {text: 'Help', Icon: InsertCommentIcon, Dropdown: false},
    {text: 'Sign In', Icon: PersonIcon, Dropdown: KeyboardArrowDownIcon},
    {text: 'Cart(0)', Icon: ShoppingCartIcon, Dropdown: false},
];

export const SUB_NAB_ITEMS: Navigation [] = [
    {text: "Phones", Dropdown: KeyboardArrowDownIcon, size: "17px",
     options: ["Shop Phones", "Deals", "Hotspots", "Accessories"]},
    {text: "Plans", Dropdown: KeyboardArrowDownIcon, size: "17px",
    options: ["Shop Phones", "Bring Your Own Phone"]},
    {text: "Free Trial", Dropdown: undefined, size: "17px"},
    {text: "Pay Bill", Dropdown: KeyboardArrowDownIcon, size: "17px",
    options: ["Shop Phones", "Deals", "Hotspots", "Accessories"]},
    {text: "More", Dropdown: KeyboardArrowDownIcon, size: "17px",
    options: ["Shop Phones", "Deals", "Hotspots", "Accessories"]},
]