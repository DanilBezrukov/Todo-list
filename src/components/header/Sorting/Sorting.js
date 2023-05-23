import { useLocalStorage } from "../../../hooks/useLocalStorage"
import { TaskContext } from "../../../contexts/TaskProvider"
import { useContext, useEffect } from "react"
import "./Sorting.css"
function Sorting({ activeCategory }) {
    const [sortDate, setSortDate] = useLocalStorage("sortDate", "new")
    const [sortCompleted, setSortCompleted] = useLocalStorage("sortCompleted", "NotFulfilled")
    const {Tasks, setTasks } = useContext(TaskContext)

    const sortAscending = (a, b) => {
        return new Date(b.date) - new Date(a.date);
    }
    const sortDescending = (a, b) => {
        return new Date(a.date) - new Date(b.date);
    }
    const dateSortingMethod = sortDate === "new" ? sortAscending : sortDescending

    const compareAscending = (a, b) => {
        if (a.flag && !b.flag) return -1;
        if (!a.flag && b.flag) return 1;
        return 0;
    };

    const compareDescending = (a, b) => {
        if (a.flag && !b.flag) return 1;
        if (!a.flag && b.flag) return -1;
        return 0;
    }

    const compareFunction = sortCompleted === "NotFulfilled" ? compareDescending : compareAscending;

    useEffect(() => {

        setTasks(state => {
            const tasks = [...state[activeCategory]]
            tasks.sort(dateSortingMethod).sort(compareFunction)
            return {
                ...state,
                [activeCategory] : tasks
            }
        })

    }, [sortDate, sortCompleted, Tasks])
    
    return (
        <div className="sorting" >
            <div className="sorting__container">
                <div>По дате: </div>
                <select
                    className="sorting__select"
                    name="date"
                    value={sortDate}
                    onChange={event => { setSortDate(event.target.value) }}
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
                    onChange={event => { setSortCompleted(event.target.value) }}
                >
                    <option value="NotFulfilled">Сначало не выполненные</option>
                    <option value="completed">Сначала выполненные</option>
                </select>
            </div>

        </div>
    )
}
export { Sorting }