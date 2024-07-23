const products = [
{title: 'Cabbage', isFruit: false, id:1},
{title: 'Garlic', isFruit: true, id:2},
{title: 'Apple', isFruit: false, id:3},

];
export default function RenderList() {
    const listItems = products.map(product => 
        <li
        key={product.id}
        style={{
            color:product.isFruit ? "magenta" : 'darkgreen'
        }}
        >
            {product.title}
            </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}