function Flagged(props) {

    return (
      <li key={props.urlItem.key} className="resultsGroup flaggedGroup">
          <div className="resultsTitle flaggedTitle">
            <p><strong>FLAGGED</strong></p>
            <p>Phishing scams reported!</p>
          </div>
          <div className="resultsAddress flaggedAddress">
            <p>{props.urlItem.urlAddress}</p>
          </div>
          <div className="resultsDetails flaggedDetails">
            <p>Country</p>
            {props.urlItem.country == null ? <p>N/A</p> : <p>{props.urlItem.country}</p>}
          </div>
          <div className="resultsDetails flaggedDetails">
            <p>City</p>
            {props.urlItem.city == null ? <p>N/A</p> : <p>{props.urlItem.city}</p>}
          </div>
          <div className="resultsDetails flaggedDetails">
            <p>Viruses as well?</p>
            {props.urlItem.virus == null ? <p>N/A</p> : <p>{props.urlItem.virus}</p>}
          </div>
          <div className="resultsDetails flaggedDetails">
            <p>Threat Score (0-10)</p>
            {props.urlItem.score == null ? <p>N/A</p> : <p>{props.urlItem.score}</p>}
          </div>
          <p className="date"><em>Date: {props.urlItem.date}</em></p>

      </li>
    );


   
}

export default Flagged;







// function Flagged({urlData}) {
//     return (
        // <div className="resultsGroup flaggedGroup">
        //     <div className="resultsTitle flaggedTitle">
        //         <p><strong>FLAGGED</strong></p>
        //         <p>Phishing scams reported!</p>
        //     </div>
        //     <div className="resultsAddress flaggedAddress">
        //         <p>{urlData.urlAddress}</p>
        //     </div>
        //     <div className="resultsDetails flaggedDetails">
        //         <p>Country</p>
        //         { urlData.country == null ? <p>N/A</p> : <p>{urlData.country}</p> }
        //     </div>
        //     <div className="resultsDetails flaggedDetails">
        //         <p>City</p>
        //         { urlData.city == null ? <p>N/A</p> : <p>{urlData.city}</p> }
        //     </div>
        //     <div className="resultsDetails flaggedDetails">
        //         <p>Viruses as well?</p>
        //         { urlData.virus == null ? <p>N/A</p> : <p>{urlData.virus}</p> }
        //     </div>
        //     <div className="resultsDetails flaggedDetails">
        //         <p>Threat Score (0-10)</p>
        //         { urlData.score == null ? <p>N/A</p> : <p>{urlData.score}</p> }
        //     </div>
        // </div>
//     )
// }

// export default Flagged;