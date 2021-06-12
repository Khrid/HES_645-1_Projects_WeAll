import { useIsLoggedInContext } from "../services/login-context";
import {CvList} from '../components/CvList';
import {OfferList} from '../components/OfferList';

export const Offers = () => {
  const { state } = useIsLoggedInContext();
  const { isEntreprise } = state;  
  return <>{isEntreprise ? <CvList />: <OfferList />}</>
}