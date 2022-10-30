import { useState } from "react";
import ImcCalculatorService from "../domain/services";

export default function ImcTable() {
    const [ lista, setLista ] = useState([]);


    function listarTabela() {    
        const svc = new ImcCalculatorService();
        const res = svc.getTable((item) => {            
            setLista(item);
        });
        return res;
    }


    listarTabela();

    return (<table>
        { Object.values(lista).map((resultImc, index) => <tr key={index}><td>{
            Object.keys(lista)[index]
        }</td><td>{resultImc}</td></tr>) }
    </table>);
}