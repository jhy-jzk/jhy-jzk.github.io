import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import ImageDisplay from '../components/ImageDisplay';
import { supabase } from '../api/SupabaseConfig';
import '../styles/Home.css';

function Home() {
    const [travels, setTravels] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('travel')
                .select();

            if (error) {
                console.log("There's an error");
                console.log(error);
            }
            if (data) {
                console.log("Data fetched!");
                setTravels(data);
                console.log(data);
                // console.log(travels);
            }
        };

        fetchData();
    }, [])

    return (
        <Container style={{ paddingTop: 60 }}>
            {/* <div className="fade-bg-image">
                <img src='resources/home_background.jpg' />
            </div> */}
            {(travels === null) ?
                <Spinner animation="border" /> :
                // <div>AAAAAAAAA</div>
                <ImageDisplay travels={travels} />
            }

        </Container>
    )
}

export default Home;