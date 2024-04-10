export default function Navigation(props) {

    return (
        <div className="navigation">
        <input type="radio" name="page-options" id="page-0" defaultChecked onClick={() => props.setSelectedPage(0)}/>
        <label htmlFor="page-0">Pratos Principais</label>
        <input type="radio" name="page-options" id="page-1" onClick={() => props.setSelectedPage(1)}/>
        <label htmlFor="page-1">Sobramesas</label>
        <input type="radio" name="page-options" id="page-2" onClick={() => props.setSelectedPage(2)}/>
        <label htmlFor="page-2">Babidas</label>
        </div>
    )
}