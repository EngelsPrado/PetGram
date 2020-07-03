import {withPhotos} from '../hoc/withPhotos'
import {ListOfPhotoCardsComponent} from '../components/ListOfPhotoCards/index'


                               //Recibe un componente y regresa otro
export const ListOfPhotoCards=withPhotos(ListOfPhotoCardsComponent);