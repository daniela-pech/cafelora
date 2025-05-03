import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/header.jsx';
import { Banner } from '../components/banner/banner.jsx';
import { Menu } from '../components/menu/menu.jsx';
import { Gallery } from '../components/gallery/gallery.jsx';
import { Contact } from '../components/contact/contact.jsx';
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
