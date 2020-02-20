import React from "react";

function MainBody(){
    return (
        <section>
        <h2>LIST OF UNOREDRED TASKS</h2>
            <ul>
                <li>This is TODO item One</li>
                <li>This is TODO item Two</li>
                <li>This is TODO item Three</li>
            </ul>
            <hr />
        <h2>LIST OF ORDERED TASKS</h2>
            <ol>
                <li>This is ordered TODO item One</li>
                <li>This is ordered TODO item Two</li>
                <li>This is ordered TODO item Three</li>
      </ol>
      </section>
    )
}

export default MainBody;