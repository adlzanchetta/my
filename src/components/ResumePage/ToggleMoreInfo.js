import { useState } from "react";


// sub component

const InfoTitle = ({title}) => {
    return (
        <span><strong>{title}:</strong></span>
    )
}

const InfoContent = ({value}) => {

    // if value is a string, return it
    if (typeof value === 'string') {
        return (<> {value} </>)
    }

    // if value is a list, return each item in a new line
    if (Array.isArray(value)) {
        return (
            <ul>
                {value.map((item, idx) => {
                    return <li key={idx}>{item}</li>
                })}
            </ul>
        )
    }

    // if value is something else, raise an error
    throw new Error("Invalid value type. Must be a string or a list.");
}


// main component

const ToggleMoreInfo = ({dict_of_lists, children}) => {

    const [showMoreInfo, setShowMoreInfo] = useState(false);

    if (!showMoreInfo) {
        return (
            <p className="toggleMoreInfo-show" onClick={() => setShowMoreInfo(true)}>
                (...)
            </p>
        )
    }

    return (
      <>
        {
          (dict_of_lists !== undefined) && (dict_of_lists !== null) && (Object.keys(dict_of_lists).length > 0) &&
            Object.entries(dict_of_lists).map(([key, value]) => {
                return (
                    <div key={key} className="moreInfo">
                        <InfoTitle title={key} />
                        <InfoContent value={value} />
                    </div>
                );
            })
        }
        <div className="moreInfo">
            {children}
        </div>
        <p className="toggleMoreInfo-show" onClick={() => setShowMoreInfo(false)}>
            [hide details]
        </p>
      </>
    )
}


export default ToggleMoreInfo;