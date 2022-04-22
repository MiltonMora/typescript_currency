import { apiResponse } from "../types/types";

const ShowCurrency = ({data}: {data:apiResponse}):JSX.Element => {
    return (
        <div>
            {Object.entries(data.rates).map((el) => {
              return  (<p key={el[0]}>{`1 UER equivale a ${el[1]} ${el[0]}`}</p>)
            })}
        </div>
    )
}

export default ShowCurrency;