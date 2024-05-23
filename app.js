// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const participantRoutes = require('./routes/participantRoutes');
const courseRoutes = require('./routes/CoursProute');
const courseGRoutes = require('./routes/CoursGroute');
const formationPRout = require('./routes/FormationPRoutes')
const ResourceRoute = require('./routes/RessourceRoute')
const AdminRoute = require('./routes/AdminRoute')
const coursgratuis = require('./routes/CoursGroute')
const coursPayant = require('./routes/CoursProute')
const publication = require('./routes/PublicationRoute')
const instructeur = require('./routes/instructeurRoutes')
const contact = require('./routes/contactroute')
const commentaire = require('./routes/comentaireRoute')
const quiz = require('./routes/quizRoute')
const question = require('./routes/questionRoutes')
const paiement = require('./routes/PaimementRoute')
const authMiddleware = require('./middleware/authMiddleware');
const path = require('path');

const port = process.env.PORT || 3000;  
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Configuration de CORS
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/participant', participantRoutes);
app.use('/coursPayant', coursPayant); 
app.use('/coursgratuis', coursgratuis); 
app.use('/formationP', formationPRout);
app.use('/Ressource', ResourceRoute);
app.use('/Admin', AdminRoute); 
app.use('/publication', publication); 
app.use('/instructeur', instructeur);   
app.use('/contact', contact);  
app.use('/commentaire', commentaire); 
app.use('/quiz', quiz);  
app.use('/question', question);  
app.use('/paiement', paiement);  

const staticFilesPath ='C:/Users/ahlem/OneDrive/Bureau/PFE/finalSprint1/ProjetBackend/upload'; // Chemin vers le dossier contenant les fichiers
app.use('/uploads', express.static(staticFilesPath));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);      
}); 
