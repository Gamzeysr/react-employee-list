
import "./Header.css"

const Header = ({ from, to }) => {
    return (
        <div className='header'>
            <h1>Employee List</h1>
            <h4>(Employes {from} to {to} to)</h4>

        </div >
    )
}

export default Header