# 1	Introduction

Lorsque vous êtes dans une situation critique, communiquer et demander de l'aide sont essentiels pour résoudre votre problème. Mais que feriez-vous et comment géreriez-vous un accident si entendre et comprendre les circonstances dans lesquelles vous vous trouvez étaient difficiles? Des statistiques ont prouvé que les personnes souffrant de surdité sont plus aptes à être exposées à des risques en raison des difficultés à identifier et à réagir aux dangers dans l'environnement qui les entoure.
Dans cette optique, l’école HES-SO de Suisse s’est engagée à venir en aide aux malentendants à travers le projet Skills to Share : un site électronique a été mis en place pour qu’ils y aient recours en cas d’accident et puissent communiquer efficacement et faire parvenir leur voix en détresse.
Tout au long du projet, nous avons pu attribuer à chacun des administrateurs et des utilisateurs réguliers des fonctionnalités distinctes et d’autres qu’ils ont en commun. L'administrateur fournit aux utilisateurs des organisations qu’ils peuvent contacter et télécharger des vidéos auxquelles tous auront accès sur la page d’accueil. Quant aux utilisateurs, ils peuvent également rajouter leurs propres fichiers (images ou vidéos) et remplir des informations personnelles qui les concernent dans une sorte de carte de profil qui leur permet de se présenter à la personne offrant de l'aide : ceci en partageant leur nom, prénom, une photo de profil, un numéro de téléphone à contacter en cas d’urgence et leur adresse. Une fonction de synthèse vocale (Speech to Text) est également implémentée à travers laquelle le microphone de l’appareil peut enregistrer la voix de l'interlocuteur sous forme de notes et les sauvegarder pour comprendre ce qui se déroule sur la scène. Une carte sur laquelle on peut localiser l'emplacement des centres d'aide et des endroits qui peuvent lui être utiles est aussi à sa disposition et des vidéos présentes par défaut sur la page d'accueil « welcome page » peuvent être lues sur place dépendamment de la situation (appeler une ambulance, cas de blessure, dossier médical, contacter un ami ou un proche, vol ou accident, etc.). L'application a été transformée en une Progressive Web App (PWA) qui peut également être téléchargée sur téléphones portables et un aperçu est disponible sur la page comme un sorte de tutoriel.
Nous avons utilisé le MERN Stack : il nous a permis de construire facilement une architecture à 3 niveaux (Frontend, Backend, base de données) entièrement en JavaScript et JSON. Le Frontend sera implémenté à l’aide de REACT qui possède toutes les fonctionnalités attendues d'un Framework Web moderne : une excellente prise en charge des formulaires et de la gestion des erreurs. Le server-side Express sera exécuté à l’intérieur d’un serveur Node.js et la base de données en MongoDB.
Nous avons postulé à Skills to Share pour la cause humanitaire qui émane de ce projet : de cette façon, nous espérons apporter un changement positif dans le monde en parlant le langage que nous comprenons tous, qui est celui de la bonté.

# 2	Implementation
## 2.1	Redux
L'architecture Modèle/Vue/Contrôleur (MVC) offre un cadre pour structurer une application . C’est une manière d'organiser l’interface graphique d'un programme. On distingue le modèle, la vue et le contrôleur ayant chacun un rôle distinct à jouer dans le flux des informations entre les compartiments.
Le modèle représente nos données auxquelles on peut accéder et qu’on peut mettre à jour : il offre des méthodes permettant leur suppression, leur changement de valeur, ou leur récupération de la base de données. La vue représente l’interface graphique avec laquelle un utilisateur est en contact et a pour tâche d’afficher ce qui est récupéré auprès du modèle, ainsi que de recevoir toutes les actions de l'utilisateur (clics de souris, sélection d’une entrée, clics de boutons, etc.) et de les envoyer au contrôleur. Ce dernier sert de liaison entre les deux entités citées précédemment et est responsable de la gestion des évènements et de la synchronisation. Si une action nécessite un changement dans la base de données, le contrôleur demande la modification du modèle et ensuite avertit la vue qu’il a été changé pour que celle-ci se mette à jour. Certains événements de l'utilisateur ne concernent pas les données mais la vue. Dans ce cas, le contrôleur demande à la vue de se modifier.
En ReactJS, on a eu recours à l’architecture Redux car la structure MVC est basée sur une communication bidirectionnelle qui s’avère difficile pour déboguer et comprendre les changements d’entités provoquant un effet cascade dans la base de code. Contrairement à l’architecture de Flux (aussi utilisée en général en React), Redux omit la complexité inutile : on n’a pas le concept de dispatcher et on dispose d’un unique store (qui gère l'état de l'application à travers la fonction dispatch(action)) au lieu de plusieurs, où les actions (objets purs créés pour stocker les informations relatives à l'événement d'un utilisateur : incluent le type d'action, l'heure de l'événement et son emplacement ainsi que ses coordonnées et le state visé) sont reçues et gérées directement.
Des notions élémentaires utilisées en Redux sont le view provider qui représente le Framework (dans notre cas est React), le middleware fournissant un moyen d'interagir avec les actions envoyées au store puis au reducer (crée une copie de l’état d’origine et renvoie son nouvel état) par la création de requêtes asynchrones  (asynchronous requests) ou la distribution de nouvelles actions(dispatch).

## 2.2	Progressive Web App (PWA)
Les avancées récentes du navigateur et la disponibilité des employés de service et des API Cache et Push ont permis aux développeurs Web de permettre aux utilisateurs d'installer des applications Web sur leur écran d'accueil, de recevoir des notifications push et même de travailler en mode hors-connexion. Nous avons pour cette raison pu transformer notre site en une Progressive Web App qui utilise les dernières technologies pour combiner les meilleures applications Web et mobiles. Skills To Share se comporte de cette façon comme une sorte d’application sur téléphone portable construite à l'aide de technologies Web. Cette technologie a d'ailleurs été mise en avant par Google.
 ![image](https://user-images.githubusercontent.com/88712232/148388995-bc0face1-0e5d-4ea1-8fe5-ae7805025c61.png)
![image](https://user-images.githubusercontent.com/88712232/148389048-cb4f5cde-fa39-4ee8-b4b3-0ddc35182e1d.png)

# 3	Étapes à suivre
1) Rentrer à l'intérieur du folder intitullé "backend" puis taper la commande **node server** pour déclencher le serveur localement sur le port 5000
2) Dans le folder par défaut "SkillsToShare", taper la commande **yarn start**  pour faire marcher le frontend sur le port 3000

# 4	Conclusion
Finalement, nous avons construit un site adaptatif et de plus téléchargeable sur n'importe quel appareil électronique. Il permet à chacun de s'inscrire en tant qu'administrateur ou d'utilisateur régulier ayant des options différentes qui leur sont disponibles. Les tâches que l’on avait à préparer ont été réalisées dans le temps limité qui nous a été donné : le squelette général du site est solide mais nous pouvons toujours le perfectionner en rajoutant plus d’outils et de librairies.
Citons à titre d'exemple la notion de carte qui permet aux utilisateurs de placer des points de repères relatifs à des centre d'aide aux malentendants, hôpitaux ou autres emplacements. Cette dernière n'a pas été introduite en classe et nous avons commencé par la développer de côté mais ne l'avons pas achevée pour prioriser d'autres éléments plus essentiels durant l'implémentation.
Pour conclure, Skills To Share a été pour nous une manière de consolider nos connaissances en terme d’analyse d’un projet qui nous a été délivré, et d'appliquer le matériel qui nous a été transmis dans le cours de « Programmation pour le Web », tout en travaillant pour une cause humanitaire.
