import './App.css';
import Bio from './componentes/Bio';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mushoku Tensei</h1>
        <Bio 
        nombre='Rudeus Greyrat'
        frase="It's no good to overestimate me. Victory is something that you grasp by always being modest, you know?"
        bio='Rudeus Greyrat (ルーデウス・グレイラット Rūdeusu Gureiratto) is the main protagonist of Mushoku Tensei. He was an overweight 34-year-old Japanese NEET who is reincarnated into another world after being hit by a truck whilst saving some kids. Realizing he wasted away his previous life, he resolves to live this new one to its fullest and the series revolves around how he impacts his new world all whilst slowly growing out of his reclusive ways. '
        img='rudeus'/>
      
        <Bio
        nombre= 'Eris Greyrat'
        frase="I will become a warrior there. One so strong that I'll put Orsted to shame"
        bio="Eris Greyrat (エリス・グレイラット Erisu Gureiratto), born Eris Boreas Greyrat (エリス・ボレアス・グレイラット Erisu Boreasu Gureiratto), is a noble girl and second cousin of Rudeus. She is a Character with a short temper but has potential in the Sword God Style. During her journey to return home following the Teleport Incident, she grows to love Rudeus."
        img="eris"/>

        <Bio
        nombre='Roxy Migurdia'
        frase='Always give it your best.'
        bio="Roxy Migurdia (ロキシー・ミグルディア) is a talented Migurd mage, and a former magic tutor. Because she can't use telepathy, she leaves her village due to feeling isolated from her peers. Unable to make a stable living as an adventurer, she becomes a travelling tutor and eventually becomes Rudeus' teacher. After the Teleport Incident, Roxy helps Paul to search the world for survivors."
        img='roxy' />

      </div>
    </div>
  );
}

export default App;
