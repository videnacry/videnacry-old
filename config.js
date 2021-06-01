const softwareState = 'dev'
const getUrls = (mode = softwareState) => {
    switch (mode) {
        case 'dev': return {
            appointment: {
                base: 'http://localhost:7000',
                getStatus: 'http://localhost:7000/appointment/status',
                put: 'http://localhost:7000/appointment'
            }
        }
    }
}