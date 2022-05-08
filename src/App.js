import React,{ Component } from 'react';
import Header from './components/Header'
import Gallery from './components/Gallery'
import Description from './components/Description'
import SearchBar from './components/SearchBar'


class App extends Component {
    render(){
        return (
        <div className="App">
            <Header />
            <SearchBar />
            <Gallery />
            <Description />

        </div>
        );
    }
}
export default App;
