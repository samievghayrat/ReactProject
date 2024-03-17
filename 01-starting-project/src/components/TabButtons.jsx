export default function TabButton({children, onSelect, isSelected}) {
    function heandleClick() {
        console.log("Hello World");
    }

    return (<li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
            {children}</button>
    </li>);
}