import Aleatorio from "./Componente/Basico/Alarotio"
import Card from "./Componente/Layout/Card";
import './App.css';
import Familia from "./Componente/Basico/Familia"
import FamiliaMembro from "./Componente/Basico/FamiliaMembro"
import ListaAlunos  from "./Componente/Repeticao/ListaAluno"
import TabelaProduto from "./Componente/Repeticao/TabelaProduto"
import ParImapar from "./Componente/Condicional/ParImpar"
import UsuarioInfo from "./Componente/Condicional/UsuarioInfo"
import IndiretaPai from "./Componente/Comunicacao/IndiretaPai";
import Input from "./Componente/Controlado/Input";
import Mega from "./Componente/MegaSena/Mega";
function App() {
  return (
    <div className="App">
      <div className= "Cards">

      <Card titulo="Desafio Aleatorio" color= "#090">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="Familia com Membro" color= "#010">
        <Familia  sobrenome="Ferreira">
        <FamiliaMembro nome="Pedro" ></FamiliaMembro>
          <FamiliaMembro nome="João"  ></FamiliaMembro>
          <FamiliaMembro nome="Maria" ></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo="Repetição" color= "#836FFF">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="Desafio Tabela" color= "#836FFF">
        <TabelaProduto></TabelaProduto>
      </Card>

      
      <Card titulo="Condicional" color= "#00FFFF">
        <ParImapar numero={29}></ParImapar>
        <UsuarioInfo usuario={{nome:"Enderson"}}></UsuarioInfo>
      </Card>

      
      <Card titulo="Cominicação Indireta" color= "#00FFFF">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="Componente Controlado" color= "#00FFFF">
        <Input></Input>
      </Card>

      <Card titulo="Mega Sena" color= "#DAA520">
        <Mega qtde={6}></Mega>
      </Card>
      </div>

    </div>
  );
}

export default App;
