import Flag from './components/Flag'
import Map from './components/Map'

function App() {
  let castles = ['umma', 'mardin', 'bargusia', 'umme_rock', 'los_gemelos', 'lagash', 'enki', 'alejandria', 'utu', 'town_watch', 'ilerda', 'abela', 'kish', 'abismo_helmm', 'vacceos', 'outlaw_camp', 'bastetania', 'andosia'];
  return(
    <div>
      <Map/>
      {castles.map(castle => (
        <Flag location={castle}/>
      ))}
    </div>
    );
}

export default App;
