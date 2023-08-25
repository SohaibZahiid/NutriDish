import React, { useState, useEffect } from 'react';
import '../styles/Calcula.css';
import infocal from '/imgs/info.jpeg';

const Calcula = () => {
    const initialState = {
        edad: "",
        peso: "",
        altura: "",
        genero: "",
        ejercicios: "",
        resultado: {}
    };

    const [data, setData] = useState(initialState);
    const [modificarCalculadora, setModificarCalculadora] = useState(false);

    useEffect(() => {
        const savedData = localStorage.getItem('data');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
        setModificarCalculadora(localStorage.getItem("modificarcalculadora") === "true");
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleGenderChange = (value) => {
        setData(prevData => ({ ...prevData, genero: value }));
    };

    const calcularResultado = () => {
        const valorEdad = parseFloat(data.edad);
        const valorPeso = parseFloat(data.peso);
        const valorAltura = parseFloat(data.altura);
        const valorEjercicio = parseFloat(data.ejercicios);

        if (!valorPeso || !valorAltura || !valorEdad || !valorEjercicio) {
            alert("Todos los campos son requeridos");
            return;
        }

        let basal, mantener, adelgazar, subir;

        if (data.genero === "hombre") {
            basal = Math.round(66 + (13.7 * valorPeso) + (5 * valorAltura) - (6.8 * valorEdad));
        } else if (data.genero === "mujer") {
            basal = Math.round(655 + (9.6 * valorPeso) + (1.8 * valorAltura) - (4.7 * valorEdad));
        } else {
            alert("El Genero es Obligatorio");
            return;
        }

        mantener = Math.round(basal * valorEjercicio);
        adelgazar = Math.round((basal * valorEjercicio) / 1.17633517495);
        subir = Math.round((basal * valorEjercicio) * 1.15);

        const resultadoCalculado = {
            basal: basal,
            mantener: mantener,
            adelgazar: adelgazar,
            subir: subir
        };

        setData(prevData => ({ ...prevData, resultado: resultadoCalculado }));

        // Guardar datos en local storage
        localStorage.setItem('data', JSON.stringify({ ...data, resultado: resultadoCalculado }));
        localStorage.setItem("modificarcalculadora", "true");
        setModificarCalculadora(true);
    }

    return (
        <>
            {/* <div>
                <div className="planner-container container">
                    <div className="container-explanation">
                        <h2>Calculadora de Gasto Calórico</h2>
                        <p>
                            Esta herramienta te permite estimar la cantidad de calorías que tu cuerpo necesita en un día, basándose en factores como tu edad, peso, altura, género y nivel de actividad física.
                        </p>
                        <p>
                            La calculadora te proporciona información sobre tu metabolismo basal, las calorías necesarias para mantener el peso, para adelgazar y para ganar peso.
                        </p>
                        <p>
                            Usa esta información como referencia para tus objetivos nutricionales. Siempre es recomendable consultar con un profesional para recibir asesoramiento personalizado.
                        </p>
                    </div>
                </div>
            </div> */}

            <div className='calculadora' >
                <div className={modificarCalculadora ? "hid" : 'cla-input'}>
                    <div className="gender-switch">
                        <button className={data.genero === "hombre" ? "active" : ""} onClick={() => handleGenderChange("hombre")}>Masculino</button>
                        <button className={data.genero === "mujer" ? "active" : ""} onClick={() => handleGenderChange("mujer")}>Femenino</button>
                    </div>
                    <input className="custom-input" name="edad" value={data.edad} onChange={handleChange} placeholder="Edad" required />
                    <input className="custom-input" name="peso" value={data.peso} onChange={handleChange} placeholder="Peso" required />
                    <input className="custom-input" name="altura" value={data.altura} onChange={handleChange} placeholder="Altura" required />
                    <div>
                        <select name="ejercicios" value={data.ejercicios} onChange={handleChange} className='cal-genero'>
                            <option value="">Actividad fisica</option>
                            <option value="1.2">Poco o ningún ejercicio</option>
                            <option value="1.375">1-3 días a la semana</option>
                            <option value="1.55">3-5 días a la semana</option>
                            <option value="1.725">6-7 días a la semana</option>
                            <option value="1.9">Dos veces al día, entrenamientos muy duros</option>
                        </select>
                    </div>
                    <button onClick={calcularResultado} className='button-cal'>Calcular</button>
                </div>

                <div className={modificarCalculadora ? "" : 'hid'}>
                    <h2 className='cal-resultado'>Calorías</h2>
                    <ul className='cal-ul'>
                        <li><span>Metabolismo basal:</span> <span className='end-cal'>{data.resultado.basal}</span></li>
                        <li><span>Mantener el peso:</span> <span className='end-cal'>{data.resultado.mantener}</span></li>
                        <li><span>Calorías para adelgazar:</span> <span className='end-cal'>{data.resultado.adelgazar}</span></li>
                        <li><span>Calorías para subir de peso:</span> <span className='end-cal'>{data.resultado.subir}</span></li>
                    </ul>
                    <button className='button-cal' onClick={() => setModificarCalculadora(false)}>Modificar</button>
                </div>
            </div >
        </>
    );
}

export default Calcula;
