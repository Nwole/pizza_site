
const MenuItem = ({name, price, photo}) => {
    return (
        <div className="menu-item">
            <img src={photo} alt="pizza image" />
            <h1>{name}</h1>
            <p>$ {price}</p>
        </div>
    )
}

export default MenuItem
