import './App.css';
import Nav from "./Components/Nav.jsx";
import Search from "./Components/Search.jsx";
import Card from "./Components/Cards.jsx"

// J'importe toutes mes images
import AustralieImg from "./assets/Australie-unContinentUnique.jpg"
import IslandeImg from "./assets/Islande - volcans et fjords.jpg"
import IndonesieImg from "./assets/L’Indonésie - richesse culturelle et humaine.jpg"
import IranImg from "./assets/La Mosquée Rose à Shiraz en Iran.webp"
import ColobieImg from "./assets/La ville de Carthagène en Colombie.webp"
import CanadaImg from "./assets/Le Canada - place à la nature.jpg"
import KenyaImg from "./assets/Le Kenya - des parcs à couper le souffle.jpg"
import LaosImg from "./assets/Le Laos - dépaysant.jpg"
import MayaImg from "./assets/Le Mexique - des Mayas aux Aztèques.jpg"
import PerouImg from "./assets/Le Pérou - à la rencontre des Incas.jpg"
import JapanImg from "./assets/Le temple de Byodo-in à Uji (Kyoto) au Japon.webp"
import StatesImg from "./assets/Les Etats-Unis - terre du gigantisme.jpg"
import PhilippinesImg from "./assets/Les Philippines - plages exotiques et rizières.jpg"
import MyanmarImg from "./assets/Les temples de Bagan au Myanmar.webp"
import MozambiqueImg from "./assets/Mozambique - Kisawa Sanctuary.jpg"
import BelizeImg from "./assets/Belize - Copal Tree Lodge.jpg"
import HawaiImg from "./assets/Hawaï - Honolulu.webp"
import GroenlandImg from "./assets/Groenland -  icefjord-center.jpg"
import EspagneImg from "./assets/Espagne - Malaga.jpg"
import NewZelandImg from "./assets/nouvelle-zelande - fjord de Milford.webp"
import VanuatuImg from "./assets/vanuatu - Blue Hole.webp"
import NepalImg from "./assets/nepal - vue de l’Everest depuis Gokyo Ri.webp"
import TurquieImg from "./assets/turquie - mosquée bleue.webp"
import MongolieImg from "./assets/Mongolie - Oulan Bator.jpg"
import MaldivesImg from "./assets/Maldives - Centre de villégiature.jpg"



function App() {

      // Création d'un tableau qui va reprendre toutes les données dont j'ai besoin
    let tab = [
      {titre: "Australie", img: AustralieImg, stitre: "Un Continent Unique"},
      {titre: "Islande", img: IslandeImg, stitre: "Volcans et fjords"},
      {titre: "Indonésie", img: IndonesieImg, stitre: "Richesse culturelle"},
      {titre: "Iran", img: IranImg, stitre: "La Mosquée Rose"},
      {titre: "Colombie", img: ColobieImg, stitre: "La Ville de Carthagène"},
      {titre: "Canada", img: CanadaImg, stitre: "Place à la Nature"},
      {titre: "Kenya", img: KenyaImg, stitre: "Parcs à couper le souffle"},
      {titre: "Laos", img: LaosImg, stitre: "Dépaysant"},
      {titre: "Mexique", img: MayaImg, stitre: "Des Mayas aux Aztèques"},
      {titre: "Pérou", img: PerouImg, stitre: "A la rencontre des Incas"},
      {titre: "Japan", img: JapanImg, stitre: "Temple de Byodo-in"},
      {titre: "USA", img: StatesImg, stitre: "Terre du gigantisme"},
      {titre: "Philippines", img: PhilippinesImg, stitre: "Plages exotiques et rizières.jpg"},
      {titre: "Myanmar", img: MyanmarImg, stitre: "Temples de Bagan"},
      {titre: "Mozambique", img: MozambiqueImg, stitre: "Kisawa Sanctuary"},
      {titre: "Belize", img: BelizeImg, stitre: "Copal Tree Lodge"},
      {titre: "Hawaï", img: HawaiImg, stitre: "Honolulu"},
      {titre: "Groenland", img: GroenlandImg, stitre: "IceFjord Center"},
      {titre: "Espagne", img: EspagneImg, stitre: "Malaga"},
      {titre: "Nouvelle Zélande", img: NewZelandImg, stitre: "Fjord de Milford"},
      {titre: "Vanuatu", img: VanuatuImg, stitre: "Blue Hole"},
      {titre: "Nepal", img: NepalImg, stitre: "Everest depuis Gokyo Ri"},
      {titre: "Turquie", img: TurquieImg, stitre: "Mosquée Bleue"},
      {titre: "Mongolie", img: MongolieImg, stitre: "Oulan Bator"},
      {titre: "Maldives", img: MaldivesImg, stitre: "Centre de Villégiature"}
    ]

  return (
    <div className="App">
      <Nav/>
      <Search/>

      <div className="displayCards">
        <h1>Places You Need to Visit Before You Die</h1>
        <div className="allCards">
        
          {/* Mon components va recevoir les propriété "title", "src", sousTitre", qui vont récupérer les elements de mon tableau ci-dessus, l'index déterminra quel élements doit être ciblé */}
        <Card title={tab[0].titre} src={tab[0].img} sousTitre={tab[0].stitre}/>
        <Card title={tab[1].titre} src={tab[1].img} sousTitre={tab[1].stitre}/>
        <Card title={tab[2].titre} src={tab[2].img} sousTitre={tab[2].stitre}/>
        <Card title={tab[3].titre} src={tab[3].img} sousTitre={tab[3].stitre}/>
        <Card title={tab[4].titre} src={tab[4].img} sousTitre={tab[4].stitre}/>
        <Card title={tab[5].titre} src={tab[5].img} sousTitre={tab[5].stitre}/>

        <Card title={tab[6].titre} src={tab[6].img} sousTitre={tab[6].stitre}/>
        <Card title={tab[7].titre} src={tab[7].img} sousTitre={tab[7].stitre}/>
        <Card title={tab[8].titre} src={tab[8].img} sousTitre={tab[8].stitre}/>
        <Card title={tab[9].titre} src={tab[9].img} sousTitre={tab[9].stitre}/>
        <Card title={tab[10].titre} src={tab[10].img} sousTitre={tab[10].stitre}/>

        <Card title={tab[11].titre} src={tab[11].img} sousTitre={tab[11].stitre}/>
        <Card title={tab[12].titre} src={tab[12].img} sousTitre={tab[12].stitre}/>
        <Card title={tab[13].titre} src={tab[13].img} sousTitre={tab[13].stitre}/>
        <Card title={tab[14].titre} src={tab[14].img} sousTitre={tab[14].stitre}/>
        <Card title={tab[15].titre} src={tab[15].img} sousTitre={tab[15].stitre}/>

        <Card title={tab[16].titre} src={tab[16].img} sousTitre={tab[16].stitre}/>
        <Card title={tab[17].titre} src={tab[17].img} sousTitre={tab[17].stitre}/>
        <Card title={tab[18].titre} src={tab[18].img} sousTitre={tab[18].stitre}/>
        <Card title={tab[19].titre} src={tab[19].img} sousTitre={tab[19].stitre}/>
        <Card title={tab[20].titre} src={tab[20].img} sousTitre={tab[20].stitre}/>

        <Card title={tab[21].titre} src={tab[21].img} sousTitre={tab[21].stitre}/>
        <Card title={tab[22].titre} src={tab[22].img} sousTitre={tab[22].stitre}/>
        <Card title={tab[23].titre} src={tab[23].img} sousTitre={tab[23].stitre}/>
        <Card title={tab[24].titre} src={tab[24].img} sousTitre={tab[24].stitre}/>
        </div>
      </div>
    </div>
  );
}

export default App;
