import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import ImageDisplay from '../components/ImageDisplay';
import { supabase } from '../api/SupabaseConfig';
import '../styles/Home.css';
const imageSets = [
    [
        { src: 'https://via.placeholder.com/300?text=Image+1', alt: 'Image 1', title: 'Image 1' },
        { src: 'https://via.placeholder.com/300?text=Image+2', alt: 'Image 2', title: 'Image 2' },
        { src: 'https://via.placeholder.com/300?text=Image+3', alt: 'Image 3', title: 'Image 3' },
    ],
    [
        { src: 'https://via.placeholder.com/300?text=Image+4', alt: 'Image 4', title: 'Image 4' },
        { src: 'https://via.placeholder.com/300?text=Image+5', alt: 'Image 5', title: 'Image 5' },
        { src: 'https://via.placeholder.com/300?text=Image+6', alt: 'Image 6', title: 'Image 6' },
    ],
    [
        { src: 'https://via.placeholder.com/300?text=Image+7', alt: 'Image 7', title: 'Image 7' },
        { src: 'https://via.placeholder.com/300?text=Image+8', alt: 'Image 8', title: 'Image 8' },
        { src: 'https://via.placeholder.com/300?text=Image+9', alt: 'Image 9', title: 'Image 9' },
    ],
    [
        { src: 'https://via.placeholder.com/300?text=Image+10', alt: 'Image 10', title: 'Image 10' },
        { src: 'https://via.placeholder.com/300?text=Image+11', alt: 'Image 11', title: 'Image 11' },
        { src: 'https://via.placeholder.com/300?text=Image+12', alt: 'Image 12', title: 'Image 12' },
    ]
];

function Home() {
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('Travel')
                .select();

            if (error) {
                console.log("There's an error");
                console.log(error);
            }
            if (data) {
                console.log("Data fetched!");
                // console.log(data[0]);
                setTravels(data);
            }
        };

        fetchData();
    }, [])

    const { travels, setTravels } = useState([]);

    return (
        <Container style={{ paddingTop: 50 }}>
            {/* <div className="fade-bg-image">
                <img src='resources/home_background.jpg' />
            </div> */}
            <ImageDisplay imageSets={imageSets} />

        </Container>
    )
}

export default Home;