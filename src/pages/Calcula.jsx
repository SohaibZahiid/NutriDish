import React,{useState,useEffect} from 'react'
import '../styles/Calcula.css'
import infocal from '../../public/imgs/info.jpeg'


const Calcula = () => {
    const [edadd, setEdadd] = useState(""); 
    const [peso, setPeso] = useState(""); 
    const [altura, setAltura] = useState(""); 
    const [resultado, setResultado] = useState([]); 
    const [genero, setgGnero] = useState("")
    const [exercicios, setExercicios] = useState(""); 

    const Entrarloclstorage=()=>{
      let sesion = localStorage.getItem("modificarcalculadora")
     if(sesion){
      return JSON.parse(sesion)
     }else{
      return false;
     }
    }
    const [modificarcalculadora, setModificarcalculadora] = useState(Entrarloclstorage)


    useEffect(() => {
      

      localStorage.setItem('modificarcalculadora', JSON.stringify(true));

      const saveresultado = localStorage.getItem('resultado');
      if (saveresultado) setResultado(saveresultado);      
      const savedexercicios = localStorage.getItem('exercicios');
      if (savedexercicios) setExercicios(savedexercicios);
      const savedgenero = localStorage.getItem('genero');
      if (savedgenero) setgGnero(savedgenero);
      const savedValue = localStorage.getItem('edadd');
      if (savedValue) setEdadd(savedValue);
      const savedPeso = localStorage.getItem("peso");
      if (savedPeso)setPeso(savedPeso);
       const savedaltura = localStorage.getItem("altura");
      if (savedaltura) setAltura(savedaltura)
    }, []);
    const handleInputChange = (e) => {
      setEdadd(e.target.value);  
    };
    const handlepesoChange = (e) => {
      
        setPeso(e.target.value);
      };
      const handlalturaChange = (e) => {
      
        setAltura(e.target.value);
      };
 
    const calcularResultado = () => {
      const valorNumerico = parseFloat(edadd);
      const valorpeso = parseFloat(peso);
      const valoraltura = parseFloat(altura);
      const valorexercicio = parseFloat(exercicios);

      if(genero ==="hombre"){
        if(!valorpeso||!valoraltura||!valorNumerico||!valorexercicio){
          alert("Todos los campos son requeridos")
   
        }else{
           let basal = Math.round( 66 + (13.7 * valorpeso) + (5 * valoraltura) - (6.8 * valorNumerico))
        let mantener  = Math.round(basal*valorexercicio)
        let adelgazar = Math.round((basal*valorexercicio)/1.17633517495)
        let subir = Math.round((basal*valorexercicio)*1.15)
        const calculamosHombre ={
          basal:basal,
          mantener:mantener,
          adelgazar:adelgazar,
          subir:subir
         

        }
        localStorage.setItem('genero', genero);
        localStorage.setItem('edadd', valorNumerico);
        localStorage.setItem('peso', valorpeso);
        localStorage.setItem('altura', valoraltura);
        localStorage.setItem('exercicios', valorexercicio);
        setResultado(calculamosHombre);
        setModificarcalculadora(true)
        localStorage.setItem("modificarcalculadora",false)
  
        }
     
     
         
      }else if(genero ==="mujer"){
       let basal =  Math.round(655 + (9.6 * valorpeso) + (1.8 * valoraltura) -(4.7 * valorNumerico))
       let mantener  = Math.round(basal*valorexercicio)
       let adelgazar = Math.round((basal*valorexercicio)/1.17633517495)
       let subir = Math.round((basal*valorexercicio)*1.15)
       const calculamosMujer ={
         basal:basal,
         mantener:mantener,
         adelgazar:adelgazar,
         subir:subir
        

       }
       localStorage.setItem('genero', genero);
       localStorage.setItem('edadd', valorNumerico);
       localStorage.setItem('peso', valorpeso);
       localStorage.setItem('altura', valoraltura);
       localStorage.setItem('exercicios', valorexercicio);
        
        setResultado([calculamosMujer]);
        setModificarcalculadora(true)
      
        
         } else {
           alert("El Genero es Obligatorio");
         }
        }

   const handleSelectChange = (event) => {
    setExercicios(event.target.value);
      };
      const SelectChange=(e)=>{
        setgGnero(e.target.value)
      }
      localStorage.setItem('resultado',resultado);

     
      console.log(resultado)

    return (

      <div className='calculadora'>
<div className='info-cal'>
  <img src={infocal} alt="infocal" />
<p>Estas ecuaciones están tabuladas para valores de peso entre25 y 124.9 kg, 
      statura entre 151 y 200 cm, y edad entre 21 y 70 años.</p>
      </div>



<div className={modificarcalculadora ? "hid":'cla-input'}> 
            <select value={genero} onChange={SelectChange} className='cal-genero'>
        <option value=""> Eligete tu Genero</option>
        <option value="hombre">Masculino</option>
        <option value="mujer">Femenino</option>
       

      </select>
   <input
          type="number"
          value={edadd}
          onChange={handleInputChange}
          placeholder="edad"required
        />
          <input
          type="number"
          value={peso}
          onChange={handlepesoChange}
          placeholder="peso"required
        />

<input
          type="number"
          value={altura}
          onChange={handlalturaChange}
          placeholder="altura" required
        />
       
<div><select value={exercicios} onChange={handleSelectChange} className='cal-genero'>
        <option value="">Selecciona una opción</option>
        <option value="1.2">Poco o ningún ejercicio</option>
        <option value="1.375">1-3 días a la semana</option>
        <option value="1.55">3-5 días a la semana</option>
        <option value="1.725">6-7 días a la semana</option>
        <option value="1.9">dos veces al día, entrenamientos muy duros</option>

      </select> </div>
  <button onClick={calcularResultado} className='button-cal'>Calcular</button>

</div>
         
    <div className={modificarcalculadora?"":'hid'}>
    
<h2 className='cal-resultado'>Calorias</h2>  
<ul className='cal-ul'>
  <li><span>Metabolismo basal: </span> <span className='end-cal'>{resultado.basal}</span></li>
  <li> <span>Mantener el peso: </span><span  className='end-cal'>{resultado.mantener}</span></li>
  <li><span>Calorías para adelgazar: </span><span  className='end-cal'>{resultado.adelgazar}</span></li>
  <li><span>Calorías para subir de peso: </span><span  className='end-cal'>{resultado.subir}</span> </li>
</ul>
<button  className='button-cal' onClick={()=>setModificarcalculadora(false)}>Modificar</button>
      </div>



    


      
 

      </div>
    );
  }


export default Calcula