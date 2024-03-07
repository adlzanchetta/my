import { useState } from "react";


const BasicInfo = ({children}) => {
    return (
        <div className="basicInfo">
            {children}
        </div>
    )
}


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
                        <span><strong>{key}:</strong></span>
                        <ul>
                            {value.map((item, idx) => {
                                return <li key={idx}>{item}</li>
                            })}
                        </ul>
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

export { BasicInfo, ToggleMoreInfo }