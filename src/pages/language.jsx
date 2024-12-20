import React from 'react'

const Language = ({ langs ,handlerSelection}) => {
   
    return (
        <div className="language-menu">
            <ul>
                {langs.map((lang, index) =>
                    <li key={index} onClick={()=>handlerSelection(lang)}>{lang}</li>
                )}
            </ul>
        </div>
    )
}

export default Language
