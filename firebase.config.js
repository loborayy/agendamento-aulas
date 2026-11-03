// Cole aqui a MESMA configuração do Firebase que você já usa nas outras páginas (Atividades / duoaulas).
// Firebase Console → Configurações do projeto → Seus apps → Configuração do SDK.
const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "COLE_AQUI"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const WHATS_PROFESSORA = ""; // opcional: seu WhatsApp com DDD, só números (ex: 21999999999)

function fmtData(d){
  return new Date(d + 'T00:00:00').toLocaleDateString('pt-BR',{weekday:'long',day:'2-digit',month:'long'});
}
function hojeISO(){
  const t = new Date(); t.setMinutes(t.getMinutes() - t.getTimezoneOffset());
  return t.toISOString().slice(0,10);
}