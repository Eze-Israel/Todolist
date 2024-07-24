
export default function Counter({handleClick, count}) {


return(
    <>
        <button onClick={handleClick}>
        Clicked {count} times
        </button>
        {/* {children} */}
    </>
);


}