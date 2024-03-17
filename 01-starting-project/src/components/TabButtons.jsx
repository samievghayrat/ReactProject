export default function TabButton({children, onSelect}){
    function heandleClick(){
        console.log("Hello World");
    }
    return( <li><button onClick= {onSelect}>
        {children}</button></li>);}