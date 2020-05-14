import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
        <div>
            <nav>
                <div className="nav-wrapper #e65100 orange darken-4">
        <a href="#" class="brand-logo"><i class="large material-icons">apps</i><b>{this.props.title+""+this.props.children}</b></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="collapsible.html"><i class="material-icons">person</i></a></li>
                
                    <li><a href="sass.html">Clothing</a></li>
                    <li><a href="badges.html">Electronics</a></li>
                    <li><a href="collapsible.html">Jewellry</a></li>
                    <li><a href="collapsible.html"><i class="material-icons">favorite</i></a></li>
                    <li><a href="collapsible.html"><i class="material-icons">local_grocery_store</i></a></li>
                </ul>
                </div>
            </nav>
        </div>
        );
    }

}
export default Header;