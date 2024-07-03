import historicalEventsRepository from '../repository/historicalEventsRepository'

exports.getHistoricalEventsByOcurrence = (ctx) => {
    const ocurrence = ctx.params.ocurrence
    if ((containsNumber(ocurrence))){
        ctx.status = 400;
        ctx.message = "El input debe ser ac o dc";
    }
    else {
        ctx.body = historicalEventsRepository.getHistoricalEvents(ctx.params.ocurrence)
    }
    return ctx
}

function containsNumber(str) {
    // Check if the string contains any digit between 0 and 9
    return /\d/.test(str);
}