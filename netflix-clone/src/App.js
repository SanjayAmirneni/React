import React from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './Components/Request/requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner request={requests.fetchNetflixOriginals}/>
      <Row title="NETFLIX ORIGINALS" request={requests.fetchNetflixOriginals} large="true" />
      <Row title="Trending Now" request={requests.fetchTrending} />
      {/* <Row title="Top Rated" request={requests.fetchTopRated}/>
      <Row title="Action Movies" request={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" request={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" request={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" request={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" request={requests.fetchDocumantaries}/> */}
    </div>
  );
}

export default App;
