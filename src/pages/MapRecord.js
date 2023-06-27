import React, { useEffect, useState } from 'react';
import { fetchAllMapRecords } from '../api/TravelsRepository';
import MapComponent from '../components/MapComponent';

function MapRecord() {
    const [records, setRecords] = useState(null);
    useEffect(() => {
        fetchAllMapRecords().then((data) => {
            // console.log(data);
            var locations = [];
            for (let record of data) {
                let location = [record.location[0], record.location[1]];
                locations.push(location);
            }
            // console.log(locations)
            setRecords(locations);
            console.log(records);
        })
    }, [])

    return (
        <div>
            {records && <MapComponent locations={records} />}
        </div>
    );
}

export default MapRecord;