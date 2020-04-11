import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';
import './style.css'
export default () => (
  <Layout>
    <div>
      <div>
        <h2>About</h2>
        <p>Here you can find typescript implementations of common design patterns.</p>
        <a href="https://www.youtube.com/playlist?list=PLF206E906175C7E07"> Design patterns - Youtube playlist </a>
      </div>
      <div className='patterns'>
        <div className="list">
          <h3>Missing</h3>
          <ul>
            <li>Abstract</li>
            <li>Flyweight</li>
          </ul>
        </div>
        <div className="list">
          <h3>Creational patterns</h3>
          <ul>
            <li><Link to="./builder">Builder</Link></li>
            <li><Link to="./factory">Factory</Link></li>
            <li><Link to="./strategy">Strategy</Link></li>
            <li><Link to="./prototype">Prototype</Link></li>
            <li><Link to="./singleton">Singleton</Link></li>
          </ul>
        </div>
        <div className="list">
          <h3>Structural patterns</h3>
          <ul>
            <li><Link to="./adapter">Adapter</Link></li>
            <li><Link to="./bridge">Bridge</Link></li>
            <li><Link to="./composite">Composite</Link></li>
            <li><Link to="./decorator">Decorator</Link></li>
            <li><Link to="./facade">Facade</Link></li>
            <li><Link to="./proxy">Proxy</Link></li>
          </ul>
        </div>
        <div className="list">
          <h3>Behavioral patterns</h3>
          <ul>
            <li><Link to="./chain">Chain</Link></li>
            <li> <Link to="./command">Command</Link> </li>
            <li><Link to="./iterator">Iterator</Link></li>
            <li><Link to="./mediator">Mediator</Link></li>
            {/* <li><Link to="./memento">Memento</Link></li> */}
            <li> <Link to="./observer">Observer</Link> </li>
            <li><Link to="./state">State</Link></li>
            {/* <li><Link to="./template">Template</Link></li> */}
            {/* <li><Link to="./test">Test</Link></li> */}
            {/* <li><Link to="./visitor">Visitor</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);
