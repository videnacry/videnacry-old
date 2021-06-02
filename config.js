const softwareState = 'prod'
const getUrls = (mode = softwareState) => {
    switch (mode) {
        case 'dev': return {
            appointment: {
                base: 'http://localhost:7000',
                getStatus: 'http://localhost:7000/appointment/status',
                put: 'http://localhost:7000/appointment'
            }
        }
        case 'prod': return {
            appointment: {
                base: 'https://codeship-fs.herokuapp.com',
                getStatus: 'https://codeship-fs.herokuapp.com/appointment/status',
                put: 'https://codeship-fs.herokuapp.com/appointment'
            }
        }
    }
}