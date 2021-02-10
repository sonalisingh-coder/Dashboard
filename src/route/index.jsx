// dashbaord
import Default from '../components/dashboard/ecommerce'

//Category Prediction
import GroupPrediction from "../components/live-group-prediction/index"

//Solution classification
import SolutionClassification from "../components/solution-classification";

//  Ticket classification
import TicketClassification from "../components/ticket-classification"

//Group classification
import GroupClassification from "../components/group-classification";

//ticket prediction
import TicketPrediction from "../components/live-ticket-prediction"

//solution prediction
import SolutionPrediction from "../components/live-solution-prediction"

//time prediction
//import TimePrediction from "../components/live-time-prediction"

export const routes = [
     
        { path: "/dashboard", Component: Default },

        { path: "/app/ticket-classification", Component: TicketClassification },

        { path: "/app/live-ticket-prediction", Component: TicketPrediction },

        { path: "/app/group-classification", Component: GroupClassification },

        { path: "/app/solution-classification", Component: SolutionClassification },

        { path: "/app/live-group-prediction", Component: GroupPrediction },

        { path: "/app/live-solution-prediction", Component: SolutionPrediction },

     

]