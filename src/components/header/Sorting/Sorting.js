import { useLocalStorage } from "../../../hooks/useLocalStorage"
import "./Sorting.css"
function Sorting() {
    const [sortDate, setSortDate] = useLocalStorage("sortDate", "new")
    const [sortCompleted, setSortCompleted] = useLocalStorage("sortCompleted", "NotFulfilled")
    return (
        <div className="sorting" >
            <div className="sorting__container">
                <div>По дате: </div>
                <select 
                className="sorting__select" 
                name="date" 
                value={sortDate}
                onChange={ event=>{ setSortDate(event.target.value) } }
                >
                    <option value="new">Сначала новые</option>
                    <option value="old">Сначала старые</option>
                </select>
            </div>

            <div className="sorting__container">
                <div>По выполнению: </div>
                <select 
                className="sorting__select" 
                name="performance" 
                value={sortCompleted} 
                onChange={ event=>{ setSortCompleted(event.target.value) } }
                >
                    <option value="NotFulfilled">Сначало не выполненные</option>
                    <option value="completed">Сначала выполненные</option>
                </select>
            </div>

        </div>
    )
}
export { Sorting }