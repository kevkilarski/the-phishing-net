// importing additional features
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

// importing components
import LoadingArrow from './LoadingArrow.js';
import Output from './Output.js';
import Clean from './Clean.js';
import Flagged from './Flagged.js';


const App = () => {


  // --- For Loading Notification ---
  const [isLoading, setLoading] = useState(false);




  // Utilizing useState Hook to store data from each API call, to be used a a prop
  const [url, setUrl] = useState({});



  // Utilizing useState Hook to store text field information
  const [userText, setUserText] = useState("");


  // Utilizing useState Hook to store toggle for flagged urls
  const [flaggedToggle, setFlaggedToggle] = useState('No results');

  // // Utilizing useState Hook to store toggle for flagged urls
  // const [submitToggle, setSubmitToggle] = useState(false);

  // Utilizing useState Hook to store toggle for whether text was entered
  const [needText, setNeedText] = useState(false);

  // Utilizing useState Hook to store toggle for submission
  const [submit, setSubmit] = useState();

  const [submitToggle, setSubmitToggle] = useState(0);

    const handleChange = (event) => {
      // console.log("Handle Change", event);
      console.log("it changed!");
      console.log(event.target.value);
      setUserText(event.target.value);
    }



  // Form Functions
    // Function to handle user input submission
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const urlCheck = userText.substr(0,4);
      console.log(urlCheck);

      if (urlCheck !== "http") {
        alert("That aint no url!");
        setUserText("");
      } else {
      // console.log(userText);
      // setUserText('');
      if (userText) {
        setSubmitToggle(1);
        setNeedText(false);
        // --- For Loading Notification ---
        setLoading(true);
        setSubmit(userText);
      } else {
        setNeedText(true);
        // alert("Need text!");
      }

      
      }




    }




  
  // Utilizing useEffect Hook for API call, to render when necessary
  useEffect( () => {

  if (submitToggle === 1) {
    

    axios({
      method: 'GET',
      url: 'https://phishstats.info:2096/api/phishing',
      dataResponse: 'json',
      params: {
        _where: `(url,eq,${submit})`,
        // _where: '(url,eq,https://applecloud-ma.com/)',
        // _where: '(url,eq,https://apple.com/)',
        // _where: `(url,like,~${submit}~)`,
        _sort: '-id'
      }
    }).then( (response) => {
      console.log("API RESPONSE", response);
      console.log("USER TEXT", userText);
      console.log("API RESPONSE FOR STATE", response.data[0]);
      console.log("SUBMIT", submit);

      if (response.data.length === 0) {
        setFlaggedToggle('Clean');
      } else {
        setFlaggedToggle('Flagged');
        setUrl(response.data[0]);
      }

      setUserText("");


      // --- For Loading Notification ---
      setLoading(false);

      setSubmitToggle(0);
    });
  } }, [submit, userText, submitToggle]);


  return (
    // Using a fractional to add multiple unrelated elements
    <>
      <div className="background">
        <header>
          <div className="wrapper">
            <h1>Phishing Net</h1>
          </div>
        </header>

        <section className="description">
          <div className="wrapper">
              <h2>Tired of being lured by scammers? <span>Untangle yourself using this reel handy app!</span></h2>
              <p>Created by Kevin Kilarski at <a href="https://junocollege.com/">Juno College</a> <span>using the <a href="https://phishstats.info/">PhishStas API</a></span></p>
          </div>
        </section>

        <section className="input">
          <div className="wrapper">
            <form onSubmit={handleSubmit} className="formUrl">
              <label htmlFor="searchUrl">Please Enter a URL:</label>
              <input type="text" onChange={ handleChange } value={ userText} id="searchUrl" className="searchUrlInput" placeholder="Example: https://www.apple.com"></input>
              <button type="submit">Is this Website Phishy?</button>
            </form>
            { needText ? <p className="needText">Enter your url above!</p> : <p className="displayNone">Nothing</p> }
            { submit && !needText ? <LoadingArrow isLoading={isLoading} /> : <p className="displayNone">Nothing</p> }
          </div>
        </section>

      

      </div>

      <Output>
        {
          // urlData.flagged === true ? <Flagged urlObject={urlData} /> : <Clean urlAddress={urlData.urlAddress} />
          // urlData.flagged === true ? <Flagged urlAddress={urlData.urlAddress} country={urlData.country} city={urlData.city} score={urlData.score} timesFlagged={urlData.timesFlagged} virus={urlData.virus}/> : <Clean urlAddress={urlData.urlAddress} />
          // url ? <Flagged urlAddress={url}/> : <Clean urlAddress={url} />

          submit && flaggedToggle === 'Flagged' ? <Flagged urlAddress={url.url} country={url.countryname} city={url.city} score={url.score} timesFlagged={url.n_times_seen_ip} virus={url.virus_total} /> : submit && flaggedToggle === 'Clean' ? <Clean urlAddress={submit} /> : <p className="displayNone">Nothing</p>
        }
      </Output>

    </>
  );
}

export default App;













// --Pseudocode--

// Create landing Page that contains
// - the header (title)
// - text form submit button

// Create Components
// - input (enter url)
// - output
//     - clean message
//     - suspicious message

// Mount Components

// Create State items to hold data for render
// - user input
// - PhishStats API

// Add Event for 'submit' button, to pass infomation to userInput component

// Add useEffect for condition for determining if clean or suspicious message will appear

// Add props to Components
// - cleanMessage
//     - Condition for appearing or not
//     - API json properties (Country of Origin, Times Identified as Phishing)
// - suspiciousMessage
//     - Condition for appearing or not
//     - API json properties (Country of Origin, Times Identified as Phishing)

// Render: Upon button press, send API information to useEffect
// - pass API information to and render clean or suspicious component

