import React from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = 'AIzaSyBx1GmOXC3CLSgfvPNYpu0CEDItEMN3W0M';

const GoOgleMap: React.FC = () => {
    const handleApiLoaded = (map: any, maps: any) => {
        // Use the map and maps objects here
    };

    return (
        <div style={{ height: '400px', width: '95%',margin:'0 auto' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={{ lat: 21.422510, lng: 39.826168 }}
                defaultZoom={10}
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {/* Add any additional components or markers here */}
            </GoogleMapReact>
        </div>
    );
};

export default GoOgleMap;
