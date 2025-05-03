import { Drink } from '../Drink/index.jsx';
import { Layer } from '../Layer/index.jsx';
import './menu.css';

export const Menu = ({ drinks }) => {
  console.log(drinks);
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {drinks.data.map((napoj) => (
            <Drink
              key={napoj.id}
              id={napoj.id}
              name={napoj.name}
              ordered={napoj.ordered}
              image={`http://localhost:4000${napoj.image}`}
              layers={napoj.layers}
            />
          ))}
        </div>

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
