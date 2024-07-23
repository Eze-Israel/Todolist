
export default function Counter({handleClick, count, children}) {


return(
    <>
        <button onClick={handleClick}>
        Clicked {count} times
        </button>
        {children}
    </>
);


}