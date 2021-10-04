function Clean({urlItem}) {
    return (
        <li key={urlItem.key}>
            <div className="resultsGroup cleanGroup">
                <div className="resultsTitle cleanTitle">
                    <p><strong>CLEAN</strong></p>
                    <p>No phishing scams reported.</p>
                </div>
                <div className="resultsAddress cleanAddress">
                    <p>{urlItem.cleanUrlAddress}</p>
                </div>
                <div className="resultsDetails cleanDetails">
                    <p>Safe waters ahoy!</p>
                </div>
            </div>
        </li>
    )
}

export default Clean;








// function Clean(props) {
//     return (
//         <div className="resultsGroup cleanGroup">
//             <div className="resultsTitle cleanTitle">
//                 <p><strong>CLEAN</strong></p>
//                 <p>No phishing scams reported.</p>
//             </div>
//             <div className="resultsAddress cleanAddress">
//                 <p>{props.urlAddress}</p>
//             </div>
//             <div className="resultsDetails cleanDetails">
//                 <p>Safe waters ahoy!</p>
//             </div>
//         </div>
//     )
// }

// export default Clean;