import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { scanOutline } from 'ionicons/icons';
import ScannerCodes from '../components/ScannerCodes';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
             Scann Codes 
            <IonIcon icon={scanOutline} color='primary'/>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Scann Codes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ScannerCodes />
      </IonContent>
    </IonPage>
  );
};

export default Home;
