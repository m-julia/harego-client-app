import agent from "../../api/agent";
import { Advertisement } from "../../api/models/advertisement";


export type AdvertisementAction = {
    type: string
    payload: Advertisement[]
}


type DispatchType = (arg: AdvertisementAction) => AdvertisementAction;

