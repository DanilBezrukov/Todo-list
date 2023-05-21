import { useLocalStorage } from "../../../hooks/useLocalStorage"
import "./Mapping.css"
function Mapping( {mapping} ) {
    const [mappingFlag, setMappingFlag] = useLocalStorage("mappingFlag", true)
    return (
        <div className="mapping">
            <span className="mapping__title">Вид: </span>

            <button 
            className={mappingFlag ? "mapping__btn mapping__btn_activ" : "mapping__btn"}
            onClick={ () => setMappingFlag(true) }
            >Список</button>

            <button 
            className={!mappingFlag ? "mapping__btn mapping__btn_activ" : "mapping__btn"}
            onClick={ () => setMappingFlag(false) }
            >Плитка</button>

        </div>
    )
}
export { Mapping }