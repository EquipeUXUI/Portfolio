document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const nav=document.querySelector('.nav .wrap');
const links=document.querySelector('.links');
if(nav&&links){
  let button=document.querySelector('.mobile-menu');
  if(!button){
    button=document.createElement('button');
    button.className='mobile-menu';
    button.type='button';
    button.textContent='Menu';
    button.setAttribute('aria-label','Ouvrir le menu');
    nav.insertBefore(button,links);
  }
  button.setAttribute('aria-expanded','false');
  const closeMenu=()=>{
    links.classList.remove('open');
    button.textContent='Menu';
    button.setAttribute('aria-expanded','false');
  };
  button.addEventListener('click',()=>{
    const isOpen=links.classList.toggle('open');
    button.textContent=isOpen?'Fermer':'Menu';
    button.setAttribute('aria-expanded',String(isOpen));
  });
  const current=location.pathname.split('/').pop()||'index.html';
  links.querySelectorAll('a').forEach(link=>{
    const target=(link.getAttribute('href')||'').split('#')[0];
    if(target===current) link.setAttribute('aria-current','page');
    link.addEventListener('click',closeMenu);
  });
  document.addEventListener('click',event=>{
    if(!nav.contains(event.target)) closeMenu();
  });
}

const portfolioProjects={
  industrie:{kicker:'Systèmes complexes / industrie',title:'Concevoir des interfaces pour des usages à fortes contraintes',intro:'Comprendre le système, les utilisateurs et les contraintes techniques avant de dessiner l’écran.',image:'assets/projects/industrie.webp',alt:'Montage anonymisé de recherches, composants et interfaces industrielles',facts:[['Rôle','UX/UI Design'],['Contexte','Industrie'],['Approche','Terrain et métier'],['Collaboration','Équipes techniques']],sections:[['Le problème','Les utilisateurs doivent superviser, décider et agir à partir de nombreuses informations, parfois dans des conditions de lecture et d’intervention exigeantes.'],['Mon intervention','Observation des usages, cadrage des besoins, structuration de l’information, modélisation des parcours, conception d’interfaces et échanges continus avec les automaticiens et développeurs.'],['La contrainte comme matière de conception','Les possibilités du framework, les données disponibles, le matériel, la maintenance et les délais font partie du problème à résoudre. L’objectif n’est pas de produire une maquette idéale mais une solution utile et réalisable.'],['Confidentialité','Les écrans sont volontairement réduits et recomposés. La présentation montre la démarche sans exposer les clients, les équipements ni les procédés.']]},
  'design-system':{kicker:'Design System industriel',title:'Construire un langage commun entre design et développement',intro:'Un socle cohérent pour accélérer la conception, fiabiliser l’intégration et faire évoluer les produits.',image:'assets/projects/design-system.webp',alt:'Composants, couleurs et principes du Design System',facts:[['Périmètre','Interfaces métier'],['Fondations','Couleurs et typographie'],['Système','Tokens et composants'],['Transmission','Documentation']],sections:[['L’enjeu','Des projets et technologies différents doivent conserver une logique commune sans empêcher l’adaptation aux contraintes de chaque client.'],['Le socle','Architecture de thèmes Standard et Client, modes clair et sombre, couleurs primitives et sémantiques, rôles typographiques, grille de 4 px, composants, états et variantes.'],['Au-delà de la bibliothèque','Le Design System sert aussi de langage partagé pour cadrer les choix, faciliter la transmission, documenter les règles et capitaliser sur les retours des projets.'],['Ma contribution','Structuration des fondations, conception et évolution des composants, documentation, échanges avec les équipes techniques et accompagnement de leur utilisation.']]},
  gallia:{kicker:'Service numérique / Gallia',title:'Simplifier les démarches quotidiennes des familles',intro:'Concevoir un portail famille clair pour des utilisateurs aux profils numériques variés.',image:'assets/projects/gallia.webp',alt:'Montage des écrans du portail famille Gallia',facts:[['Produit','Portail famille'],['Public','Familles'],['Périmètre','Expérience portail'],['Collaboration','Équipe projet']],sections:[['Le contexte','Le produit associait un espace destiné aux collectivités et un portail destiné aux familles. Je prenais en charge le portail famille tandis qu’un autre designer travaillait sur la partie mairie, au même niveau de responsabilité.'],['Le problème','Rendre des démarches parfois administratives compréhensibles sans surcharger l’interface, tout en maintenant une cohérence entre les deux espaces.'],['Mon intervention','Compréhension des besoins, organisation des contenus, arborescence, parcours, wireframes, interfaces et adaptation aux différents supports.'],['Ce que le projet démontre','Ma capacité à concevoir un service grand public, collaborer sur un produit partagé et préserver la clarté malgré la complexité métier.']]},
  'lumys-photo':{kicker:'Parcours d’achat / Lumys Photo',title:'Accompagner naturellement les familles jusqu’à l’achat',intro:'Valoriser les photographies tout en rendant les produits, formats et formules immédiatement compréhensibles.',image:'assets/projects/lumys-photo.webp',alt:'Montage des écrans du parcours d’achat Lumys Photo',facts:[['Produit','Vente en ligne'],['Public','Familles'],['Périmètre','Sessions clients'],['Objectif','Simplicité et conversion']],sections:[['Le problème','L’achat combine une dimension émotionnelle et plusieurs choix commerciaux. Les hésitations peuvent rapidement interrompre le parcours.'],['Mon intervention','Travail sur l’accès à la session, la découverte des photographies, la compréhension des offres, les états de sélection, la réassurance et la progression vers l’achat.'],['Le parti pris','Soutenir la conversion par la clarté et la confiance, sans recourir à une pression artificielle.'],['Ce que le projet démontre','Ma capacité à articuler expérience utilisateur, mise en valeur du contenu et objectif commercial.']]},
  'lumys-scolaire':{kicker:'Produit métier / Lumys Scolaire',title:'Outiller les professionnels de la photographie scolaire',intro:'Organiser un produit riche en fonctions autour des tâches et du quotidien de ses utilisateurs.',image:'assets/projects/lumys-scolaire.webp',alt:'Montage des écrans de Lumys Scolaire',facts:[['Produit','Plateforme métier'],['Public','Professionnels'],['Contribution','UX/UI Design'],['Support','Desktop et web']],sections:[['Le contexte','Lumys Scolaire accompagne l’organisation des activités liées à la photographie scolaire et concentre de nombreuses informations et actions.'],['L’enjeu','Rendre un environnement fonctionnel dense plus lisible, prévisible et facile à prendre en main.'],['La démarche','Structuration des fonctionnalités, hiérarchisation des informations et conception d’écrans cohérents avec les habitudes et contraintes des utilisateurs.']]},
  fontself:{kicker:'Projet Gobelins / Fontself',title:'Explorer un produit, son marché et ses usages',intro:'Une étude menée dans le cadre de ma formation aux Gobelins.',image:'assets/projects/fontself.webp',alt:'Recherche et conception autour du projet Fontself',facts:[['Cadre','Formation Gobelins'],['Approche','Recherche'],['Livrables','Analyse et stratégie'],['Sujet','Produit créatif']],sections:[['L’objectif','Comprendre l’écosystème du produit, ses utilisateurs et ses opportunités d’évolution avant de formuler des pistes de conception.'],['Le travail réalisé','Recherche, benchmark, analyse des usages, formalisation des enseignements et construction de recommandations.'],['Ce que le projet apporte','Une illustration de ma capacité à explorer un univers créatif et à structurer une réflexion produit au-delà de la seule interface.']]},
  sardines:{kicker:'Mémoire de recherche',title:'Regarder un produit simple comme un système complexe',intro:'La boîte à sardines comme point de départ d’une réflexion sur les usages, la fabrication et le cycle de vie.',image:'assets/projects/boite-sardines.webp',alt:'Synthèse visuelle du mémoire sur la boîte à sardines',facts:[['Nature','Mémoire'],['Sujet','Produit et système'],['Échelle','Cycle de vie'],['Approche','Recherche systémique']],sections:[['Le point de départ','Un objet apparemment simple résulte d’un ensemble de décisions liées à la matière, la fabrication, la conservation, la distribution et l’usage.'],['La démarche','Cartographier les acteurs, les contraintes et les interactions pour dépasser une lecture limitée à la forme finale du produit.'],['Ce que cette recherche nourrit','Une manière de concevoir qui ne sépare pas l’interface du système, des équipes et des conditions réelles dans lesquels elle s’inscrit.']]}
};

const projectOrder=Object.keys(portfolioProjects);
const projectDialog=document.querySelector('[data-project-dialog]');
let activeProject='industrie';

function renderProject(slug){
  const project=portfolioProjects[slug];
  if(!project||!projectDialog)return;
  activeProject=slug;
  projectDialog.querySelector('[data-dialog-kicker]').textContent=project.kicker;
  projectDialog.querySelector('[data-dialog-title]').textContent=project.title;
  projectDialog.querySelector('[data-dialog-intro]').textContent=project.intro;
  const image=projectDialog.querySelector('[data-dialog-image]');
  image.src=project.image; image.alt=project.alt;
  projectDialog.querySelector('[data-dialog-count]').textContent=`${String(projectOrder.indexOf(slug)+1).padStart(2,'0')} / ${String(projectOrder.length).padStart(2,'0')}`;
  projectDialog.querySelector('[data-dialog-facts]').innerHTML=project.facts.map(([label,value])=>`<div><small>${label}</small><strong>${value}</strong></div>`).join('');
  projectDialog.querySelector('[data-dialog-story]').innerHTML=project.sections.map(([title,text])=>`<section><h3>${title}</h3><p>${text}</p></section>`).join('');
  projectDialog.querySelector('.dialog-content').scrollTop=0;
}

function openProject(slug,updateHash=true){
  if(!portfolioProjects[slug]||!projectDialog)return;
  renderProject(slug);
  if(!projectDialog.open)projectDialog.showModal();
  document.body.classList.add('modal-open');
  if(updateHash)history.pushState({project:slug},'',`#projet-${slug}`);
}

function closeProject(cleanHash=true){
  if(!projectDialog||!projectDialog.open)return;
  projectDialog.close();
  document.body.classList.remove('modal-open');
  if(cleanHash&&location.hash.startsWith('#projet-'))history.replaceState({},'',location.pathname+location.search);
}

document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project)));
projectDialog?.querySelector('[data-dialog-close]')?.addEventListener('click',()=>closeProject());
projectDialog?.addEventListener('click',event=>{if(event.target===projectDialog)closeProject();});
projectDialog?.addEventListener('cancel',event=>{event.preventDefault();closeProject();});

function adjacentProject(direction){
  const index=projectOrder.indexOf(activeProject);
  renderProject(projectOrder[(index+direction+projectOrder.length)%projectOrder.length]);
  history.replaceState({project:activeProject},'',`#projet-${activeProject}`);
}
projectDialog?.querySelector('[data-project-prev]')?.addEventListener('click',()=>adjacentProject(-1));
projectDialog?.querySelector('[data-project-next]')?.addEventListener('click',()=>adjacentProject(1));

const projectRail=document.querySelector('[data-project-rail]');
document.querySelector('[data-rail-prev]')?.addEventListener('click',()=>projectRail?.scrollBy({left:-380,behavior:'smooth'}));
document.querySelector('[data-rail-next]')?.addEventListener('click',()=>projectRail?.scrollBy({left:380,behavior:'smooth'}));

window.addEventListener('popstate',()=>{
  const slug=location.hash.replace('#projet-','');
  if(location.hash.startsWith('#projet-')&&portfolioProjects[slug])openProject(slug,false);else closeProject(false);
});
const initialSlug=location.hash.replace('#projet-','');
if(location.hash.startsWith('#projet-')&&portfolioProjects[initialSlug])openProject(initialSlug,false);
