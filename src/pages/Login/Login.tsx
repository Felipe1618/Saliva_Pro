import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        //Logica para validar e armazenar os dados localmente
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return(
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Senha</IonLabel>
                <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} required />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="block" onClick={handleLogin}>Entrar</IonButton>
              <IonButton expand="block" fill="outline">Primeiro Acesso</IonButton>
              <IonButton expand="block" fill="clear">Esqueci Meus Dados</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;