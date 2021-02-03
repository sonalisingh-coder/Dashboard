import { Home, Box, Folder } from 'react-feather'
export const MENUITEMS = [
    {
        menutitle: "General",
        menucontent: "Dashboards,Widgets",
        Items: [

            { path: `/dashboard`, icon: Home, title: 'Dashboard Home', type: 'link' },

            { path: `/app/ticket-classification`, icon: Folder, type: 'link', active: false, title: 'Ticket Classification' },

            { path: `/app/live-ticket-prediction`, icon: Box, type: 'link', active: false, title: 'Live Ticket Prediction' },
        ]
    },
]