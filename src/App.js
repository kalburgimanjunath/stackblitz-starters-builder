import React, { useEffect } from 'react';
import './style.css';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import plugin1 from 'grapesjs-preset-webpage';
import plugin2 from 'grapesjs-preset-newsletter';
import plugin3 from 'grapesjs-mjml';

export default function App() {
  useEffect(() => {
    var editor = grapesjs.init({
      container: '#gjs',
      components: '<div class="txt-red">Hello world!</div>',
      style: '.txt-red{color: red}',
      plugins: [plugin1, plugin2, plugin3],
      // blockManager: {
      //   appendTo: '#blocks',
      //   blocks: [
      //     // {
      //     //   id: 'section', // id is mandatory
      //     //   label: '<b>Section</b>', // You can use HTML/SVG inside labels
      //     //   attributes: { class: 'gjs-block-section' },
      //     //   content: `<section>
      //     //     <h1>This is a simple title</h1>
      //     //     <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
      //     //   </section>`,
      //     // },
      //     // {
      //     //   id: 'text',
      //     //   label: 'Text',
      //     //   content: '<div data-gjs-type="text">Insert your text here</div>',
      //     // },
      //     // {
      //     //   id: 'image',
      //     //   label: 'Image',
      //     //   // Select the component once it's dropped
      //     //   select: true,
      //     //   // You can pass components as a JSON instead of a simple HTML string,
      //     //   // in this case we also use a defined component type `image`
      //     //   content: { type: 'image' },
      //     //   // This triggers `active` event on dropped components and the `image`
      //     //   // reacts by opening the AssetManager
      //     //   activate: true,
      //     // },
      //   ],
      // },
    });
  }, []);
  return (
    <div>
      <div id="gjs"></div>
      <div id="blocks"></div>
    </div>
  );
}
