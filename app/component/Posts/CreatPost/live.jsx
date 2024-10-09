import { useState } from 'react';

export default function CameraComponent() {
    const [videoStream, setVideoStream] = useState(null);

    const handleOpenCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                setVideoStream(stream);
            })
            .catch(err => {
                console.error('Error accessing the camera:', err);
            });
    };

    return (
        <div>
            <input
                type="button"
                value="Click to Open Camera"
                onClick={handleOpenCamera}
                style={{
                    width: '200px',
                    height: '50px',
                    backgroundColor: 'lightblue',
                    textAlign: 'center',
                    cursor: 'pointer'
                }}
            />

            {videoStream && (
                <video
                    autoPlay
                    style={{ width: '400px', height: '300px' }}
                    ref={(video) => {
                        if (video) video.srcObject = videoStream;
                    }}
                />
            )}
        </div>
    );
}
