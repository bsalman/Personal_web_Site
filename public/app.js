import React from 'react'
import ReactDom from 'react-dom'

import Router from './components/Router'

class App extends React.Component {
        render() {
            return ( <Router>
                        
                    </Router>)
            }
        }

        ReactDom.render( <App/> , document.querySelector('#container'))