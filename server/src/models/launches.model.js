const launches = new Map()

let latestFlightNumber = 100

function existLaunchWithId(launchId){
    return launches.has(launchId)
}

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}

function getAllLaunches(){
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    latestFlightNumber++
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ['Zero To Mastery', 'Nasa'],
            flightNumber: latestFlightNumber
        }))
}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId)
    aborted.upcoming = false
    aborted.success = false
    return aborted
}

launches.set(launch.flightNumber, launch)

module.exports = {
    getAllLaunches, 
    addNewLaunch,
    existLaunchWithId,
    abortLaunchById
}