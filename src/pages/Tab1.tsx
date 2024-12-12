import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, {useState, useEffect} from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {

  const [dataset, setDataSet] = useState([]);

  const dataURL = "https://dev-cs55-fall2024-williamtaylor.pantheonsite.io/wp-json/twentytwentyone-child/v1/wk16";

  useEffect( () => {
    fetch(dataURL)
    .then(response => response.json())
    .then(data => setDataSet(data))
  },[])

  console.log(dataset);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      {dataset.map((item, index) => (
        <IonItem key={index}>
          <IonLabel>
            <h4>{item.post_title}</h4>
            <p>Written by: {item.user_nicename} On: {item.post_date} <a href={item.guid} rel="noreferrer">Link</a></p>
            
          </IonLabel>
        </IonItem>
      ))}
      
    </IonPage>
  );
  
 return (
<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts Info</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
 );
};

export default Tab1;
