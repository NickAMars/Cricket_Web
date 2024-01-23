import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navigation } from '@src/interface/Navigation';


export const NAV_ITEMS: Navigation [] = [ 
    {text: "Español", Icon: undefined, dropdown: false},
    {text: 'Find a Store', Icon: undefined, dropdown: false},
    {text: 'Coverage', Icon: undefined, dropdown: false},
    {text: 'Quick Pay', Icon: undefined, dropdown: false},
    {text: 'Activate', Icon: undefined, dropdown: false},
    {text: 'Help', Icon: InsertCommentIcon, dropdown: false},
    {text: 'Sign In', Icon: PersonIcon, dropdown: true},
    {text: 'Cart(0)', Icon: ShoppingCartIcon, dropdown: false},
];

export const SUB_NAB_ITEMS: Navigation [] = [
    {text: "Phones", dropdown: false},
    {text: "Plans", dropdown: false},
    {text: "Free Trial", dropdown: false},
    {text: "Pay Bill", dropdown: false},
    {text: "More", dropdown: false},
]