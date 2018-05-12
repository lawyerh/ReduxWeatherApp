import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function Chart(props){

    function average(data){
        return _.round(_.sum(data) / data.length);
    }

    return(
        <div>
            <Sparklines 
                svgHeight={props.height} 
                svgWidth={props.width}
                data={props.data}>

                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />

            </Sparklines>
            <div>{average(props.data)}{props.type}</div>
        </div>
    );
}

export default Chart;