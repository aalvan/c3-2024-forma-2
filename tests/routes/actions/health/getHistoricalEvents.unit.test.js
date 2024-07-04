import { getHistoricalEvents } from '../../../../src/domain/historical_events/repository/historicalEventsRepository'

test('should return a non empty list if ocurrence = ac', () =>{
    const ocurrence = 'ac'
    const historicalEvents = getHistoricalEvents(ocurrence)

    let empty = true
    if (historicalEvents != []){
        empty = false
    }
    expect(empty).toBe(false)
});

test('should return a non empty list if ocurrence = dc', () =>{
    const ocurrence = 'dc'
    const historicalEvents = getHistoricalEvents(ocurrence)

    let empty = true
    if (historicalEvents != []){
        empty = false
    }
    expect(empty).toBe(false)
});