// dashbaord
import Default from '../components/dashboard/ecommerce'





//  Ticket classification
import TicketClassification from "../components/ticket-classification"



//ticket prediction
import TicketPrediction from "../components/live-ticket-prediction"

export const routes = [
     
        { path: "/dashboard", Component: Default },

        { path: "/app/ticket-classification", Component: TicketClassification },

        { path: "/app/live-ticket-prediction", Component: TicketPrediction },


]