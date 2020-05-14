import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
            <footer class="page-footer #ffb74d orange lighten-2">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">FOR CLASS COLLECTIONS</h5>
                <p class="grey-text text-lighten-4">“If you do build a great experience, Shoppers tell each other about that.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Your E-Mart</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Clothing</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Elecetronics</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Jewellry</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright #e65100 orange darken-4">
            <div class="container">
            © 2020 Copyright reserved by <b>sunil enterprise</b>
            <a class="grey-text text-lighten-4 right" href="#!"><i class="material-icons">mail</i> <i class="material-icons">payment</i></a>
            </div>
          </div>
        </footer>
    </div>
        )
    }
}
export default Footer;