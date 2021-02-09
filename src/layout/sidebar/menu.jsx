import { Home, Box, Folder } from 'react-feather'
export const MENUITEMS = [
    {
        menutitle: "General",
        menucontent: "Dashboards,Widgets",
        Items: [

            { path: `/dashboard`, icon: Home, title: 'Dashboard Home', type: 'link' },

            { path: `/app/ticket-classification`, icon: Folder, type: 'link', active: false, title: 'Ticket Classification' },

            { path: `/app/group-classification`, icon: Folder, type: 'link', active: false, title: 'Group Classification' }, 

            { path: `/app/solution-classification`, icon: Folder, type: 'link', active: false, title: 'Solution Classification' }, 

            { path: `/app/live-ticket-prediction`, icon: Box, type: 'link', active: false, title: 'Live Ticket Prediction' },

            { path: `/app/live-group-prediction`, icon: Box, type: 'link', active: false, title: 'Live Group Prediction' },

            { path: `/app/live-solution-prediction`, icon: Box, type: 'link', active: false, title: 'Live Solution Prediction' },

           
        ]
    },
]