import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { Menu } from '../components/Menu/Menu.jsx';
import { Gallery } from '../components/Gallery/Gallery.jsx';
import { Contact } from '../components/Contact/Contact.jsx';
import { Footer } from '../components/footer/footer.jsx';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const rollout = document.querySelector('.rollout-nav');
const rozbaleniNavigace = (evt) => {
  rollout.classList.toggle('nav-closed');
};
const ikonaNavigace = document.querySelector('.nav-btn');
ikonaNavigace.addEventListener('click', rozbaleniNavigace);
rollout.addEventListener('click', rozbaleniNavigace);
